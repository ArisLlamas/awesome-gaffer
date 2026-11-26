# Validation — November 25, 2026

## Gaffer 1.7.7.0 Adversarial Overhaul

- Retargeted versioned Gaffer documentation links from 1.7.6.0 to 1.7.7.0.
- Expanded `data/resources.yml` with Cycles, Arnold, RenderMan, 3Delight, batch rendering, EditScope, RenderPasses, and OpenColorIO references.
- Added full Python API, OSL, CLI, MCP, community Discord, forum, and active 2026 integration links.
- Removed the dead `gaffer.wiki` link and the redundant YouTube duplicate. Replaced the thin `Interface/index.html` stub and the unchecked Arnold SPA link.
- Added [Core Concepts Explained Simply](core-concepts.md) plus inline plain-English explainers across `README.md`.
- Removed the banned-word bypass from `scripts/ste-lint.mjs` and resolved all passive-voice and STE lint warnings.
- The [runtime test log](test-log.md) stays empty until someone completes hands-on workstation tests in Gaffer 1.7.7.0.

## Source and Local Checks

The [link report](link-check.json) records the latest external check. An HTTP 200 confirms reachability, not hands-on runtime compatibility.

Local checks verify README generation (`build-readme.mjs --check`), internal links and anchors (`check-links.mjs --local`), duplicate resource URLs, and ASD-STE100 rules (`ste-lint.mjs`).

## Video Evidence

The September 29, 2026 review inspected automatic YouTube captions and publisher metadata, plus Vimeo publisher descriptions. The November 25, 2026 pass verified YouTube oEmbed metadata for the February 2026 macOS install walkthroughs. See [Video Learning Notes](video-notes.md) and [Vimeo Collection Notes](vimeo-resources.md) for evidence limits.
