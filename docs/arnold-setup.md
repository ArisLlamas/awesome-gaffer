# Arnold Setup Checklist

Version: Gaffer 1.7.7.0. Follow the [version-pinned official setup guide](https://www.gafferhq.org/documentation/1.7.7.0/GettingStarted/ConfiguringGafferForThirdPartyTools/index.html) and your studio's renderer requirements.

**Tip for first-time learners:** Gaffer ships with the free Cycles renderer built in. Complete the GafferBot tutorial with Cycles first if you do not have an Arnold license yet.

## Install Gaffer

- [ ] Download the Windows, Linux, or macOS archive from the [Gaffer 1.7.7.0 release](https://github.com/GafferHQ/gaffer/releases/tag/1.7.7.0).
- [ ] Extract the complete package to a directory you can read and run.
- [ ] On Windows, install the required Microsoft Visual C++ Redistributable.
- [ ] Launch `bin/gaffer.cmd` on Windows, or `bin/gaffer` on Linux and macOS.

## Install and Connect Arnold

- [ ] Obtain a compatible standalone Arnold distribution from Autodesk or your studio software team. The official 1.7.7.0 guide uses Arnold 7.4.1.0 as an example. Confirm compatibility before you pick another version.
- [ ] Set `ARNOLD_ROOT` to the Arnold installation root, not the `bin` folder or a Maya plug-in file.
- [ ] Close Gaffer and launch again from an environment that contains `ARNOLD_ROOT`.
- [ ] Confirm that Arnold nodes appear in the **Graph Editor** creation menu.

Windows Command Prompt example; replace the path:

```bat
setx ARNOLD_ROOT "C:\software\arnold-7.4.1.0"
```

Open a new Command Prompt, then verify and launch from it:

```bat
echo %ARNOLD_ROOT%
C:\software\gaffer-1.7.7.0-windows\bin\gaffer.cmd
```

Linux bash example for a current-shell test; replace both paths:

```bash
export ARNOLD_ROOT=/opt/solidangle/arnold-7.4.1.0
echo "$ARNOLD_ROOT"
/opt/gaffer-1.7.7.0-linux/bin/gaffer
```

macOS zsh example for a current-shell test; replace both paths:

```zsh
export ARNOLD_ROOT=/Applications/solidangle/arnold-7.4.1.0
echo "$ARNOLD_ROOT"
/opt/gaffer-1.7.7.0-macos/bin/gaffer
```

For persistence, add the export to the startup file or studio launcher that your system actually reads. Setting a variable in one terminal does not guarantee a desktop shortcut inherits it.

## Select Arnold and View an Image

- [ ] Assemble geometry, an **ArnoldShader**, a camera, and an **ArnoldLight**. Include the camera and light in the scene chain.
- [ ] In **StandardOptions**, enable the render camera plug and enter the camera's exact downstream path.
- [ ] Enable Default Renderer in **StandardOptions** and pick Arnold.
- [ ] Add **ArnoldOptions** for Arnold sampling and ray depth controls. This node does not select the renderer.
- [ ] Add **Outputs** to the scene chain. Pick `Interactive > Beauty` from its add button.
- [ ] Connect to **InteractiveRender** and pick Default, or pick Arnold explicitly.
- [ ] Create **Catalogue** from the Image menu. It displays images and does not connect to the 3D scene chain.
- [ ] Start **InteractiveRender**, focus **Catalogue** in the **Viewer**, and press `F` to frame the live image.
- [ ] Save a working starter `.gfr` file and note external asset paths.

## Diagnose the Right Problem

| Symptom | Check |
| --- | --- |
| Arnold nodes missing | Installation root, supported Arnold version, inherited environment, and terminal startup errors. |
| Gaffer picks another renderer | **StandardOptions** Default Renderer plug and the render node's renderer plug. |
| No image arrives | **Outputs** configuration, active render state, and **Viewer** focus on **Catalogue**. |
| Black or empty image | Geometry path, camera path, framing, assigned shader, and included light. |
| Watermark or licensing error | Check [Arnold Licensing](https://help.autodesk.com/cloudhelp/ENU/AR-Core/files/arnold-setup/arnold_user_guide_arnold_setup_ac_licensing_home_html.html) or ask your administrator. |
| Colors look dark or too contrasty | Check Script Settings OpenColorIO config (ACES 1.3 Studio default) and texture input color spaces. |

## Studio Steps Awaiting Input

See [Open Questions](open-questions.md) for studio launcher details to confirm internally.

The official Gaffer 1.7.7.0 guide supports this checklist. The project does not include a hands-on workstation test.
