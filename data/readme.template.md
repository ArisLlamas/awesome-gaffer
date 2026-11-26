# Awesome Gaffer [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[Gaffer](https://www.gafferhq.org/) is a free, open-source, node-based application for look development, lighting, and pipeline automation in visual effects (VFX) and animation.

Start here if you light scenes in Maya (or another 3D app) and want to learn Gaffer. Technical directors (TDs) can jump straight to scripting, Universal Scene Description (USD), and farm integrations below. This list is independent of GafferHQ.

## Contents

- [What Is Gaffer?](#what-is-gaffer)
- [Start Here](#start-here)
- [Installation and Renderers](#installation-and-renderers)
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

You model and animate in Maya or Blender, then publish a scene cache. In Gaffer, you assemble the scene, assign shaders, light shots, and render.

**In plain words:** A **node graph** is your recipe of steps, and a **scene hierarchy** is the 3D world those steps build. Think of a recipe card versus the meal on the table. You edit steps in the **Graph Editor**, and you inspect 3D locations (like `/world/robot`) in the **Hierarchy View**. Read [Core Concepts Explained Simply](docs/core-concepts.md) for everyday analogies of every tricky Gaffer idea.

<!-- resources: What Is Gaffer? -->

## Start Here

Follow this route for your first lighting scene. You do not need Arnold or Python to start.

1. [Install Gaffer](#installation-and-renderers). Cycles comes built in and free, so you can render right away.
2. [Build a small scene with the GafferBot tutorial](#artist-learning).
3. Open the **Hierarchy View** and **Scene Inspector**. Find the camera and check which shader hits the robot.
4. Connect Arnold, RenderMan, or 3Delight later if your studio uses one of them.
5. After you light one shot, explore [USD](#usd-in-gaffer) and [multi-shot tools](#technical-learning).

Use the [Learning Path](docs/learning-path.md) to test your skill at each step. Use [Core Concepts Explained Simply](docs/core-concepts.md) whenever a technical term slows you down.

**Gaffer version:** 1.7.7.0. Documentation links target Gaffer 1.7.7.0 where possible. Older videos and community graphs can use different controls. Before you install an external renderer or extension, read the version requirements.

## Installation and Renderers

Install Gaffer first. Practice with the built-in Cycles renderer before you spend time on third-party licenses or environment variables.

<!-- resources: Installation and Renderers -->

[Arnold Setup Checklist](docs/arnold-setup.md) separates installing Arnold, loading its nodes, selecting it as the renderer, and viewing a test image on Windows, Linux, or macOS.

## Artist Learning

Start with tasks you can see in the **Viewer** or render. Leave Python scripting for later.

**In plain words:** In Gaffer, nodes do not remember what you clicked earlier. A **Filter** (like **PathFilter**) tells a node which 3D locations to edit, like a shipping address on a box. A **Set** saves a named group of locations (such as `metal_parts`). It works like sticking colored labels on boxes across different aisles. See [Filters and Sets](docs/core-concepts.md#filters-and-sets).

<!-- resources: Artist Learning -->

[Maya to Gaffer](docs/maya-to-gaffer.md) maps familiar Maya tools to Gaffer equivalents and explains why a Maya "Attribute" is a Gaffer **Plug**.

## Lighting and Look Development

Use these nodes to set up lights, tweak shaders, manage color, preview live images, and render final frames to disk.

**In plain words:** **Outputs** is your shot list of images to render. **InteractiveRender** previews live in **Catalogue** (like a monitor on set). **Render** writes final frames to disk (like a print lab). An **EditScope** stores downstream lighting tweaks on top of a shared rig, like tracing paper over a blueprint. See [EditScopes](docs/core-concepts.md#editscopes) and [Rendering and Passes](docs/core-concepts.md#interactive-render-batch-render-outputs-and-render-passes).

<!-- resources: Lighting and Look Development -->

**Note on color:** Gaffer 1.7.7.0 uses ACES 1.3 Studio OpenColorIO (OCIO) by default (`ACEScg` working space) and bundles ACES 2.0. See [OpenColorIO and Color Management](docs/core-concepts.md#opencolorio-and-color-management) if renders look darker than legacy sRGB setups.

## Videos and Demonstrations

Pick a video for the task you want to practice. Check its upload date, OS, and studio tools before copying every step.

### Artist Training

<!-- resources: Artist Training -->

[Video Learning Notes](docs/video-notes.md) gives chapter links, caption-based notes, and practice drills. The 2024 recordings predate Gaffer 1.7.7.0, and some creators require a paid membership for scene files.

### Production and Development

<!-- resources: Production and Development -->

Pause at each node connection, predict the result, and rebuild that small piece yourself. [Vimeo Collection Notes](docs/vimeo-resources.md) separates studio talks from historical demos. Find older talks and unverified extensions in [Resource Review](docs/resource-review.md).

## Examples and Sample Assets

Open a small example graph before you tackle a full studio template.

<!-- resources: Examples and Sample Assets -->

Start with the bundled GafferBot files inside your Gaffer install. Before you download external assets, check their license, texture paths, and shader requirements. A sample USD scene does not guarantee Arnold-ready shaders.

## USD in Gaffer

Learn four basic USD terms first, then practice reading a small scene and writing a tiny override layer.

**In plain words:** Universal Scene Description (USD) stacks separate department files like transparent animation sheets over a base drawing. Each 3D item is a **prim**, each file is a **layer**, and the combined result is a **stage**. Use **USDLayerWriter** to save only your edits, and use **SceneWriter** only when you need a full standalone copy. See [USD Layers and Scene Files](docs/core-concepts.md#usd-layers-and-scene-files).

### Artist Foundations

<!-- resources: Artist Foundations -->

### Gaffer Workflow

<!-- resources: Gaffer Workflow -->

Current OpenUSD documentation can describe features newer than the USD bundled with Gaffer 1.7.7.0. Check the Gaffer release notes for exact support.

## Technical Learning

Use these guides after your first lighting scene. They cover multi-shot workflows, reusable tools, Open Shading Language (OSL), Python automation, batch dispatching, and profiling.

**In plain words:** A **Context** is a small set of named variables, such as `${shot}` or `${frame}`. It flows *upward* from the bottom of the graph to tell upstream nodes which shot to compute. Think of a vending machine code: one machine serves different drinks based on the button you press. A **Spreadsheet** node swaps plug values automatically when the context changes. See [Contexts](docs/core-concepts.md#contexts-and-context-variables) and [Spreadsheets](docs/core-concepts.md#spreadsheets).

<!-- resources: Technical Learning -->

## Tools and Integrations

Use these references for headless command-line runs, AI agent integration, render farms, machine learning nodes, and pipeline addons.

**In plain words:** A **Dispatcher** (such as **LocalDispatcher**, **FlamencoDispatcher**, **TractorDispatcher**, or **GafferDeadline**) works like a kitchen order ticket system. It reads your task nodes and checks task dependencies. Then it sends frames to local threads or render farm workers in the right order.

<!-- resources: Tools and Integrations -->

Find older or unverified community integrations in [Resource Review](docs/resource-review.md). Test every third-party extension against your exact Gaffer build before using it in production.

## References

Use the versioned reference when you need an exact plug name or scripting command.

<!-- resources: References -->

- [Core Concepts Explained Simply](docs/core-concepts.md) explains Gaffer's hardest ideas with analogies, pitfalls, and VFX examples.
- [Gaffer Glossary](docs/glossary.md) gives short, version-checked definitions for Gaffer terms and UI panels.

## Community

Use these channels to ask questions, browse solutions, or follow Gaffer development.

<!-- resources: Community -->

## Related Lists

Use this list for USD topics outside Gaffer.

<!-- resources: Related Lists -->

## Evidence Labels

**Read** means the project inspected the linked source, its publisher metadata, or its captions. **Unchecked** means evidence is still incomplete. **Tested** requires a hands-on entry in [Runtime Test Log](docs/test-log.md).

## Contributing

Read [Contribution Guidelines](CONTRIBUTING.md) before suggesting a resource. Name the artist or TD task it solves, inspect the source, and record version or cost limits.

## Footnotes

- [Curation Notes](docs/curation.md) explains how the project selects and verifies resources.
- [Foundation Notes](docs/foundation.md) records the repository's scope and design notes.
- The Awesome badge marks the list format. The upstream Awesome index does not list this repository.
- Last reviewed: November 25, 2026. Source inspection does not replace a hands-on workstation test in your studio environment.
