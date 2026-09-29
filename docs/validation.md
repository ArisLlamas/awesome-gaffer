# Validation — September 29, 2026

## Foundation and Video Update

- Main list: 57 categorized resource entries, including four supplied 2024 artist tutorials and three GafferHQ user-group recordings.
- Both supplied older YouTube talks remain explicitly historical in Resource Review and Video Learning Notes.
- Six YouTube records include title, publisher, upload date, duration and publisher chapters. Selected English automatic-caption sections informed paraphrased notes; visual review and graph reproduction are not claimed.
- Thirty GafferHQ Vimeo entries have public listing and oEmbed metadata. Company talks, focused demonstrations and development updates are separated in Vimeo Collection Notes. Detailed spoken/visual content extraction is pending because caption extraction required login.
- The catalogue contains 36 records. All six requested YouTube IDs are present exactly once; all 30 Vimeo entries identify the Gaffer publisher, and no metadata fetch failed.
- Local Markdown checks found no missing file/heading links, malformed main entries or duplicate main resource URLs. See [check results](link-check.json) for counts.
- The practical learning path now includes stable editor focus, affected-path diagnosis, EditScope provenance and Spreadsheet matching/defaults.
- Private GitHub delivery is the target; website design, deployment and hands-on Gaffer/Arnold testing remain deferred. No prior prototype files were modified.

## Source-Link Results

The external check inspected 105 unique URLs: 102 returned successful HTTP responses and 3 remain unresolved by the checking client. All newly added video URLs responded successfully; no 404 or 410 responses were found. The full results are in [link-check.json](link-check.json).

The unresolved URLs are the GafferHQ multi-shot demo article, its historical GafferBot walkthrough article and the Gaffer Wiki page. The two blog articles were retrieved through the web research tool in earlier foundation research. The wiki stays in Resource Review. A timeout is not proof that a source is dead.

HTTP success establishes access, not content quality or runtime compatibility. YouTube findings use automatic captions and distinguish publisher chapter boundaries from approximate observation ranges and our own proposed exercises. Vimeo findings use publisher descriptions only. Full videos, transcripts, private studio scripts and creator assets are not redistributed.

## Scope Audit

| Requested outcome | Evidence |
| --- | --- |
| Four useful artist videos | Main README entries and Video Learning Notes. |
| Extract knowledge useful to the project | Per-source caption findings, proposed practice tasks and updated learning path. |
| Preserve two outdated resources | Historical labels, original/repost date distinction and obsolete-feature/roadmap warnings. |
| GafferHQ company and development recordings | Vimeo Collection Notes plus 30 source metadata records. |
| Accurate evidence claims | Explicit caption, metadata, visual-review and runtime-test boundaries. |
| GitHub source first | Existing private ArisLlamas/awesome-gaffer repository; pushed commit verified after publication. |

Run `node scripts/check-links.mjs --local` for structural checks or omit `--local` for a fresh external check. Later HTTP outcomes may differ from this dated record.
