# Contribution Guidelines

Suggest a resource that helps an artist or TD do a specific Gaffer task. A short useful list is better than an exhaustive directory.

## Add a Resource

1. Open the source and check that it does what your description says.
2. Explain who it helps, which task it covers, and why it deserves a place.
3. Check the version, renderer, platform, cost and access requirements where relevant.
4. Add it to the most specific section using this format:

       - [Resource Name](https://example.com/) - Clear sentence explaining its use.

5. Use an original description starting with a capital letter and ending with a period.
6. Link to the author's source, not a search-result page or an unattributed mirror.
7. Check internal links and duplicate URLs with `node scripts/check-links.mjs --local`. Use `node scripts/check-links.mjs` for the external HTTP check too.

## Selection

Prefer official documentation, author-published examples and clear practical instruction. Put artist learning before implementation details. Do not add a resource solely because its URL responds.

Keep historical, archived, unreviewed or compatibility-uncertain resources in `docs/resource-review.md` with a reason. A resource can move into the main list when its usefulness and limits have been reviewed. Hands-on testing must be recorded separately from page inspection; never claim either without evidence.

Do not copy assets, videos, screenshots or studio material into this repository without the appropriate permission. Linked resources retain their own licenses. Do not include credentials, license servers, internal paths or confidential examples.

## Corrections

For a broken or misleading entry, propose a replacement and explain the change. For a tutorial, record the relevant Gaffer and renderer versions. For video instruction, include timestamps only after actually watching that segment.
