# Maya to Gaffer

Use familiar artist questions to find the right Gaffer tool. These mappings describe purpose, not identical behavior.

| Artist question | Maya landmark | Gaffer starting point |
|---|---|---|
| What objects are in this scene? | Outliner | Hierarchy View, following the scene output you want to inspect. |
| What controls this operation? | Attribute Editor | Node Editor for the selected node's plugs. |
| What value reached this object? | Evaluated attributes and connections | SceneInspector at the relevant output and location. |
| Where is the material network? | Hypershade | Shader nodes connected to ShaderAssignment. |
| Which objects get this edit? | Object selection or sets | A filter, often PathFilter, matching scene locations. |
| Which camera and resolution render? | Render Settings | StandardOptions global scene options. |
| Which Arnold settings apply? | Arnold Render Settings | ArnoldOptions after renderer selection. |
| Where is the rendered image? | RenderView | InteractiveRender plus Outputs and Catalogue. |
| How do shots vary? | Overrides or shot-specific settings | Spreadsheet rows selected deliberately, often using context. |

A node is an operation. A scene location is an element produced by the graph. A Group can change paths by adding a parent. Inspect the downstream hierarchy before writing a filter or choosing a render-camera path.

References: [scene anatomy](https://www.gafferhq.org/documentation/1.7.3.0/WorkingWithScenes/AnatomyOfAScene/index.html), [interface](https://www.gafferhq.org/documentation/1.7.3.0/Interface/index.html), and [SceneInspector source](https://github.com/GafferHQ/gaffer/blob/1.7.3.0/python/GafferSceneUI/SceneInspector.py).
