# Validation — September 29, 2026

## Foundation Checks

- README title and repository name use Awesome Gaffer / awesome-gaffer.
- The main list has 50 resource entries, categorized into introductions, installation, artist learning, lighting, videos, assets, USD, technical learning, tools, references and community.
- Each main resource entry has a consistent description. No duplicate main-list resource URLs were found.
- The 9 Markdown documents have 33 working internal file or heading links.
- The repository includes contribution guidelines, the CC0 license, curation criteria, a practical learning path, Arnold setup, Maya tool translations and a separate resource-review file.
- Website design and deployment are deferred. No prior prototype files were modified.

## Source-Link Results

The automated check inspected 61 unique external URLs: 58 returned successful HTTP responses, and 3 could not be resolved by that client. See [the individual results](link-check.json).

Two unresolved URLs were subsequently retrieved through the web research tool: the GafferHQ multi-shot demo article and its historical GafferBot walkthrough article. The Gaffer Wiki page remains unresolved and is retained only in Resource Review. No broken HTTP 404 or 410 responses were found in the automated check.

A successful response establishes access, not that a tutorial or integration works in a studio. The list descriptions use inspected documentation and project sources; hands-on Gaffer/Arnold execution, full-video review and integration compatibility are not claimed.

## Scope Audit

| Requested outcome | Evidence |
|---|---|
| awesome-gaffer name | README title and dedicated repository. |
| Awesome resource-list foundation | Contents, categories, useful descriptions, contribution rules and content license. |
| Structure similar to Awesome OpenUSD | Separate artist/technical learning, tools, sample assets and references. |
| Beginner-oriented starting point | Start Here plus Maya learning path and tool translations. |
| arisOS project | Projects/awesome-gaffer with repository under Outputs/repository. |
| GitHub source first | Private ArisLlamas/awesome-gaffer repository and matching pushed main branch. |
| Design research later | No website rebuild or deployment in this foundation repository. |

Run `node scripts/check-links.mjs --local` for structural checks or omit `--local` for a fresh external check. Later HTTP outcomes may differ from this dated record.
