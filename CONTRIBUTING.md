# Contribution Guidelines

Suggest a resource that helps an artist or technical director (TD) do a specific Gaffer task. Follow the [STE Style Guide](docs/ste-style-guide.md).

## Add a Resource

1. Open the source.
2. Check that it covers the task in your description.
3. Check the version, renderer, platform, cost, and access requirements.
4. Add the entry to `data/resources.yml`. The file uses the JSON form of YAML.
5. Choose `Artist`, `TD`, or `Both` for the level.
6. Set the status to `Read` if the source supports the description. Use `Unchecked` if the evidence is incomplete.
7. Use the source from the author or publisher.
8. Run `node scripts/build-readme.mjs` to update the README.
9. Run `node scripts/check-links.mjs --local` to check local links and duplicate URLs.
10. Run `node scripts/ste-lint.mjs` to check the wording and resource tags.

Edit `data/readme.template.md` for text outside the resource lists. Do not edit the generated README directly. For an external link check, run `node scripts/check-links.mjs`.

## Selection

Prefer official documentation, examples from authors, and practical instructions. Put artist tasks before implementation details. Add a resource for its value to a reader.

Use [Resource Review](docs/resource-review.md) for historical items and items that need more evidence. Give the reason. Record a runtime test in the [test log](docs/test-log.md) before you use `Tested`.

Do not copy assets, videos, screenshots, or studio material without permission. Each linked resource keeps its own license. Do not include credentials, license servers, internal paths, or confidential examples.

## Corrections

Explain why you propose a replacement for a broken or misleading entry. Record the Gaffer and renderer versions for tutorials. Before you add a timestamp to a video instruction, watch that segment. Label timestamps from publisher chapters or captions as references.
