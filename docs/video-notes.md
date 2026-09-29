# Video Learning Notes

Reviewed September 29, 2026. These are paraphrased findings from accessible English automatic captions and publisher metadata, not a visual watch-through or hands-on compatibility test. Automatic captions can mishear node names; exact clicks, shortcuts and graphs need visual review and reproduction in Gaffer 1.7.3.0 before becoming website instructions. Full transcripts and video files are not redistributed.

[Back to resources](../README.md#videos-and-demonstrations) · [Practice route](learning-path.md) · [Metadata catalogue](video-catalog.json) · [Vimeo collection](vimeo-resources.md)

The chapter labels and boundaries below come from the publishers. Findings use approximate minute ranges from captions. Exercises are our proposed teaching material, not assignments provided by the speakers.

## Trixter: The Basics

[Gaffer Training - The Basics](https://www.youtube.com/watch?v=qJWtai73TB8) — Trixter Film, September 30, 2024, 44:25. The publisher describes internal onboarding for first-time users.

| Chapter | Start |
| --- | --- |
| First Steps | [0:00](https://www.youtube.com/watch?v=qJWtai73TB8&t=0s) |
| Assignments & Filters | [14:18](https://www.youtube.com/watch?v=qJWtai73TB8&t=858s) |
| 3D & 2D Viewer Controls | [31:53](https://www.youtube.com/watch?v=qJWtai73TB8&t=1913s) |

Useful findings:

- Around 0–4 minutes: distinguish Group's added parent from MergeScenes when assembling geometry, camera and lights.
- Around 4–7: editor selection, pinning and focus determine which scene output you inspect. Keep the final scene visible while editing another node.
- Around 7–13: inspect location attributes separately from scene globals. Camera options and image outputs need explicit setup; renderer settings alone do not produce a viewable image.
- Around 14–24: check affected objects before rendering. Wildcards help target paths; named sets reduce repeated membership edits across assignments.
- Around 25–31: inspect set membership and combine selections deliberately.
- Around 39–44: saved images, pixel/region inspection and AOV viewing support comparisons. Hiding the crop tool does not itself clear a render crop.

Practice: assign two materials, deliberately break one path, then diagnose it from the assignment's input scene. Replace duplicated filters with one named set.

Translation needed: the preview-render convenience node and shared-node library are studio-specific. Our [stock Arnold checklist](arnold-setup.md) supplies the public Gaffer route.

## Trixter: Intermediate

[Gaffer Training - Intermediate](https://www.youtube.com/watch?v=aKUMRKPbdZI) — Trixter Film, September 30, 2024, 1:32:48. The publisher positions this as advanced lighting and look-development onboarding.

| Chapter | Start |
| --- | --- |
| Contexts | [0:00](https://www.youtube.com/watch?v=aKUMRKPbdZI&t=0s) |
| Spreadsheets | [24:14](https://www.youtube.com/watch?v=aKUMRKPbdZI&t=1454s) |
| Box Nodes & Expressions | [46:17](https://www.youtube.com/watch?v=aKUMRKPbdZI&t=2777s) |

Useful findings:

- Around 1–7 minutes: contexts vary a shared graph. A locally introduced variable affects upstream evaluation when viewing that node or its downstream output.
- Around 11–13: switch an override branch for a render layer instead of duplicating the entire lighting scene.
- Around 24–31: a Spreadsheet makes shot settings comparable. Earlier matching rows take priority; unmatched selectors fall back to defaults. Check computed globals rather than trusting one displayed plug value.
- Around 33–40: camera invisibility, matte treatment and pruning solve different render-layer problems.
- Around 46–59: boxes can expose useful controls, labels and presets; bypass behavior must be wired deliberately. References support sharing a packaged tool.
- Around 70–80: an expression can derive related image filenames from one exposed choice.
- Around 87–92: reference-light matching becomes a concrete creative challenge, with camera framing and display/colour preparation part of the work.

Practice: use two rows to vary resolution, then deliberately put a wildcard row first and explain the result.

Translation needed: the shot/layer interface, asset bundles, shared tools and studio assets are not public prerequisites. Expressions belong after a useful visual task.

## Arvid Schneider: Introduction and Arnold

[Introduction to Gaffer and Arnold](https://www.youtube.com/watch?v=lAgBcOFMf5k) — Arvid Schneider, October 24, 2024, 1:05:05. In the opening captions, Schneider identifies his experience using Gaffer as an Image Engine lighting supervisor.

| Chapter | Start |
| --- | --- |
| Download / Start | [1:57](https://www.youtube.com/watch?v=lAgBcOFMf5k&t=117s) |
| Scene Inspector | [13:12](https://www.youtube.com/watch?v=lAgBcOFMf5k&t=792s) |
| Basics | [17:08](https://www.youtube.com/watch?v=lAgBcOFMf5k&t=1028s) |
| Basic Intro - Arnold | [28:04](https://www.youtube.com/watch?v=lAgBcOFMf5k&t=1684s) |
| Lighting and Shading | [41:48](https://www.youtube.com/watch?v=lAgBcOFMf5k&t=2508s) |

Useful findings:

- Around 4–5 minutes: connect the standalone Arnold installation through ARNOLD_ROOT. Hiding Cycles is a presentation preference, not selecting Arnold for a scene.
- Around 9–15: map editor focus, Hierarchy View, Scene Inspector and Light Editor to familiar artist tasks.
- Around 34–35: a copied path can fail because it belongs to a different graph output. Inspect the hierarchy where the assignment consumes its scene.
- Around 50–51: shader inheritance explains why an explicit child assignment can defeat a parent override.
- Around 52–59: EditScope keeps downstream light changes separate from the source light; choose the scope in the editing interface and inspect where the edit lands.

Practice: make one downstream exposure override, then prove the original light remains unchanged and locate the override.

Use [version-pinned setup guidance](arnold-setup.md), not the video's old SDK version or personal colour settings. Gaffer is open source; Arnold has separate licensing. Scene-file access is not assumed free.

## Arvid Schneider: Shading and Lighting

[Shading & Lighting with Gaffer and Arnold](https://www.youtube.com/watch?v=RiPmGDhxjGw) — Arvid Schneider, November 4, 2024, 30:04.

| Chapter | Start |
| --- | --- |
| Preparing the Scene for Shading | [0:50](https://www.youtube.com/watch?v=RiPmGDhxjGw&t=50s) |
| Shading Overview and QuickConnect | [5:38](https://www.youtube.com/watch?v=RiPmGDhxjGw&t=338s) |
| Using QuickConnect | [8:24](https://www.youtube.com/watch?v=RiPmGDhxjGw&t=504s) |
| Lookdev | [9:24](https://www.youtube.com/watch?v=RiPmGDhxjGw&t=564s) |
| Lighting | [23:38](https://www.youtube.com/watch?v=RiPmGDhxjGw&t=1418s) |

Useful findings:

- Around 6–9 minutes: inspect an intermediate texture before judging its effect inside a material. QuickConnect is an added helper, not a stock shortcut beginners can assume exists.
- Around 10–18: remap curvature to roughness, add noise to break uniformity, and evaluate bump at a controlled strength.
- Around 20–23: separate dust and metal materials, inspect the mask, and check its direction. A turntable helps expose texture movement problems.
- Around 24–29: use an EditScope, Light Editor and light-placement tools to shape highlights; judge the dome, rim lights and top light separately.

Practice: inspect a greyscale mask, predict which areas change, then compare two renders with only roughness changed. Follow with a separate key-light exercise.

Do not copy sampling values as universal settings. SDK version, CPU/GPU mode and scene cost matter. Public practice should use licensed accessible geometry, not require the creator's paid dragon scene or startup helper.

## Historical: DigiPro 2016

[DigiPro 2016 repost](https://www.youtube.com/watch?v=6X7Q4pnUiJk) — uploaded by Pipeliner April 29, 2020, 21:52; the talk itself is from 2016. The description identifies this [original GafferHQ Vimeo recording](https://vimeo.com/201047816).

Useful caption ranges: [4:02](https://www.youtube.com/watch?v=6X7Q4pnUiJk&t=242s) introduces nodes and plugs; [4:54](https://www.youtube.com/watch?v=6X7Q4pnUiJk&t=294s) explains contexts; [14:27](https://www.youtube.com/watch?v=6X7Q4pnUiJk&t=867s) covers lighting templates; [15:44](https://www.youtube.com/watch?v=6X7Q4pnUiJk&t=944s) covers multi-shot profiles.

Retain the architectural lesson: reusable graphs can package look development, lighting and delivery tasks. The talk explicitly distinguishes open-source Gaffer from Image Engine's proprietary pipeline components. Jabuka, Caribou and production-specific integrations are case studies, not public setup requirements.

Historical warning: statements about missing manipulators, animation UI, light linking or USD describe 2016. They must not be used to describe 1.7.3.0. Start beginners with the 2024 tutorials instead.

## Historical: ASWF 2023

[Gaffer: Open Source Lookdev, Lighting, and Automation](https://www.youtube.com/watch?v=Edod6s93Ogk) — Murray Stevenson, Cinesite; published by Academy Software Foundation August 10, 2023, 10:35.

Selected publisher chapters: [Usage 4:26](https://www.youtube.com/watch?v=Edod6s93Ogk&t=266s), [Development 6:26](https://www.youtube.com/watch?v=Edod6s93Ogk&t=386s), [Gaffer 1.3 8:13](https://www.youtube.com/watch?v=Edod6s93Ogk&t=493s), [USD Lux Lights 9:13](https://www.youtube.com/watch?v=Edod6s93Ogk&t=553s).

Useful findings: the opening connects contexts and spreadsheets to sharing one lighting template across shots. Around 3–4 minutes, the speaker separates public downloadable Gaffer from studio integrations. Around 6–8, development, builds and release work are described as public. Around 8–9, colour management, light manipulation and USD work explain the direction of artist-facing development at that time.

Use this for motivation and history. The 2023 survey, release policy, previews and roadmap are dated observations, not current adoption statistics or feature promises. Verify USD operations against the [baseline references](../README.md#usd-in-gaffer).

## How These Findings Improve the Learning Project

These are design proposals informed by the sources above. They are not changes to the deferred website design.

| Beginner question | Evidence to use | Proposed exercise or interface |
| --- | --- | --- |
| Why did my scene disappear? | Both introductions: editor focus | Show the viewed output beside the current selection; let the learner pin the final scene. |
| Why didn't this material apply? | Trixter filters; Schneider path mismatch and inheritance | Compare the filter with input-scene paths and show affected locations before rendering. |
| Why is there no render image? | Trixter first steps; Arnold introduction | Separate renderer loading, camera/scene, image output and Catalogue checks. |
| Where did that light change happen? | Schneider's EditScope sections | Show source value, downstream value and the active editing scope. |
| What is a context useful for? | Trixter intermediate; official Contexts guide | Switch between two light variants, then explain evaluation upstream. |
| Why did the wrong shot settings win? | Trixter spreadsheet section | Predict the first matching row and test a deliberate wildcard mistake. |
| How do I evaluate a procedural material? | Schneider's dragon tutorial | Inspect the mask, make a prediction, change one control and compare images. |

Suggested lesson pattern: name the visual task, link a short relevant segment, provide an accessible practice scene, ask for a prediction, then verify an observable result. Completion should mean the task worked, not merely that a video played. This extends the task-first concerns in [documentation issue #7144](https://github.com/GafferHQ/gaffer/issues/7144).

Technical cross-check: the [1.7.3.0 Contexts guide](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithTheNodeGraph/Contexts/index.html) confirms upstream context flow and editor-focus pitfalls. It also warns that scene:path is absent for globals and unsupported for string substitutions in shader networks; do not generalize the video's per-location examples to every plug.

## Review Still Needed Before Website Lessons

- Visually review the selected segments and reproduce each exercise in the chosen Gaffer/Arnold versions.
- Translate studio nodes, shot/layer selectors and private asset paths into small public graphs.
- Verify exact node names, shortcuts, shader inheritance and colour-management settings against baseline documentation.
- Check asset and helper licenses before redistribution; link original videos rather than copying them.
- Review Vimeo company talks visually before extracting detailed workflow claims; current notes use publisher descriptions only.
