# Learning Path for Maya Lighting Artists

This is a suggested route through the resource list. Learn one small task at a time and prove it works before adding complexity. It does not require Python for the first scene.

## 1. Install and Connect the Renderer

Open the [installation and Arnold resources](../README.md#installation-and-arnold), then follow the [setup checklist](arnold-setup.md).

Finish line: Arnold nodes appear, Arnold is selected for the scene, and a test image reaches Catalogue. Those are three separate checks.

## 2. Learn the Two Maps

Open [Anatomy of a Scene](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithScenes/AnatomyOfAScene/index.html), then the [Maya translation](maya-to-gaffer.md).

Create a Sphere, inspect its hierarchy, then connect it to Transform. View each output. The Graph Editor shows operations; the Hierarchy View shows the scene they produce.

Watch the first chapter of [Trixter Basics](video-notes.md#trixter-the-basics), or Schneider's editor/inspection sections in [Introduction and Arnold](video-notes.md#arvid-schneider-introduction-and-arnold). Pin the Viewer to the final scene, then select a shader node and explain why the visible scene remains stable.

Finish line: you can find an object path and explain why inspecting an upstream output differs from inspecting the edited output.

## 3. Assemble a Tiny Scene

Follow the [GafferBot tutorial](https://www.gafferhq.org/documentation/1.7.3.0/GettingStarted/TutorialAssemblingTheGafferBot/index.html). It uses Cycles and bundled resources. Either complete that tutorial as written first, or use Arnold equivalents deliberately; mixing Cycles shaders with an Arnold render is not a renderer conversion.

Finish line: one asset, one shader, one camera and one light reach the render. Outputs defines the image and Catalogue displays it. Save the .gfr and note its external dependencies.

## 4. Light With an Intention

Use the [lighting references](../README.md#lighting-and-look-development). Choose a reference and describe the intended mood in one sentence. Set the key direction first. Change exposure, then source size, one at a time. Add fill only when it solves a visible problem.

For a worked artistic example, use the lighting chapter of [Schneider's shading and lighting tutorial](video-notes.md#arvid-schneider-shading-and-lighting). Start with the light task; save procedural shading for later. Check the active EditScope and identify where an override is stored.

Finish line: two saved lighting versions with the same camera and display settings, plus an explanation of the changes. +1 exposure stop doubles emitted energy; it does not guarantee twice the displayed pixel value.

## 5. Target an Edit

Read ShaderAssignment and PathFilter in [Artist Learning](../README.md#artist-learning). Give two objects different names and apply a material to one. Inspect the downstream paths after grouping.

Use the assignments chapter of [Trixter Basics](video-notes.md#trixter-the-basics). Inspect paths at the input consumed by the assignment, then verify affected objects. Try a named set for membership that several operations share. Schneider's introduction adds the distinction between an inherited shader and an explicit child assignment.

Finish line: only the intended object changes. Deliberately break the filter and diagnose the mismatch.

## 6. Understand a USD Handoff

Read the [artist USD foundations](../README.md#artist-foundations), then the Gaffer workflow references. Identify a prim, a layer and a stage before exporting changes.

Finish line: explain what SceneReader imports, when SceneWriter writes a full scene, and when USDLayerWriter writes differences. Reload a small composed example before trusting a larger handoff.

## 7. Share a Graph Across Shots

Complete the [Spreadsheet tutorial](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithTheNodeGraph/TutorialSettingUpASpreadsheet/index.html). Begin with one light control and two rows. Inspect the selector and default row before introducing a shot context variable.

Use the context and spreadsheet chapters of [Trixter Intermediate](video-notes.md#trixter-intermediate). Switch two simple light variants before recreating a production template. View downstream of the local context change. Deliberately create a wildcard row that masks a later row, then repair the order. Check computed globals for render settings.

Finish line: a named row changes one value predictably. You can explain what selects the row, which match wins and what happens when nothing matches.

## 8. Retrieve and Transfer

After a break, rebuild the core scene without the instructions. Try a different asset, then diagnose one broken scene connection or filter. Record what you could do independently and what still needed a reference.

These finish lines are practice checks, not a certification. The future website's design and full lesson production are deferred until the foundation has been reviewed.

## Optional Next Steps

- Procedural look development: use [Schneider's dragon tutorial](video-notes.md#arvid-schneider-shading-and-lighting) with accessible licensed geometry. Inspect a mask before using it; compare one material change at a time. QuickConnect is optional and requires a separate extension.
- Reusable artist tools: use the boxes section of [Trixter Intermediate](video-notes.md#trixter-intermediate) to expose a few named controls and test bypass behavior. Introduce expressions only when a useful filename or parameter relationship needs them.
- Production motivation: browse the [Vimeo company talks](vimeo-resources.md#company-production-talks) after the first render works. They are dated case studies; detailed content review is still pending.

The video notes distinguish caption findings, publisher chapters and our proposed exercises. None of these additions establishes hands-on compatibility with Gaffer 1.7.3.0.
