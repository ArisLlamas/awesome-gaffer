# Arnold Setup Checklist

Baseline: Gaffer 1.7.3.0. Follow the [version-pinned official setup guide](https://www.gafferhq.org/documentation/1.7.3.0/GettingStarted/ConfiguringGafferForThirdPartyTools/index.html) and your studio's approved renderer requirements.

## Install Gaffer

- [ ] Download the Windows or Linux archive from the [1.7.3.0 release](https://github.com/GafferHQ/gaffer/releases/tag/1.7.3.0).
- [ ] Extract the complete package to a location you can use.
- [ ] On Windows, install the required Microsoft Visual C++ Redistributable.
- [ ] Launch `bin/gaffer.cmd` on Windows or `bin/gaffer` on Linux.

## Install and Connect Arnold

- [ ] Obtain the compatible standalone Arnold distribution from Autodesk or the studio software team. The pinned guide uses Arnold 7.4.1.0 as its example; confirm compatibility before choosing another version.
- [ ] Set `ARNOLD_ROOT` to the Arnold installation root, not the `bin` directory or a Maya plug-in file.
- [ ] Close Gaffer and launch again from an environment containing that setting.
- [ ] Confirm that Arnold nodes appear in the Graph Editor creation menu.

Windows Command Prompt example; replace the path:

```bat
setx ARNOLD_ROOT "C:\software\arnold-7.4.1.0"
```

Open a new Command Prompt, then verify and launch from it:

```bat
echo %ARNOLD_ROOT%
C:\software\gaffer-1.7.3.0-windows\bin\gaffer.cmd
```

Linux bash example for a current-shell test; replace both paths:

```bash
export ARNOLD_ROOT=/opt/solidangle/arnold-7.4.1.0
echo "$ARNOLD_ROOT"
/opt/gaffer-1.7.3.0-linux/bin/gaffer
```

For persistence, use the startup file or launcher configuration that your environment actually reads. Setting a variable in one terminal does not guarantee a desktop launcher inherits it.

## Select Arnold and View an Image

- [ ] Assemble geometry, an Arnold shader, a camera and an Arnold light. Include the camera and light in the scene sent to render.
- [ ] In StandardOptions, enable the render-camera option and use the camera's actual downstream path.
- [ ] Enable Default Renderer in StandardOptions and choose Arnold.
- [ ] Add ArnoldOptions for renderer-specific controls. This node does not select the renderer.
- [ ] Add Outputs to the scene chain and choose `Interactive > Beauty` with its add button.
- [ ] Connect to InteractiveRender and choose Default, or explicitly choose Arnold.
- [ ] Create Catalogue from the image node menu. It displays images and is not connected to the scene chain.
- [ ] Start InteractiveRender, focus Catalogue in the Viewer and frame its live image.
- [ ] Save a working starter .gfr and record asset dependencies.

## Diagnose the Right Problem

| Symptom | Check |
|---|---|
| Arnold nodes missing | Installation root, supported version, inherited environment and startup errors. |
| Another renderer is used | StandardOptions default and the render node's explicit choice. |
| No image arrives | Outputs configuration, running render state and Catalogue viewing. |
| Black or empty image | Geometry, camera path, framing, assigned shader and included light. |
| Watermark or licensing error | Current [Autodesk licensing guidance](https://help.autodesk.com/cloudhelp/ENU/AR-Core/files/arnold-setup/arnold_user_guide_arnold_setup_ac_licensing_home_html.html) or your administrator. |

## Studio Steps Awaiting Input

The approved launcher, package version, licensing method, OCIO configuration and extra shader or plug-in paths have not been supplied. Add those only after the studio's instructions are available; keep internal details out of any public version.

This checklist is source-reviewed guidance, not evidence that it has been executed on a particular workstation.
