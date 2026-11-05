# Awesome Gaffer [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[Gaffer](https://www.gafferhq.org/) is a node-based application for look development, lighting and automation in visual effects and animation.

A curated starting point for artists learning Gaffer, especially lighting artists coming from Maya. Artist learning comes first; scripting and pipeline resources have their own sections. This is an independent list, not an official GafferHQ course.

## Contents

- [What Is Gaffer?](#what-is-gaffer)
- [Start Here](#start-here)
- [Installation and Arnold](#installation-and-arnold)
- [Artist Learning](#artist-learning)
- [Lighting and Look Development](#lighting-and-look-development)
- [Videos and Demonstrations](#videos-and-demonstrations)
- [Examples and Sample Assets](#examples-and-sample-assets)
- [USD in Gaffer](#usd-in-gaffer)
- [Technical Learning](#technical-learning)
- [Tools and Integrations](#tools-and-integrations)
- [References](#references)
- [Community](#community)
- [Related Lists](#related-lists)

## What Is Gaffer?

You can keep modelling and animating in Maya, publish geometry or animation, then use Gaffer to assemble a scene, assign materials, light it and render. A node graph records the operations; the scene hierarchy shows the objects those operations produce.

<!-- resources: What Is Gaffer? -->

## Start Here

For a Maya lighting artist, take this route before browsing the entire list:

1. [Install Gaffer and connect Arnold](#installation-and-arnold).
2. [Build a small scene with the GafferBot tutorial](#artist-learning).
3. Learn to inspect the hierarchy, select a camera and target a material assignment.
4. Light one asset with one key light before trying a multi-shot template.
5. Explore [USD](#usd-in-gaffer) and [shot variations](#technical-learning) when the single-scene workflow makes sense.

[Learning Path](docs/learning-path.md) gives each stage a practical finish line and explains which resource to open next. It is our suggested route, not a curriculum supplied by the Awesome project.

**Version baseline:** Gaffer 1.7.3.0. Documentation links are pinned where possible. Older videos and community graphs may use different controls. Check the requirements for your exact release before installing a renderer or integration.

## Installation and Arnold

<!-- resources: Installation and Arnold -->

[Arnold Setup Checklist](docs/arnold-setup.md) separates installing Arnold, loading its nodes, choosing it as the renderer, and viewing a test image. Studio-specific launcher steps are still awaiting the studio's instructions.

## Artist Learning

Start with tasks you can see in the viewport or render. Save the API references for later.

<!-- resources: Artist Learning -->

[Maya to Gaffer](docs/maya-to-gaffer.md) translates familiar artist questions into the relevant Gaffer tools. These are conceptual bridges, not exact replacements for Maya panels.

## Lighting and Look Development

<!-- resources: Lighting and Look Development -->

## Videos and Demonstrations

### Artist Training

<!-- resources: Artist Training -->

[Video Learning Notes](docs/video-notes.md) contains chapter links, caption-based findings and suggested exercises. These recordings predate the 1.7.3.0 baseline; their graphs have not been reproduced here. Creator-provided scene files may require paid membership.

### Production and Development

<!-- resources: Production and Development -->


Pause at a node connection, predict its job, and rebuild a small piece in Gaffer. [Vimeo Collection Notes](docs/vimeo-resources.md) separates company talks, focused demonstrations and historical development recordings. Historical videos and resources needing further review are tracked separately in [Resource Review](docs/resource-review.md).

## Examples and Sample Assets

<!-- resources: Examples and Sample Assets -->

Begin with bundled GafferBot resources. Check an external asset's license, size, texture paths and material requirements before downloading it. A sample USD scene does not guarantee ready-to-render Arnold materials. This repository links assets instead of redistributing them.

## USD in Gaffer

### Artist Foundations

<!-- resources: Artist Foundations -->

### Gaffer Workflow

<!-- resources: Gaffer Workflow -->

Current OpenUSD references can describe features newer than the USD bundled with Gaffer 1.7.3.0. Check Gaffer's actual node and release support before assuming a feature is available.

## Technical Learning

Optional for your first lighting exercise. Use these when a working scene needs repeated shot variations, automation or performance work.

<!-- resources: Technical Learning -->

## Tools and Integrations

<!-- resources: Tools and Integrations -->

Community render-farm and production-tracking integrations are listed in [Resource Review](docs/resource-review.md) until their current compatibility has been checked. They are not prerequisites for learning to light.

## References

<!-- resources: References -->

## Community

<!-- resources: Community -->

## Related Lists

<!-- resources: Related Lists -->

## Contributing

See [Contribution Guidelines](CONTRIBUTING.md) before suggesting a resource. Explain the artist task it helps with, inspect the source, and record any version or access limits.

## Footnotes

- [Curation Notes](docs/curation.md) records how resources are selected and what has been checked.
- [Foundation Notes](docs/foundation.md) records the repository's scope and the requested structure.
- The Awesome badge identifies the list format. It does not mean this repository has been accepted into the upstream Awesome index.
- Last reviewed: September 29, 2026. Source inspection does not establish hands-on compatibility with a studio installation.
