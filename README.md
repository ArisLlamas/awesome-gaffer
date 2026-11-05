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

- [Gaffer Overview](https://www.gafferhq.org/) - [Both] [Read] See how artists use Gaffer for look development, lighting, and production.
- [Gaffer User Guide Introduction](https://www.gafferhq.org/documentation/1.7.6.0/) - [Both] [Read] Find the tasks that the official guide covers.

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

- [Gaffer 1.7.6.0 Release](https://github.com/GafferHQ/gaffer/releases/tag/1.7.6.0) - [Both] [Read] Download Gaffer for your operating system. Read the release notes.
- [Installing Gaffer](https://www.gafferhq.org/documentation/1.7.6.0/GettingStarted/InstallingGaffer/index.html) - [Both] [Read] Install Gaffer on Windows or Linux. On Windows, check the runtime requirement.
- [Launching Gaffer for the First Time](https://www.gafferhq.org/documentation/1.7.6.0/GettingStarted/LaunchingGafferFirstTime/index.html) - [Both] [Read] Launch Gaffer from its installation directory. On Windows, check for a missing runtime if the launch fails.
- [Configuring Gaffer for Third-Party Tools](https://www.gafferhq.org/documentation/1.7.6.0/GettingStarted/ConfiguringGafferForThirdPartyTools/index.html) - [Both] [Read] Set ARNOLD_ROOT so Gaffer can load Arnold.
- [Arnold Licensing](https://help.autodesk.com/cloudhelp/ENU/AR-Core/files/arnold-setup/arnold_user_guide_arnold_setup_ac_licensing_home_html.html) - [Both] [Read] Check the Autodesk license requirements before you render with Arnold.

[Arnold Setup Checklist](docs/arnold-setup.md) separates installing Arnold, loading its nodes, choosing it as the renderer, and viewing a test image.

## Artist Learning

Start with tasks you can see in the viewport or render. Read the scripting references after you learn these tasks.

- [Assembling the GafferBot](https://www.gafferhq.org/documentation/1.7.6.0/GettingStarted/TutorialAssemblingTheGafferBot/index.html) - [Artist] [Read] Build a scene with the included robot, materials, camera, and lights. The tutorial uses Cycles.
- [Controls and Shortcuts](https://www.gafferhq.org/documentation/1.7.6.0/Interface/ControlsAndShortcuts/index.html) - [Artist] [Read] Find the controls for navigation, selection, and editor focus.
- [Anatomy of a Scene](https://www.gafferhq.org/documentation/1.7.6.0/WorkingWithScenes/AnatomyOfAScene/index.html) - [Both] [Read] Identify the hierarchy and globals in a Gaffer scene.
- [Camera Workflow](https://www.gafferhq.org/documentation/1.7.6.0/WorkingWithScenes/Camera/index.html) - [Artist] [Read] Set a render camera. Check its view before you render.
- [ShaderAssignment](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferScene/ShaderAssignment.html) - [Artist] [Read] Apply a shader to objects at the scene locations you select.
- [PathFilter](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferScene/PathFilter.html) - [Artist] [Read] Select scene locations that match a list of paths.
- [Group](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferScene/Group.html) - [Artist] [Read] Combine input scenes under a new parent.

[Maya to Gaffer](docs/maya-to-gaffer.md) maps common Maya tasks to Gaffer tools. The controls can differ.

## Lighting and Look Development

Use these references to set up a light, assign a shader, or check a render.

- [ArnoldLight](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferArnold/ArnoldLight.html) - [Artist] [Read] Load an Arnold light shader. Set the light parameters and transform.
- [ArnoldShader](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferArnold/ArnoldShader.html) - [Artist] [Read] Load a shader for Arnold. Connect it to **ShaderAssignment** to apply it.
- [StandardOptions](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferScene/StandardOptions.html) - [Artist] [Read] Set the render camera, resolution, and default renderer.
- [ArnoldOptions](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferArnold/ArnoldOptions.html) - [Artist] [Read] Set options that apply to Arnold.
- [InteractiveRender](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferScene/InteractiveRender.html) - [Artist] [Read] Render a live image to check changes to the scene.
- [Outputs](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferScene/Outputs.html) - [Artist] [Read] Define the images that the renderer must produce. Include a beauty output for a live render.
- [Catalogue](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferScene/Catalogue.html) - [Artist] [Read] Store and view rendered images for comparison.
- [Light Linking](https://www.gafferhq.org/documentation/1.7.6.0/WorkingWithScenes/LightLinking/index.html) - [Artist] [Read] Control which lights illuminate each object.
- [Arnold Light Controls](https://help.autodesk.com/view/ARNOL/ENU/?guid=arnold_user_guide_ac_lights_html) - [Artist] [Unchecked] Look up Arnold light exposure, normalization, and light types.

## Videos and Demonstrations

Pick a video for the task you want to practice. Check its version and studio requirements.

### Artist Training

- [Gaffer Training - The Basics](https://www.youtube.com/watch?v=qJWtai73TB8) - [Artist] [Read] Learn scene assembly, assignments, filters, and viewer controls from Trixter Film. The 2024 session includes studio tools.
- [Gaffer Training - Intermediate](https://www.youtube.com/watch?v=aKUMRKPbdZI) - [TD] [Read] Learn contexts, spreadsheets, boxes, and expressions from Trixter Film. Light one scene before you start this 2024 session.
- [Introduction to Gaffer and Arnold](https://www.youtube.com/watch?v=lAgBcOFMf5k) - [Artist] [Read] Follow Arvid Schneider’s 2024 introduction to setup, scene inspection, Arnold renders, and light edits.
- [Shading and Lighting with Gaffer and Arnold](https://www.youtube.com/watch?v=RiPmGDhxjGw) - [Artist] [Read] Use procedural masks and place lights on a dragon in Arvid Schneider’s 2024 tutorial. QuickConnect is an extension.

[Video Learning Notes](docs/video-notes.md) contains chapter links, caption-based findings and suggested exercises. These recordings predate Gaffer 1.7.6.0. The project does not include a runtime test of their graphs. Some creators require a paid membership for scene files.

### Production and Development

- [Gaffer User Group - October 2025](https://vimeo.com/1131945768) - [Both] [Read] Find updates for Gaffer 1.5 and 1.6, GafferRenderMan, and the Warfare production session in the publisher description.
- [Gaffer User Group - December 2024](https://vimeo.com/1036919633) - [Both] [Read] Find updates for Gaffer 1.4 and 1.5 in the publisher description. It also lists GafferRenderMan and GafferML previews.
- [Gaffer User Group - March 2024](https://vimeo.com/923093356) - [Both] [Read] Find production work, Gaffer 1.3 updates, and a Gaffer 1.4 preview in the publisher description.
- [GafferHQ on Vimeo](https://vimeo.com/gafferhq) - [Both] [Read] Find presentations and demonstrations from GafferHQ. Check the date before you copy a workflow.
- [Multi-Shot Workflows for Episodic Animation and VFX](https://blog.gafferhq.org/demo-multi-shot-workflows-for-episodic-animation-vfx/) - [TD] [Read] Read GafferHQ’s 2024 introduction to Rupert Thorpe’s workflow. Open the demonstration in the article.
- [Multi-Shot Workflow on YouTube](https://www.youtube.com/watch?v=jtjDbAHbPuE) - [TD] [Unchecked] Open the video for the workflow in the GafferHQ article. Light a single scene before you watch it.


Pause at a node connection. Predict what it does. Build that part of the graph in Gaffer. [Vimeo Collection Notes](docs/vimeo-resources.md) separates company talks, focused demonstrations and historical development recordings. Find historical videos and resources that need review in [Resource Review](docs/resource-review.md).

## Examples and Sample Assets

Choose a small example before you open a production template.

- [Gaffer Examples](https://github.com/ezequielmastrasso/gaffer-examples) - [Both] [Read] Study a small graph from the community templates before you adapt a production template.
- [Gaffer Resources](https://www.gafferhq.org/resources/) - [Both] [Read] Find examples, extensions, and community channels in the GafferHQ directory.
- [OpenUSD Sample Assets](https://openusd.org/release/dl_downloads.html#assets) - [Both] [Read] Choose a Pixar sample scene or another dataset to practice a USD handoff.
- [USD Working Group Assets](https://github.com/usd-wg/assets) - [Both] [Read] Find sample assets and guidelines for a USD exchange exercise.

Begin with bundled GafferBot resources. Before you download an asset, check its license, size, texture paths, and material requirements. A sample USD scene does not guarantee ready-to-render Arnold materials. This repository links assets instead of redistributing them.

## USD in Gaffer

Learn the USD terms first. Then read or write a small scene.

### Artist Foundations

- [Book of USD](https://remedy-entertainment.github.io/USDBook/) - [Artist] [Read] Learn USD terms and workflows from the Remedy Entertainment guide for artists.
- [OpenUSD Introduction](https://openusd.org/release/intro.html) - [Both] [Read] Learn how USD supports scene exchange, composition, and contributions from different departments.
- [OpenUSD Terms and Concepts](https://openusd.org/release/glossary.html) - [Both] [Read] Look up prims, layers, stages, references, variants, and payloads.

### Gaffer Workflow

- [SceneReader](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferScene/SceneReader.html) - [Both] [Read] Load a supported scene file for inspection or further edits.
- [USDLayerWriter](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferUSD/USDLayerWriter.html) - [Both] [Read] Compare two scenes and write the differences that USD can represent as a layer.
- [SceneWriter](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferScene/SceneWriter.html) - [Both] [Read] Write a scene to a cache file when you need a full scene instead of an edit layer.
- [GafferUSD Node Reference](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/GafferUSD/index.html) - [TD] [Read] Find the USD nodes in this Gaffer version.

Current OpenUSD references can describe features newer than the USD bundled with Gaffer 1.7.6.0. Check the node reference and release notes for support.

## Technical Learning

Use these resources after your first lighting exercise. They cover shot variations, automation, and performance.

- [Spreadsheet Tutorial](https://www.gafferhq.org/documentation/1.7.6.0/WorkingWithTheNodeGraph/TutorialSettingUpASpreadsheet/index.html) - [TD] [Read] Set up a table of values for different shots.
- [Spreadsheet Concepts](https://www.gafferhq.org/documentation/1.7.6.0/WorkingWithTheNodeGraph/SpreadsheetNode/index.html) - [TD] [Read] Find out how the **Spreadsheet** selects a row.
- [Contexts](https://www.gafferhq.org/documentation/1.7.6.0/WorkingWithTheNodeGraph/Contexts/index.html) - [TD] [Read] Learn how values such as the frame or shot affect the result of a node operation.
- [ContextQuery](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/Gaffer/ContextQuery.html) - [TD] [Read] Read variables from the current context with a node.
- [Expressions](https://www.gafferhq.org/documentation/1.7.6.0/Reference/ScriptingReference/Expressions/index.html) - [TD] [Read] Find expression syntax for plug values and context variables.
- [Performance Best Practices](https://www.gafferhq.org/documentation/1.7.6.0/WorkingWithTheNodeGraph/PerformanceBestPractices/index.html) - [TD] [Read] Identify choices that can slow a node graph.

## Tools and Integrations

Use the source repository when you need code or tests.

- [Gaffer Source](https://github.com/GafferHQ/gaffer) - [TD] [Read] Find the source code, releases, tests, and development discussions.

Find render farm and production integrations in [Resource Review](docs/resource-review.md). Check their compatibility before you use them. You can learn to light without them.

## References

Use the reference for your version when you need an exact control.

- [Gaffer 1.7.6.0 Node Reference](https://www.gafferhq.org/documentation/1.7.6.0/Reference/NodeReference/index.html) - [Both] [Read] Find the controls for a node after you identify the operation you need.
- [Gaffer 1.7.6.0 Release Notes](https://www.gafferhq.org/documentation/1.7.6.0/ReleaseNotes/index.html) - [Both] [Read] Check version changes when a tutorial or scene gives a different result.
- [Gaffer Controls and Editor Reference](https://www.gafferhq.org/documentation/1.7.6.0/Interface/index.html) - [Both] [Read] Find the official reference for the workspace and controls.

- [Gaffer Glossary](docs/glossary.md) explains terms and names the relevant controls.

## Community

Use these channels to ask questions or find shared examples.

- [GafferHQ Discussions](https://github.com/GafferHQ/gaffer/discussions) - [Both] [Read] Ask a question or find release discussions and shared workflows.
- [Gaffer Development Mailing List](https://groups.google.com/g/gaffer-dev) - [Both] [Read] Search the mailing list for development discussions and examples.

## Related Lists

Use this list for USD topics outside Gaffer.

- [Awesome OpenUSD](https://github.com/matiascodesal/awesome-openusd) - [Both] [Read] Find USD tools, sample assets, and learning resources beyond Gaffer.

## Evidence Labels

**Read** means that the project reviewed the linked source, its publisher details, or its captions. **Unchecked** means that the evidence does not yet support a full review. Neither label confirms a runtime test.

## Contributing

See [Contribution Guidelines](CONTRIBUTING.md) before suggesting a resource. Explain the artist task it helps with, inspect the source, and record any version or access limits.

## Footnotes

- [Curation Notes](docs/curation.md) records how resources are selected and what has been checked.
- [Foundation Notes](docs/foundation.md) records the repository's scope and the requested structure.
- The Awesome badge identifies the list format. The upstream Awesome index does not include this list.
- Last reviewed: November 5, 2026. Source inspection does not establish hands-on compatibility with a studio installation.
