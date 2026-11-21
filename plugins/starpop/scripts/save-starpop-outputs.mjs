#!/usr/bin/env node
// Claude Code PostToolUse hook for the Starpop plugin. It downloads every
// completed Starpop output to its suggested path under the working directory,
// records each file's inputs in the project's manifest, and tells the agent
// where the files are. A failed download never blocks the conversation.
import { access, mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

const OUTPUT_ROOT = "starpop";
const DOWNLOAD_TIMEOUT_MS = 120_000;
const SAVE_LINE = /save to (\S+) from (\S+) before/g;

// The script ships without dependencies, so these two predicates are its
// parser for the hook's JSON input.
function isText(value) {
  return typeof value === "string";
}

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

async function readStdin() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

function webUrl(value) {
  if (!isText(value)) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:"
      ? url.href
      : null;
  } catch {
    return null;
  }
}

// Only relative paths inside starpop/ are written; nothing else on disk.
function safeTarget(cwd, suggestedPath) {
  if (!isText(suggestedPath) || path.isAbsolute(suggestedPath)) return null;
  const normalized = path.posix.normalize(suggestedPath);
  if (
    !normalized.startsWith(`${OUTPUT_ROOT}/`) ||
    normalized.split("/").includes("..")
  ) {
    return null;
  }
  const target = path.resolve(cwd, normalized);
  return target.startsWith(path.resolve(cwd, OUTPUT_ROOT) + path.sep)
    ? target
    : null;
}

function collectOutputs(value, job, outputs) {
  if (isText(value)) {
    const text = value.trim();
    if (text.startsWith("{") || text.startsWith("[")) {
      try {
        collectOutputs(JSON.parse(text), job, outputs);
        return;
      } catch {
        // Plain text; read save instructions below.
      }
    }
    for (const match of text.matchAll(SAVE_LINE)) {
      outputs.push({ suggestedPath: match[1], url: match[2], ref: null, job });
    }
    return;
  }
  if (Array.isArray(value)) {
    for (const item of value) collectOutputs(item, job, outputs);
    return;
  }
  if (!isRecord(value)) return;
  const nextJob = isText(value.jobId)
    ? {
        jobId: value.jobId,
        request: isRecord(value.request) ? value.request : null,
      }
    : job;
  const url = webUrl(value.viewUrl);
  if (url && isText(value.suggestedLocalPath)) {
    outputs.push({
      suggestedPath: value.suggestedLocalPath,
      url,
      ref:
        [value.ref, value.imageRef, value.audioRef, value.video].find(isText) ??
        null,
      job: nextJob,
    });
  }
  for (const [key, child] of Object.entries(value)) {
    if (key !== "viewUrl") collectOutputs(child, nextJob, outputs);
  }
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

async function download(url, target) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(DOWNLOAD_TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`HTTP ${String(response.status)}`);
  await mkdir(path.dirname(target), { recursive: true });
  const partial = `${target}.partial`;
  await writeFile(partial, Buffer.from(await response.arrayBuffer()));
  await rename(partial, target);
}

async function recordInManifest(cwd, saved) {
  const byFolder = new Map();
  for (const item of saved) {
    const folder = path.posix.dirname(path.posix.normalize(item.suggestedPath));
    byFolder.set(folder, [...(byFolder.get(folder) ?? []), item]);
  }
  for (const [folder, items] of byFolder) {
    const manifestPath = path.resolve(cwd, folder, "manifest.json");
    let manifest = { outputs: {} };
    try {
      const parsed = JSON.parse(await readFile(manifestPath, "utf8"));
      if (isRecord(parsed) && isRecord(parsed.outputs)) manifest = parsed;
    } catch {
      // First output in this project folder.
    }
    for (const item of items) {
      manifest.outputs[path.posix.basename(item.suggestedPath)] = {
        ref: item.ref,
        jobId: item.job?.jobId ?? null,
        model: item.job?.request?.model ?? null,
        prompt: item.job?.request?.prompt ?? null,
        references: item.job?.request?.references ?? [],
        savedAt: new Date().toISOString(),
      };
    }
    await mkdir(path.dirname(manifestPath), { recursive: true });
    await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  }
}

async function main() {
  const input = JSON.parse(await readStdin());
  const cwd = isText(input.cwd) ? input.cwd : process.cwd();
  const found = [];
  collectOutputs(input.tool_response, null, found);
  // Text and structured results name the same files; keep the entry that
  // carries the job's inputs.
  const byPath = new Map();
  for (const item of found) {
    const current = byPath.get(item.suggestedPath);
    if (!current || (!current.job && item.job))
      byPath.set(item.suggestedPath, item);
  }
  const unique = [...byPath.values()];

  const saved = [];
  const failed = [];
  for (const item of unique) {
    const target = safeTarget(cwd, item.suggestedPath);
    if (!target) continue;
    try {
      if (!(await exists(target))) await download(item.url, target);
      saved.push(item);
    } catch (error) {
      failed.push(
        `${item.suggestedPath} (${error instanceof Error ? error.message : "download failed"})`,
      );
    }
  }
  if (saved.length > 0) await recordInManifest(cwd, saved);

  const notes = [];
  if (saved.length > 0) {
    notes.push(
      `Starpop outputs are already saved locally: ${saved
        .map((item) =>
          item.ref ? `${item.suggestedPath} (${item.ref})` : item.suggestedPath,
        )
        .join(
          ", ",
        )}. Use these files for local work; keep using the media references as generation inputs.`,
    );
  }
  if (failed.length > 0) {
    notes.push(
      `These Starpop outputs could not be saved automatically; download them from their URLs: ${failed.join(", ")}.`,
    );
  }
  if (notes.length === 0) return;
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PostToolUse",
        additionalContext: notes.join(" "),
      },
    }),
  );
}

main().catch((error) => {
  process.stderr.write(
    `Starpop output saving skipped: ${error instanceof Error ? error.message : String(error)}\n`,
  );
});
