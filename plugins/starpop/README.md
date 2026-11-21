# Starpop

Starpop makes ads with your agent. Import a brand and its products from a website, search proven ads for ideas, then generate on-brand images, videos, voiceovers, and music, replicate a reference video's format, and edit the results into finished ads. Bundled skills carry Starpop's production rules and ad formats, such as podcast ads, explainers, and animated characters. For marketers, founders, and agencies who make paid-social and short-form video ads. Requires a Starpop account; it works with the brands, products, and media saved in that account's organizations.

## What it connects to

- **Starpop's MCP server** at https://starpop.ai/api/mcp. You sign in to Starpop in your browser, and the agent works only in the Starpop organizations you allow for it. Your requests, and the media you choose to use, go to Starpop to generate and edit ads. Generations use your organization's Starpop credits.
- **Starpop's file host**, files.starpop.org, where finished images, videos, and audio are downloaded from.

The plugin itself contacts no other service.

## What it runs

In Claude Code, after a Starpop tool finishes media, a hook runs `scripts/save-starpop-outputs.mjs` with Node. It reads that tool's result, downloads each finished file from the link Starpop returned, and saves it under `./starpop/<project>/` in your working directory, with a `manifest.json` of each file's inputs. It writes nothing outside `./starpop/`, sends no data, and a failed download never blocks the conversation.

## Skills

- `starpop-foundations`
- `replicate-video`
- `icp-research-and-offering-analysis`
- `animated-talking-character`
- `whiteboard-explainer`
- `parchment-history-explainer`
- `skeleton-ads`
- `ai-podcast-ads`
- `zack-d-films`
- `paper-animation`
- `claymation-animation`
- `disney-pixar-animation`
- `cinematic-3d-animation`
- `comic-illustration-animation`
- `chibi-3d-animation`
- `wool-crochet-animation`
- `song-style-ad`

## Install

Claude Code:

```sh
claude plugin install starpop --marketplace starpopai/plugins
```

Codex:

```sh
codex plugin marketplace add starpopai/plugins && codex plugin add starpop@starpop
```

Then sign in to Starpop in the browser that opens and start a new session.

## Support

- Help and contact: https://starpop.ai/docs/integrations/mcp#setup-help or support@starpop.ai
- Privacy policy: https://starpop.ai/privacy
- Terms of service: https://starpop.ai/terms

See LICENSE for the terms of use.
