# Curation Notes

Reviewed September 29, 2026. Main scope: Gaffer learning and practical references for artists, with a lighting-first route for Maya users. Technical resources are separate so beginners can defer them.

## Selection Standard

Include a resource when it answers a specific task, has an inspectable source and adds value beyond another entry. Prefer original authors and official documentation. Describe why to open it rather than repeating a product slogan. Limit the main list to useful starting points; this is not a complete inventory of everything mentioning Gaffer.

Pin Gaffer documentation to 1.7.3.0 where practical. Label historical instruction. Do not infer current compatibility from an unarchived GitHub repository. Current OpenUSD material explains concepts but does not establish support in Gaffer's bundled version.

## Evidence Levels

- Source reviewed: the page, documentation or repository description supports the entry.
- Link checked: the URL responded during the recorded check.
- Hands-on checked: someone reproduced the relevant task and recorded versions and results.

The current foundation has source review and link checks. It does not claim hands-on review of all tutorials, assets, integrations or renderer setup. External video links were identified from GafferHQ pages; their full contents were not transcribed or rated.

## Sources for the List Format

- [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md) - Curation, useful descriptions, scope, licensing and contribution guidance.
- [Creating a List](https://github.com/sindresorhus/awesome/blob/main/create-list.md) - List creation and maturation guidance.
- [Awesome List Requirements](https://github.com/sindresorhus/awesome/blob/main/pull_request_template.md) - Naming, contents, consistent entries and related conventions.
- [Awesome OpenUSD](https://github.com/matiascodesal/awesome-openusd) - Structural reference for introductions, artist/technical learning, samples and references.

This independent, AI-assisted foundation has not been submitted to the upstream Awesome index. Its submission rules include human curation and maturity requirements; an Awesome-style repository does not establish upstream eligibility or acceptance.

## Check the Repository

With Node.js 20 or newer:

    node scripts/check-links.mjs --local
    node scripts/check-links.mjs

The script checks Markdown file links and heading anchors, entry formatting, required documents, duplicate main-list resource URLs and external HTTP responses. It writes `docs/link-check.json` for the full check. HTTP success is not a content-quality or runtime-compatibility test. See [Validation](validation.md) for the checked state.

The original list text is covered by the repository's CC0 license. External resources keep their own licenses; linking does not grant redistribution rights.
