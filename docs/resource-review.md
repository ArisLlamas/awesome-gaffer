# Resource Review

Keep older, offline, or unverified resources here until someone tests their current usefulness. Do not treat these entries as production installation recommendations.

## Historical Instruction

- [DigiPro 2016 - Gaffer](https://www.youtube.com/watch?v=6X7Q4pnUiJk) - [Both] [Read] Pipeliner's 2020 repost of a 2016 talk; useful for architecture history, though feature-status claims predate Gaffer 1.x.
- [Gaffer: Open Source Lookdev, Lighting, and Automation](https://www.youtube.com/watch?v=Edod6s93Ogk) - [Both] [Read] Murray Stevenson's 2023 ASWF presentation; good production context, with dated 2023 survey and roadmap notes.
- [GafferHQ Historical Vimeo Resources](vimeo-resources.md) - Company talks and focused demonstrations from earlier releases; we reviewed publisher descriptions, not full video content.
- [GafferBot Lighting and LookDev Walkthrough](https://blog.gafferhq.org/introduction-to-gaffer-gafferbot-lighting-and-lookdev/) - [Artist] [Read] Official February 2017 walkthrough; useful history, but current controls and renderers differ.

[Video Learning Notes](video-notes.md) lists caption-based findings from both historical YouTube talks and flags outdated claims to skip.

**Offline community index note:** `gaffer.wiki/wiki/Learning_resources` timed out across repeated link checks (September and November 2026). We removed the broken hyperlink until the host recovers reliably.

## Integrations Needing Compatibility Review

These community GitHub repositories exist publicly, but their last commits predate Gaffer 1.7.7.0 and lack hands-on verification:

- [TK-Gaffer](https://github.com/diegogarciahuerta/tk-gaffer) - [TD] [Read] ShotGrid Toolkit engine listed by GafferHQ; last commit October 2021, untested on Gaffer 1.7.7.0.
- [GafferOpenCue](https://github.com/boberfly/GafferOpenCue) - [TD] [Read] OpenCue render farm dispatcher for Gaffer; last commit October 2022, untested on Gaffer 1.7.7.0.
- [LDTGaffer](https://github.com/ezequielmastrasso/LDTGaffer) - [Both] [Read] Lookdev and utility nodes by Ezequiel Mastrasso; last commit June 2023, untested on Gaffer 1.7.7.0.
- [GafferHaven](https://github.com/kubo-von/GafferHaven) - [Artist] [Read] Plugin that loads PolyHaven HDRIs for Cycles and Arnold; last commit July 2023, untested on Gaffer 1.7.7.0.
- [Gaffer-Tools](https://github.com/vNicolini/Gaffer-Tools) - [TD] [Read] Community utility nodes for Gaffer; last commit February 2024, untested on Gaffer 1.7.7.0.
- [Practical Denoising for VFX](https://github.com/ImageEngine/practicalDenoising) - [TD] [Read] Image Engine's SIGGRAPH 2018 temporal denoising reference graph in Gaffer; historical reference only.

## Review Before Promotion

Check the source documentation, target Gaffer version, recent maintenance, access limits, and task usefulness. For a plug-in, install and test it in a clean matching environment before claiming compatibility. For a tutorial, reproduce a small result and log the versions in [Runtime Test Log](test-log.md).

A timeout means access failed during a check, not proof that a site vanished permanently. Keep historical tutorials clearly labeled even when their pages still load.
