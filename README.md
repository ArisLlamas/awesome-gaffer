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

- [Gaffer Overview](https://www.gafferhq.org/) - Explains the application and shows examples of its use in look development, lighting and production workflows.
- [Gaffer User Guide Introduction](https://www.gafferhq.org/documentation/1.7.3.0/) - Defines the scope of the official guide; useful for understanding which work belongs in Gaffer.

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

- [Gaffer 1.7.3.0 Release](https://github.com/GafferHQ/gaffer/releases/tag/1.7.3.0) - Version-specific download packages and release notes for this list's baseline.
- [Installing Gaffer](https://www.gafferhq.org/documentation/1.7.3.0/GettingStarted/InstallingGaffer/index.html) - Official Windows and Linux installation instructions, including the Windows runtime prerequisite.
- [Launching Gaffer for the First Time](https://www.gafferhq.org/documentation/1.7.3.0/GettingStarted/LaunchingGafferFirstTime/index.html) - Shows how to launch the extracted application and diagnose a missing Windows runtime.
- [Configuring Gaffer for Third-Party Tools](https://www.gafferhq.org/documentation/1.7.3.0/GettingStarted/ConfiguringGafferForThirdPartyTools/index.html) - Explains how ARNOLD_ROOT connects the Arnold installation to Gaffer.
- [Arnold Licensing](https://help.autodesk.com/cloudhelp/ENU/AR-Core/files/arnold-setup/arnold_user_guide_arnold_setup_ac_licensing_home_html.html) - Autodesk's licensing guidance for separating renderer availability from licensed rendering.

[Arnold Setup Checklist](docs/arnold-setup.md) separates installing Arnold, loading its nodes, choosing it as the renderer, and viewing a test image. Studio-specific launcher steps are still awaiting the studio's instructions.

## Artist Learning

Start with tasks you can see in the viewport or render. Save the API references for later.

- [Assembling the GafferBot](https://www.gafferhq.org/documentation/1.7.3.0/GettingStarted/TutorialAssemblingTheGafferBot/index.html) - Builds a small scene using bundled assets, shaders, a camera and lights; uses Cycles, so Arnold nodes must be substituted deliberately.
- [Controls and Shortcuts](https://www.gafferhq.org/documentation/1.7.3.0/Interface/ControlsAndShortcuts/index.html) - Reference for navigation, selection, viewing and editor focus while following a tutorial.
- [Anatomy of a Scene](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithScenes/AnatomyOfAScene/index.html) - Explains what a scene contains, helping separate node operations from resulting objects and global settings.
- [Camera Workflow](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithScenes/Camera/index.html) - Guidance for working with a render camera rather than relying on a free viewport view.
- [ShaderAssignment](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferScene/ShaderAssignment.html) - Use when you need to apply a material to selected scene locations.
- [PathFilter](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferScene/PathFilter.html) - Use when an edit should affect specific paths rather than every object.
- [Group](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferScene/Group.html) - Use when combining separate scene branches, such as an asset, camera and lights.

[Maya to Gaffer](docs/maya-to-gaffer.md) translates familiar artist questions into the relevant Gaffer tools. These are conceptual bridges, not exact replacements for Maya panels.

## Lighting and Look Development

- [ArnoldLight](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferArnold/ArnoldLight.html) - Loads an Arnold light type and provides its parameters and transform.
- [ArnoldShader](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferArnold/ArnoldShader.html) - Loads Arnold shader networks for material assignments and look development.
- [StandardOptions](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferScene/StandardOptions.html) - Use for scene-level camera, resolution and default-renderer choices.
- [ArnoldOptions](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferArnold/ArnoldOptions.html) - Use for Arnold-specific settings after selecting Arnold as the renderer.
- [InteractiveRender](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferScene/InteractiveRender.html) - Runs a live render session so you can judge changes while lighting.
- [Outputs](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferScene/Outputs.html) - Defines output images, including an interactive beauty image for the render catalogue.
- [Catalogue](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferScene/Catalogue.html) - Displays and manages rendered images for viewing and comparison.
- [Light Linking](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithScenes/LightLinking/index.html) - Guidance for controlling which lights illuminate which objects; learn after a basic scene works.
- [Arnold Light Controls](https://help.autodesk.com/view/ARNOL/ENU/?guid=arnold_user_guide_ac_lights_html) - Explains exposure, normalization and light-type behavior that also matters when using Arnold through Gaffer.

## Videos and Demonstrations

- [GafferHQ on Vimeo](https://vimeo.com/gafferhq) - First-party presentations and demonstrations; check the date before copying a workflow.
- [Multi-Shot Workflows for Episodic Animation and VFX](https://blog.gafferhq.org/demo-multi-shot-workflows-for-episodic-animation-vfx/) - GafferHQ's 2024 introduction to Rupert Thorpe's production workflow, with an embedded YouTube demonstration.
- [Multi-Shot Workflow on YouTube](https://www.youtube.com/watch?v=jtjDbAHbPuE) - Direct video link for the same demonstration; useful after you can light a single scene.

Pause at a node connection, predict its job, and rebuild a small piece in Gaffer. Historical videos and resources needing further review are tracked separately in [Resource Review](docs/resource-review.md).

## Examples and Sample Assets

- [Gaffer Examples](https://github.com/ezequielmastrasso/gaffer-examples) - Community shot and asset templates linked by GafferHQ; study a small graph before adapting a production template.
- [Gaffer Resources](https://www.gafferhq.org/resources/) - Official directory of examples, extensions and community channels.
- [OpenUSD Sample Assets](https://openusd.org/release/dl_downloads.html#assets) - Pixar sample scenes and links to additional datasets for practising USD handoffs.
- [USD Working Group Assets](https://github.com/usd-wg/assets) - Example assets and guidelines from the USD Working Group; useful for focused interchange experiments.

Begin with bundled GafferBot resources. Check an external asset's license, size, texture paths and material requirements before downloading it. A sample USD scene does not guarantee ready-to-render Arnold materials. This repository links assets instead of redistributing them.

## USD in Gaffer

### Artist Foundations

- [Book of USD](https://remedy-entertainment.github.io/USDBook/) - Artist-oriented explanations of USD terminology and workflows from Remedy Entertainment.
- [OpenUSD Introduction](https://openusd.org/release/intro.html) - Primary explanation of scene interchange, composition and departmental contributions.
- [OpenUSD Terms and Concepts](https://openusd.org/release/glossary.html) - Look up prims, layers, stages, references, variants and payloads when they appear in a workflow.

### Gaffer Workflow

- [SceneReader](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferScene/SceneReader.html) - Reads a supported scene file into a Gaffer scene for inspection and processing.
- [USDLayerWriter](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferUSD/USDLayerWriter.html) - Compares base and edited scenes to export representable differences as a USD layer.
- [SceneWriter](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferScene/SceneWriter.html) - Writes a complete scene when an edit-only layer is not what you need.
- [GafferUSD Node Reference](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/GafferUSD/index.html) - Catalogue of the baseline release's USD-specific nodes.

Current OpenUSD references can describe features newer than the USD bundled with Gaffer 1.7.3.0. Check Gaffer's actual node and release support before assuming a feature is available.

## Technical Learning

Optional for your first lighting exercise. Use these when a working scene needs repeated shot variations, automation or performance work.

- [Spreadsheet Tutorial](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithTheNodeGraph/TutorialSettingUpASpreadsheet/index.html) - Guided setup of a readable table of values for scene variations.
- [Spreadsheet Concepts](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithTheNodeGraph/SpreadsheetNode/index.html) - Explains rows and selection after the first example works.
- [Contexts](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithTheNodeGraph/Contexts/index.html) - Explains the changing inputs, such as frame or shot variables, that affect graph evaluation.
- [ContextQuery](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/Gaffer/ContextQuery.html) - Reads context values through a node when you want a visible graph dependency.
- [Expressions](https://www.gafferhq.org/documentation/1.7.3.0/Reference/ScriptingReference/Expressions/index.html) - Reference for relationships that need an expression rather than a simple fixed value.
- [Performance Best Practices](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithTheNodeGraph/PerformanceBestPractices/index.html) - Guidance for efficient graphs after the basic workflow is familiar.

## Tools and Integrations

- [Gaffer Source](https://github.com/GafferHQ/gaffer) - Application source, releases, tests and development discussions.

Community render-farm and production-tracking integrations are listed in [Resource Review](docs/resource-review.md) until their current compatibility has been checked. They are not prerequisites for learning to light.

## References

- [Gaffer 1.7.3.0 Node Reference](https://www.gafferhq.org/documentation/1.7.3.0/Reference/NodeReference/index.html) - Detailed node controls to consult after identifying the operation you need.
- [Gaffer 1.7.3.0 Release Notes](https://www.gafferhq.org/documentation/1.7.3.0/ReleaseNotes/index.html) - Version changes to check when a tutorial or scene behaves differently.
- [Gaffer Controls and Editor Reference](https://www.gafferhq.org/documentation/1.7.3.0/Interface/index.html) - Official interface reference for navigating and arranging the workspace.

## Community

- [GafferHQ Discussions](https://github.com/GafferHQ/gaffer/discussions) - Release discussions, questions and shared workflows.
- [Gaffer Development Mailing List](https://groups.google.com/g/gaffer-dev) - Searchable development and usage discussions with examples from the community.

## Related Lists

- [Awesome OpenUSD](https://github.com/matiascodesal/awesome-openusd) - Broader USD tools, samples and learning resources beyond Gaffer.

## Contributing

See [Contribution Guidelines](CONTRIBUTING.md) before suggesting a resource. Explain the artist task it helps with, inspect the source, and record any version or access limits.

## Footnotes

- [Curation Notes](docs/curation.md) records how resources are selected and what has been checked.
- [Foundation Notes](docs/foundation.md) records the repository's scope and the requested structure.
- The Awesome badge identifies the list format. It does not mean this repository has been accepted into the upstream Awesome index.
- Last reviewed: September 29, 2026. Source inspection does not establish hands-on compatibility with a studio installation.

