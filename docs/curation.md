# Curation Notes

Reviewed November 25, 2026. Main scope: practical Gaffer learning resources and references for new artists, lighting artists, and technical directors (TDs). Technical topics stay grouped so beginners can skip them until their first render works.

## Selection Standard

Include a resource when it solves a clear task, loads reliably, and adds value beyond other entries. Prefer official documentation and original authors. State what task the resource helps with instead of repeating marketing copy. Keep the main list focused on strong starting points rather than every page that mentions Gaffer.

Pin Gaffer documentation to 1.7.7.0 where practical. Label historical instruction clearly. Do not assume an unarchived GitHub repository supports Gaffer 1.7.7.0 without checking recent commits and tests. Current OpenUSD docs explain concepts well, but they do not prove support in Gaffer's bundled Universal Scene Description (USD) version.

## Evidence Levels

- **Read:** We opened the linked page, repository, publisher metadata, or captions and confirmed the description matches.
- **Unchecked:** Access or evidence remains incomplete.
- **Tested:** Someone reproduced the task on a workstation and added a row in [Runtime Test Log](test-log.md).

This repository currently relies on source inspection and automated link checks. It does not claim hands-on workstation testing for every tutorial, asset, or studio integration. Full video transcripts are not copied into this repo.

## Sources for the List Format

- [Awesome Manifesto](https://github.com/sindresorhus/awesome/blob/main/awesome.md) - [Both] [Read] Scope, clear descriptions, licensing, and contribution conventions.
- [Creating a List](https://github.com/sindresorhus/awesome/blob/main/create-list.md) - [Both] [Read] List structure and maintenance guidance.
- [Awesome List Requirements](https://github.com/sindresorhus/awesome/blob/main/pull_request_template.md) - [Both] [Read] Naming, contents, consistent entries, and review criteria.
- [Awesome OpenUSD](https://github.com/matiascodesal/awesome-openusd) - [Both] [Read] Structural inspiration for separating artist learning, technical learning, samples, and references.

We have not submitted this independent repository to the upstream Awesome index. Following the Awesome format does not imply upstream listing.

## Check the Repository

With Node.js 20 or newer:

    node scripts/build-readme.mjs --check
    node scripts/check-links.mjs --local
    node scripts/ste-lint.mjs
    node scripts/check-links.mjs

The scripts check README sync, local links and anchors, entry format, duplicate URLs, STE wording rules, and external HTTP responses. The full check writes `docs/link-check.json`. HTTP 200 confirms reachability, not runtime compatibility. See [Validation](validation.md) for the latest check summary.

The repository's CC0 license covers original text here. Every linked external resource keeps its own license; linking grants no redistribution rights.
