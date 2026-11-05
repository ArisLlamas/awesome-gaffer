# STE Style Guide for Awesome Gaffer

This guide uses the main rules of ASD-STE100 (Simplified Technical English). We do not use the full approved dictionary. We add a Gaffer glossary instead. Get the full specification from asd-ste100.org.

**Readers:** lighting artists (many come from Maya), technical directors (TDs), and readers who do not speak English as a first language.

**Goal:** A reader must understand each entry the first time they read it.

## Rules

### Sentences

1. **Keep sentences short.** Instructions: 20 words or fewer. Descriptions: 25 words or fewer.
2. **Write one instruction in each sentence.** Use the imperative. Example: "Open the Node Graph."
3. **Use the active voice.** Write "The node makes a layer", not "A layer is made."
4. **Use simple tenses.** Use the present, past, or future simple. Do not use perfect or continuous forms.
5. **Put the condition first.** Write "If the render is black, check the camera."
6. **Use "must" for a required action. Use "can" for a possible action.** Do not use "should", "may", or "might".

### Words

7. **One word, one meaning.** Use the glossary term each time. Do not swap "location", "path", and "object" for the same thing.
8. **Do not use -ing words as nouns.** Write "Assign the material", not "Material assigning". Names in the glossary are allowed.
9. **Use no more than 3 nouns in a row.** Write "the image in the Catalogue", not "interactive beauty render catalogue image".
10. **Use the articles "a", "an", and "the".**
11. **Do not use figurative words.** Avoid "curated", "baseline", "under the hood", "deep dive", "sweet spot".
12. **Write acronyms in full on first use.** Example: "Universal Scene Description (USD)".
13. **Write the exact name of each UI element, in bold.** Example: **Scene Hierarchy**.
14. **Give versions as numbers.** Example: "Gaffer 1.7.3.0", not "the latest Gaffer".

### Paragraphs and lists

15. **One topic in each paragraph.** Use 6 sentences or fewer.
16. **Use a vertical list for 3 or more items.** Make all items parallel.
17. **Put a warning before the step it applies to.** Use **Warning** for loss of work or renders. Use **Note** for other information.

### Evidence and process

18. **Do not rank entries by stars, views, or popularity.** Rank by the task the entry helps with.
19. **Give each entry a status.** `Tested` (with date, Gaffer version, renderer version, and operating system), `Read` (you opened the source), or `Unchecked`. Do not write `Tested` without a record in `docs/test-log.md`.
20. **Test with your own small scene.** Do not test only with the tutorial scene.
21. **Start each concept page with a diagram or picture.** Make your own. Do not copy screenshots or studio material. Then write 6 sentences or fewer.
22. **Keep the resource list as data.** Store it in `data/resources.yml`. Generate the README sections from it. Fields: `name`, `url`, `task`, `level`, `gaffer_version`, `renderer`, `status`, `source_type`.
23. **Run cheap checks first.** Run the scripts (link check, STE lint, duplicate URLs, glossary terms). Then ask a person or a language model to review only what is left.

## Rule priority

Rules can conflict. A long list of requirements makes this more likely. Use this order:

1. Accuracy and safety (rules 14, 17, 19).
2. Glossary terms and UI names (rules 7, 13).
3. Short sentences (rules 1 and 2).
4. All other rules.

Before you add a rule, remove or merge an old one.

## Resource entry format

```
- [Resource Name](https://example.com/) - Short sentence in the active voice. Say what task it helps with.
```

Add a level tag at the start of the description:

- `[Artist]` - no scripting needed.
- `[TD]` - needs Python, expressions, or pipeline knowledge.
- `[Both]` - useful for both.

## Before and after

| Before | After |
|---|---|
| Explains what a scene contains, helping separate node operations from resulting objects and global settings. | Describes the parts of a scene. Shows the difference between nodes, scene objects, and global settings. |
| Learn to inspect the hierarchy, select a camera and target a material assignment. | Open the **Scene Hierarchy**. Find the camera. Select the location that gets the material. |
| Check the requirements for your exact release before installing a renderer or integration. | Before you install a renderer, read the requirements for your Gaffer version. |
| You can keep modelling and animating in Maya, publish geometry or animation, then use Gaffer to assemble a scene, assign materials, light it and render. | You can model and animate in Maya. Publish the geometry or animation from Maya. Then use Gaffer to build the scene, assign materials, add lights, and render. |
| A node graph records the operations; the scene hierarchy shows the objects those operations produce. | The **Node Graph** shows the operations. The **Scene Hierarchy** shows the objects that the operations make. |

## Glossary (draft)

Check each term against the Gaffer 1.7.3.0 documentation before you publish it.

| Term | Meaning |
|---|---|
| Node | A block in the Node Graph. It does one operation. |
| Plug | A connection point or value field on a node. |
| Node Graph | The editor where you connect nodes. |
| Scene | The objects, lights, cameras, and settings that pass between nodes. |
| Scene location | One position in the Scene Hierarchy. Example: `/world/camera`. |
| Scene Hierarchy | The tree of scene locations. |
| Filter | A node that selects scene locations for another node to change. |
| Context | The named values (for example, the frame) that a node reads when it computes. |
| Spreadsheet | A node that holds a table of values. |
| Catalogue | The place where Gaffer keeps rendered images. |
| Renderer | The program that makes an image from the scene. Example: Arnold. |

## Pull request checklist

- [ ] Each sentence follows rules 1 to 6.
- [ ] The entry has a status (rule 19). `Tested` has a record in `docs/test-log.md`.
- [ ] The entry is in `data/resources.yml`, and the README is regenerated.
- [ ] `node scripts/ste-lint.mjs` passes.
- [ ] Each term matches the glossary.
- [ ] The entry has a level tag: `[Artist]`, `[TD]`, or `[Both]`.
- [ ] The entry gives the Gaffer version (and renderer version, if it matters).
- [ ] You opened the source and checked that it does what the entry says.
- [ ] You ran `node scripts/check-links.mjs --local`.
