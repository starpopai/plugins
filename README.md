# Starpop plugins

Create ads with Starpop: brand and product context, image, video, speech, and music generation, reference-video replication, and Starpop's production skills. Finished outputs are saved to ./starpop/<project>/.

This repository is generated from Starpop's agent definitions. Don't edit it by hand.

## Install

Claude Code:

```sh
claude plugin install starpop --marketplace starpopai/plugins
```

Codex:

```sh
codex plugin marketplace add starpopai/plugins && codex plugin add starpop@starpop
```

Then sign in to Starpop in the browser and start a new session. Connecting is free; generating media needs a paid Starpop plan.

Full setup guide, including ChatGPT, Claude, Gemini, and Grok: https://starpop.ai/docs/integrations/mcp
