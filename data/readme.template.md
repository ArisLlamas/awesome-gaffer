# Awesome Gaffer [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[Gaffer](https://www.gafferhq.org/) is a node-based application for look development, lighting and automation in visual effects and animation.

Start here if you light scenes in Maya and want to learn Gaffer. Technical directors (TDs) can find scripting and pipeline resources in separate sections. The list includes resources for Universal Scene Description (USD). This list is independent of GafferHQ.

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

You can model and animate in Maya. Publish the geometry or animation from Maya. In Gaffer, build the scene, assign materials, add lights, and render.

The node graph shows the operations. The scene hierarchy shows the locations in the resulting scene. Use the **Graph Editor** for nodes and the **Hierarchy View** for locations.

<!-- resources: What Is Gaffer? -->

## Start Here

Follow this route for your first lighting scene:

1. [Install Gaffer and connect Arnold](#installation-and-arnold).
2. [Build a small scene with the GafferBot tutorial](#artist-learning).
3. Open the **Hierarchy View**. Find the camera. Select the location for the material.
4. Light one asset with one key light.
5. After you light one scene, explore [USD](#usd-in-gaffer) and [shot variations](#technical-learning).

Use the [Learning Path](docs/learning-path.md) to check your result at each stage. It gives you a resource for the next task.

**Version baseline:** Gaffer 1.7.6.0. The documentation links use this version where possible. Older videos and community graphs can use different controls. Before you install a renderer or integration, read the requirements for your version.

## Installation and Arnold

Install Gaffer first. Connect Arnold before you follow an Arnold tutorial.

<!-- resources: Installation and Arnold -->

[Arnold Setup Checklist](docs/arnold-setup.md) separates installing Arnold, loading its nodes, choosing it as the renderer, and viewing a test image.

## Artist Learning

Start with tasks you can see in the viewport or render. Read the scripting references after you learn these tasks.

<!-- resources: Artist Learning -->

[Maya to Gaffer](docs/maya-to-gaffer.md) maps common Maya tasks to Gaffer tools. The controls can differ.

## Lighting and Look Development

Use these references to set up a light, assign a shader, or check a render.

<!-- resources: Lighting and Look Development -->

## Videos and Demonstrations

Pick a video for the task you want to practice. Check its version and studio requirements.

### Artist Training

<!-- resources: Artist Training -->

[Video Learning Notes](docs/video-notes.md) contains chapter links, caption-based findings and suggested exercises. These recordings predate Gaffer 1.7.6.0. The project does not include a runtime test of their graphs. Some creators require a paid membership for scene files.

### Production and Development

<!-- resources: Production and Development -->


Pause at a node connection. Predict what it does. Build that part of the graph in Gaffer. [Vimeo Collection Notes](docs/vimeo-resources.md) separates company talks, focused demonstrations and historical development recordings. Find historical videos and resources that need review in [Resource Review](docs/resource-review.md).

## Examples and Sample Assets

Choose a small example before you open a production template.

<!-- resources: Examples and Sample Assets -->

Begin with bundled GafferBot resources. Before you download an asset, check its license, size, texture paths, and material requirements. A sample USD scene does not guarantee ready-to-render Arnold materials. This repository links assets instead of redistributing them.

## USD in Gaffer

Learn the USD terms first. Then read or write a small scene.

### Artist Foundations

<!-- resources: Artist Foundations -->

### Gaffer Workflow

<!-- resources: Gaffer Workflow -->

Current OpenUSD references can describe features newer than the USD bundled with Gaffer 1.7.6.0. Check the node reference and release notes for support.

## Technical Learning

Use these resources after your first lighting exercise. They cover shot variations, automation, and performance.

<!-- resources: Technical Learning -->

## Tools and Integrations

Use the source repository when you need code or tests.

<!-- resources: Tools and Integrations -->

Find render farm and production integrations in [Resource Review](docs/resource-review.md). Check their compatibility before you use them. You can learn to light without them.

## References

Use the reference for your version when you need an exact control.

<!-- resources: References -->

## Community

Use these channels to ask questions or find shared examples.

<!-- resources: Community -->

## Related Lists

Use this list for USD topics outside Gaffer.

<!-- resources: Related Lists -->

## Evidence Labels

**Read** means that the project reviewed the linked source, its publisher details, or its captions. **Unchecked** means that the evidence does not yet support a full review. Neither label confirms a runtime test.

## Contributing

See [Contribution Guidelines](CONTRIBUTING.md) before suggesting a resource. Explain the artist task it helps with, inspect the source, and record any version or access limits.

## Footnotes

- [Curation Notes](docs/curation.md) records how resources are selected and what has been checked.
- [Foundation Notes](docs/foundation.md) records the repository's scope and the requested structure.
- The Awesome badge identifies the list format. The upstream Awesome index does not include this list.
- Last reviewed: September 29, 2026. Source inspection does not establish hands-on compatibility with a studio installation.
