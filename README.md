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

- [Gaffer Overview](https://www.gafferhq.org/) - [Both] [Read] See how artists use Gaffer for look development, lighting, and production.
- [Gaffer User Guide Introduction](https://www.gafferhq.org/documentation/1.7.7.0/) - [Both] [Read] Find the tasks that the official guide covers.

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

- [Installing Gaffer](https://www.gafferhq.org/documentation/1.7.7.0/GettingStarted/InstallingGaffer/index.html) - [Both] [Read] Install Gaffer on Windows, Linux, or macOS. Cycles works out of the box with no extra setup.
- [Gaffer 1.7.7.0 Release](https://github.com/GafferHQ/gaffer/releases/tag/1.7.7.0) - [Both] [Read] Download Gaffer packages for Windows, Linux, or macOS. Read the release notes.
- [Launching Gaffer for the First Time](https://www.gafferhq.org/documentation/1.7.7.0/GettingStarted/LaunchingGafferFirstTime/index.html) - [Both] [Read] Launch Gaffer from its installation directory. On Windows, install the Visual C++ runtime if launch fails.
- [Setting Up the gaffer Command](https://www.gafferhq.org/documentation/1.7.7.0/GettingStarted/SettingUpGafferCommand/index.html) - [TD] [Read] Add the gaffer command to your shell path for terminal launches and batch scripts.
- [Configuring Gaffer for Third-Party Tools](https://www.gafferhq.org/documentation/1.7.7.0/GettingStarted/ConfiguringGafferForThirdPartyTools/index.html) - [Both] [Read] Set environment variables such as ARNOLD_ROOT, RMANTREE, or DELIGHT to load external renderers and Tractor.
- [Arnold Licensing](https://help.autodesk.com/cloudhelp/ENU/AR-Core/files/arnold-setup/arnold_user_guide_arnold_setup_ac_licensing_home_html.html) - [Both] [Read] Check the Autodesk license requirements before you render with Arnold.

[Arnold Setup Checklist](docs/arnold-setup.md) separates installing Arnold, loading its nodes, selecting it as the renderer, and viewing a test image on Windows, Linux, or macOS.

## Artist Learning

Start with tasks you can see in the **Viewer** or render. Leave Python scripting for later.

**In plain words:** In Gaffer, nodes do not remember what you clicked earlier. A **Filter** (like **PathFilter**) tells a node which 3D locations to edit, like a shipping address on a box. A **Set** saves a named group of locations (such as `metal_parts`). It works like sticking colored labels on boxes across different aisles. See [Filters and Sets](docs/core-concepts.md#filters-and-sets).

- [Assembling the GafferBot](https://www.gafferhq.org/documentation/1.7.7.0/GettingStarted/TutorialAssemblingTheGafferBot/index.html) - [Artist] [Read] Build your first scene with the bundled robot, materials, camera, and lights using free Cycles.
- [Controls and Shortcuts](https://www.gafferhq.org/documentation/1.7.7.0/Interface/ControlsAndShortcuts/index.html) - [Artist] [Read] Find keyboard shortcuts for viewport navigation, selection, and editor focus.
- [Anatomy of a Scene](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithScenes/AnatomyOfAScene/index.html) - [Both] [Read] Learn how scene locations, attributes, objects, and globals fit together.
- [Camera Workflow](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithScenes/Camera/index.html) - [Artist] [Read] Set a render camera and check its framing before you render.
- [Anatomy of a Camera](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithScenes/AnatomyOfACamera/index.html) - [Both] [Read] Understand camera projection, aperture, film fit, and clipping planes in Gaffer.
- [Group](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/Group.html) - [Artist] [Read] Combine input scenes under a new parent location in the hierarchy.
- [MergeScenes](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/MergeScenes.html) - [Artist] [Read] Combine input scenes at their existing paths without wrapping them under a new parent.
- [PathFilter](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/PathFilter.html) - [Artist] [Read] Select scene locations that match exact paths or wildcard patterns.
- [Set](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/Set.html) - [Artist] [Read] Group scene locations under one reusable set name.
- [SetFilter](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/SetFilter.html) - [Artist] [Read] Select scene locations from one or more named sets.
- [ShaderAssignment](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/ShaderAssignment.html) - [Artist] [Read] Apply a shader to objects at the scene locations your filter selects.
- [StandardAttributes](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/StandardAttributes.html) - [Artist] [Read] Control renderer-agnostic object settings such as visibility, shadow groups, and motion blur.

[Maya to Gaffer](docs/maya-to-gaffer.md) maps familiar Maya tools to Gaffer equivalents and explains why a Maya "Attribute" is a Gaffer **Plug**.

## Lighting and Look Development

Use these nodes to set up lights, tweak shaders, manage color, preview live images, and render final frames to disk.

**In plain words:** **Outputs** is your shot list of images to render. **InteractiveRender** previews live in **Catalogue** (like a monitor on set). **Render** writes final frames to disk (like a print lab). An **EditScope** stores downstream lighting tweaks on top of a shared rig, like tracing paper over a blueprint. See [EditScopes](docs/core-concepts.md#editscopes) and [Rendering and Passes](docs/core-concepts.md#interactive-render-batch-render-outputs-and-render-passes).

- [StandardOptions](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/StandardOptions.html) - [Artist] [Read] Set the render camera, image resolution, motion blur, and default renderer.
- [Outputs](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/Outputs.html) - [Artist] [Read] Define beauty and AOV images that the renderer creates for preview or disk output.
- [InteractiveRender](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/InteractiveRender.html) - [Artist] [Read] Start a live interactive render to preview lighting and shader changes.
- [Render](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/Render.html) - [Both] [Read] Render final frames to disk through a local or farm dispatcher.
- [Catalogue](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/Catalogue.html) - [Artist] [Read] Collect live renders and compare snapshots side by side in the **Viewer**.
- [EditScope](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/Gaffer/EditScope.html) - [Artist] [Read] Keep downstream edits from the **Viewer** and **Light Editor** separate from upstream rigs.
- [ShaderTweaks](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/ShaderTweaks.html) - [Artist] [Read] Adjust light or surface shader values downstream without rebuilding the shader network.
- [Light Linking](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithScenes/LightLinking/index.html) - [Artist] [Read] Control which lights illuminate or skip specific objects using sets.
- [RenderPasses](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/RenderPasses.html) - [Both] [Read] Declare named render passes that you manage in the **Render Pass Editor**.
- [RenderPassWedge](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/RenderPassWedge.html) - [Both] [Read] Dispatch upstream render nodes once for every pass name in the scene.
- [OpenColorIOContext](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferImage/OpenColorIOContext.html) - [Both] [Read] Override the OpenColorIO (OCIO) config, working space, or variables per context.
- [ArnoldLight](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferArnold/ArnoldLight.html) - [Artist] [Read] Create an Arnold light, pick its light shader, and set its transform.
- [ArnoldShader](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferArnold/ArnoldShader.html) - [Artist] [Read] Load an Arnold shader and connect it to **ShaderAssignment**.
- [ArnoldOptions](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferArnold/ArnoldOptions.html) - [Artist] [Read] Set sampling, ray depth, and render options for Arnold.
- [Arnold Light Controls](https://help.autodesk.com/cloudhelp/ENU/AR-Core/files/arnold_user_guide_ac_lights_html.html) - [Artist] [Read] Look up Arnold light types, exposure stops, spread, and light filters.
- [GafferCycles Node Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferCycles/index.html) - [Artist] [Read] Find lights, shaders, backgrounds, and options for the built-in Cycles renderer.
- [GafferRenderMan Node Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferRenderMan/index.html) - [Both] [Read] Find RenderMan lights, shaders, light filters, and integrator nodes.
- [GafferDelight Node Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferDelight/index.html) - [Both] [Read] Find 3Delight attributes and render option nodes for Gaffer.

**Note on color:** Gaffer 1.7.7.0 uses ACES 1.3 Studio OpenColorIO (OCIO) by default (`ACEScg` working space) and bundles ACES 2.0. See [OpenColorIO and Color Management](docs/core-concepts.md#opencolorio-and-color-management) if renders look darker than legacy sRGB setups.

## Videos and Demonstrations

Pick a video for the task you want to practice. Check its upload date, OS, and studio tools before copying every step.

### Artist Training

- [Gaffer Training - The Basics](https://www.youtube.com/watch?v=qJWtai73TB8) - [Artist] [Read] Learn scene assembly, assignments, filters, and viewer controls from Trixter Film. The 2024 session includes studio tools.
- [Introduction to Gaffer and Arnold](https://www.youtube.com/watch?v=lAgBcOFMf5k) - [Artist] [Read] Follow Arvid Schneider's 2024 walkthrough of setup, scene inspection, Arnold renders, and **EditScope** light edits.
- [Shading and Lighting with Gaffer and Arnold](https://www.youtube.com/watch?v=RiPmGDhxjGw) - [Artist] [Read] Use procedural masks and place lights on a dragon in Arvid Schneider's 2024 tutorial. QuickConnect is an optional extension.
- [Gaffer Training - Intermediate](https://www.youtube.com/watch?v=aKUMRKPbdZI) - [TD] [Read] Learn contexts, spreadsheets, boxes, and expressions from Trixter Film. Light one scene before you watch this 2024 session.
- [How to Install Gaffer (on macOS)](https://www.youtube.com/watch?v=wRXP4dvSx8Y) - [Artist] [Read] Follow EC3D's February 2026 walkthrough to install Gaffer and create an application launcher on macOS.
- [How to Install Arnold for Gaffer (on macOS)](https://www.youtube.com/watch?v=Fhoe6RikbJA) - [Artist] [Read] Follow EC3D's February 2026 guide to set ARNOLD_ROOT and verify Arnold nodes on macOS.

[Video Learning Notes](docs/video-notes.md) gives chapter links, caption-based notes, and practice drills. The 2024 recordings predate Gaffer 1.7.7.0, and some creators require a paid membership for scene files.

### Production and Development

- [Gaffer User Group - October 2025](https://vimeo.com/1131945768) - [Both] [Read] Watch Gaffer 1.5 and 1.6 updates, GafferRenderMan progress, and the Warfare production session.
- [Gaffer User Group - December 2024](https://vimeo.com/1036919633) - [Both] [Read] Watch Gaffer 1.4 and 1.5 updates plus GafferRenderMan and GafferML previews.
- [Gaffer User Group - March 2024](https://vimeo.com/923093356) - [Both] [Read] Watch production work, Gaffer 1.3 updates, and a Gaffer 1.4 preview.
- [GafferHQ on Vimeo](https://vimeo.com/gafferhq) - [Both] [Read] Browse presentations and feature demos from GafferHQ. Check the upload date before you copy a workflow.
- [Multi-Shot Workflows for Episodic Animation and VFX](https://blog.gafferhq.org/demo-multi-shot-workflows-for-episodic-animation-vfx/) - [TD] [Read] Read GafferHQ's 2024 introduction to Rupert Thorpe's multi-shot workflow and watch the embedded demo.

Pause at each node connection, predict the result, and rebuild that small piece yourself. [Vimeo Collection Notes](docs/vimeo-resources.md) separates studio talks from historical demos. Find older talks and unverified extensions in [Resource Review](docs/resource-review.md).

## Examples and Sample Assets

Open a small example graph before you tackle a full studio template.

- [Gaffer Examples](https://github.com/ezequielmastrasso/gaffer-examples) - [Both] [Read] Study small community graphs before you adapt a full production template.
- [Gaffer Resources](https://www.gafferhq.org/resources/) - [Both] [Read] Find examples, extensions, and community channels in the official GafferHQ directory.
- [OpenUSD Sample Assets](https://openusd.org/release/dl_downloads.html#assets) - [Both] [Read] Download Pixar sample scenes such as Kitchen Set to practice a USD handoff.
- [USD Working Group Assets](https://github.com/usd-wg/assets) - [Both] [Read] Find test assets and guidelines for USD scene exchange exercises.

Start with the bundled GafferBot files inside your Gaffer install. Before you download external assets, check their license, texture paths, and shader requirements. A sample USD scene does not guarantee Arnold-ready shaders.

## USD in Gaffer

Learn four basic USD terms first, then practice reading a small scene and writing a tiny override layer.

**In plain words:** Universal Scene Description (USD) stacks separate department files like transparent animation sheets over a base drawing. Each 3D item is a **prim**, each file is a **layer**, and the combined result is a **stage**. Use **USDLayerWriter** to save only your edits, and use **SceneWriter** only when you need a full standalone copy. See [USD Layers and Scene Files](docs/core-concepts.md#usd-layers-and-scene-files).

### Artist Foundations

- [Book of USD](https://remedy-entertainment.github.io/USDBook/) - [Artist] [Read] Learn USD terms and artist workflows from Remedy Entertainment's plain-language guide.
- [OpenUSD Introduction](https://openusd.org/release/intro.html) - [Both] [Read] Learn how USD combines files from modeling, animation, lookdev, and lighting.
- [OpenUSD Terms and Concepts](https://openusd.org/release/glossary.html) - [Both] [Read] Look up official OpenUSD definitions for prims, layers, stages, variants, and payloads.

### Gaffer Workflow

- [SceneReader](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/SceneReader.html) - [Both] [Read] Load a USD, Alembic, or SceneCache file into your Gaffer graph.
- [USDLayerWriter](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferUSD/USDLayerWriter.html) - [Both] [Read] Compare a base scene to your edited scene and write only the differences as a USD layer.
- [SceneWriter](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferScene/SceneWriter.html) - [Both] [Read] Write a full scene cache file when you need a standalone file instead of an edit layer.
- [USDLight](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferUSD/USDLight.html) - [Both] [Read] Create UsdLux lights that work across Arnold, Cycles, RenderMan, and 3Delight.
- [USDShader](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferUSD/USDShader.html) - [TD] [Read] Load shaders from the USD registry, including UsdPreviewSurface and UsdUVTexture.
- [GafferUSD Node Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferUSD/index.html) - [TD] [Read] Find all USD nodes in Gaffer 1.7.7.0, including **USDMeshLight** and **PromotePointInstances**.

Current OpenUSD documentation can describe features newer than the USD bundled with Gaffer 1.7.7.0. Check the Gaffer release notes for exact support.

## Technical Learning

Use these guides after your first lighting scene. They cover multi-shot workflows, reusable tools, Open Shading Language (OSL), Python automation, batch dispatching, and profiling.

**In plain words:** A **Context** is a small set of named variables, such as `${shot}` or `${frame}`. It flows *upward* from the bottom of the graph to tell upstream nodes which shot to compute. Think of a vending machine code: one machine serves different drinks based on the button you press. A **Spreadsheet** node swaps plug values automatically when the context changes. See [Contexts](docs/core-concepts.md#contexts-and-context-variables) and [Spreadsheets](docs/core-concepts.md#spreadsheets).

- [Contexts](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithTheNodeGraph/Contexts/index.html) - [TD] [Read] Learn how context variables such as frame or shot change upstream node results.
- [Context Variables Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/ContextVariables/index.html) - [TD] [Read] Look up built-in context variables such as frame, scene:path, and renderPass.
- [ContextQuery](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/Gaffer/ContextQuery.html) - [TD] [Read] Read context variable values inside the node graph without writing an expression.
- [Spreadsheet Tutorial](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithTheNodeGraph/TutorialSettingUpASpreadsheet/index.html) - [TD] [Read] Build a table of plug values that change per shot or render pass.
- [Spreadsheet Concepts](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithTheNodeGraph/SpreadsheetNode/index.html) - [TD] [Read] Learn how **Spreadsheet** matches rows, wildcards, and default fallback values.
- [Box Node](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithTheNodeGraph/BoxNode/index.html) - [TD] [Read] Package a sub-graph into a reusable tool with promoted artist controls and references.
- [Expressions](https://www.gafferhq.org/documentation/1.7.7.0/Reference/ScriptingReference/Expressions/index.html) - [TD] [Read] Write Python or OSL expressions that drive plug values from other plugs or contexts.
- [String Substitution Syntax](https://www.gafferhq.org/documentation/1.7.7.0/Reference/ScriptingReference/StringSubstitutionSyntax/index.html) - [TD] [Read] Format dynamic file paths using ${variable} tokens and #### frame padding.
- [Set Expressions](https://www.gafferhq.org/documentation/1.7.7.0/Reference/ScriptingReference/SetExpressions/index.html) - [TD] [Read] Combine, intersect, and subtract named sets for filters and light linking.
- [Tutorial: Using The OSLCode Node](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithTheNodeGraph/TutorialUsingTheOSLCodeNode/index.html) - [TD] [Read] Write custom Open Shading Language (OSL) code inside Gaffer for shaders, geometry, or images.
- [Working with the Python Scripting API](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithThePythonScriptingAPI/index.html) - [TD] [Read] Start here for the **Python Editor**, graph automation, and studio startup configs.
- [Tutorial: Node Graph Editing in Python](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithThePythonScriptingAPI/TutorialNodeGraphEditingInPython/index.html) - [TD] [Read] Create nodes, set plugs, and connect wires using Python commands.
- [Tutorial: Querying a Scene](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithThePythonScriptingAPI/TutorialQueryingAScene/index.html) - [TD] [Read] Read scene locations, transforms, and attributes through Gaffer's Python API.
- [Startup Config Tutorials](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithThePythonScriptingAPI/TutorialStartupConfig1/index.html) - [TD] [Read] Configure startup Python files to add studio context variables, bookmarks, and node menus.
- [Wedge](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferDispatch/Wedge.html) - [TD] [Read] Run upstream render or cache tasks across a list or range of context variable values.
- [LocalDispatcher](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferDispatch/LocalDispatcher.html) - [Both] [Read] Execute batch renders, caches, and task graphs on your local machine.
- [Performance Best Practices](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithTheNodeGraph/PerformanceBestPractices/index.html) - [TD] [Read] Avoid graph patterns that hurt caching and slow down evaluation.
- [Using the Performance Monitor](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithTheNodeGraph/UsingThePerformanceMonitor/index.html) - [TD] [Read] Measure which nodes and plugs take the most compute time in a slow graph.
- [Anatomy of an Image](https://www.gafferhq.org/documentation/1.7.7.0/WorkingWithImages/AnatomyOfAnImage/index.html) - [TD] [Read] Learn how Gaffer processes 2D images, channels, data windows, and slap-comps.

## Tools and Integrations

Use these references for headless command-line runs, AI agent integration, render farms, machine learning nodes, and pipeline addons.

**In plain words:** A **Dispatcher** (such as **LocalDispatcher**, **FlamencoDispatcher**, **TractorDispatcher**, or **GafferDeadline**) works like a kitchen order ticket system. It reads your task nodes and checks task dependencies. Then it sends frames to local threads or render farm workers in the right order.

- [Gaffer Source](https://github.com/GafferHQ/gaffer) - [TD] [Read] Find the source code, releases, automated tests, and issue tracker.
- [Gaffer Developer Wiki](https://github.com/GafferHQ/gaffer/wiki) - [TD] [Read] Read official node design guidelines, profiling notes, and C++ contribution rules.
- [Gaffer Command Line Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/CommandLineReference/index.html) - [TD] [Read] Run headless Gaffer commands including execute, dispatch, python, and stats.
- [Gaffer MCP Server](https://www.gafferhq.org/documentation/1.7.7.0/Reference/CommandLineReference/mcp.html) - [TD] [Read] Expose Gaffer scripts to Model Context Protocol (MCP) clients. Note that MCP grants full Python access.
- [FlamencoDispatcher](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferFlamenco/FlamencoDispatcher.html) - [TD] [Read] Dispatch Gaffer task graphs to Flamenco, an open-source render farm manager.
- [TractorDispatcher](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferTractor/TractorDispatcher.html) - [TD] [Read] Dispatch Gaffer task graphs to Pixar Tractor render farms.
- [GafferML Node Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferML/index.html) - [TD] [Read] Run ONNX Runtime inference on images, meshes, and data inside Gaffer.
- [GafferVDB Node Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/GafferVDB/index.html) - [TD] [Read] Inspect and process OpenVDB volume grids directly in the node graph.
- [GafferDeadline](https://github.com/hypothetical-inc/GafferDeadline) - [TD] [Read] Submit Gaffer task graphs with dependencies to AWS Thinkbox Deadline. Check release compatibility first.
- [AYON Gaffer Addon](https://github.com/RVXStudio/ayon-gaffer) - [TD] [Read] Integrate Gaffer publishing and Deadline renders with the open-source AYON pipeline.
- [AtomsGaffer](https://github.com/Toolchefs/atomsGaffer) - [TD] [Read] Extend Gaffer with Toolchefs Atoms Crowd procedural nodes. Check matching Gaffer build versions.

Find older or unverified community integrations in [Resource Review](docs/resource-review.md). Test every third-party extension against your exact Gaffer build before using it in production.

## References

Use the versioned reference when you need an exact plug name or scripting command.

- [Gaffer 1.7.7.0 Node Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/NodeReference/index.html) - [Both] [Read] Look up every node and plug after you know which operation you need.
- [Gaffer 1.7.7.0 Release Notes](https://www.gafferhq.org/documentation/1.7.7.0/ReleaseNotes/index.html) - [Both] [Read] Check version changes when an older tutorial or scene behaves differently.
- [Gaffer Scripting Reference](https://www.gafferhq.org/documentation/1.7.7.0/Reference/ScriptingReference/index.html) - [TD] [Read] Look up common Python snippets, metadata keys, expressions, and set expression syntax.

- [Core Concepts Explained Simply](docs/core-concepts.md) explains Gaffer's hardest ideas with analogies, pitfalls, and VFX examples.
- [Gaffer Glossary](docs/glossary.md) gives short, version-checked definitions for Gaffer terms and UI panels.

## Community

Use these channels to ask questions, browse solutions, or follow Gaffer development.

- [GafferHQ Discussions](https://github.com/GafferHQ/gaffer/discussions) - [Both] [Read] Ask questions, read release threads, and share workflows with developers and users.
- [Gaffer Users Discord](https://discord.gg/sEm8dDw) - [Both] [Read] Join the community-run Discord server for quick artist and pipeline help.
- [Gaffer Forum on We Suck Less](https://www.steakunderwater.com/wesuckless/viewforum.php?f=55) - [Both] [Read] Browse Gaffer topics inside the We Suck Less open-source VFX forum.
- [Gaffer Development Mailing List](https://groups.google.com/g/gaffer-dev) - [Both] [Read] Search years of developer answers, feature discussions, and Python examples.
- [The GafferHQ Blog](https://blog.gafferhq.org/) - [Both] [Read] Read official release highlights, user group recaps, and studio workflow demos.

## Related Lists

Use this list for USD topics outside Gaffer.

- [Awesome OpenUSD](https://github.com/matiascodesal/awesome-openusd) - [Both] [Read] Find USD tools, sample assets, and learning resources beyond Gaffer.

## Evidence Labels

**Read** means the project inspected the linked source, its publisher metadata, or its captions. **Unchecked** means evidence is still incomplete. **Tested** requires a hands-on entry in [Runtime Test Log](docs/test-log.md).

## Contributing

Read [Contribution Guidelines](CONTRIBUTING.md) before suggesting a resource. Name the artist or TD task it solves, inspect the source, and record version or cost limits.

## Footnotes

- [Curation Notes](docs/curation.md) explains how the project selects and verifies resources.
- [Foundation Notes](docs/foundation.md) records the repository's scope and design notes.
- The Awesome badge marks the list format. The upstream Awesome index does not list this repository.
- Last reviewed: November 25, 2026. Source inspection does not replace a hands-on workstation test in your studio environment.
