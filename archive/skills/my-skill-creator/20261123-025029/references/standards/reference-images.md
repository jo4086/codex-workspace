# Reference Images

## When to Add One

Use an image when it makes a Skill rule easier to apply than text alone, such as comparing UI states or showing a boundary in a diagram. Keep the rule itself in Markdown so the guidance remains understandable if the image cannot be displayed. Do not create an image directory in a Skill that has no useful images.

## Placement and Navigation

1. During TBD planning, keep a candidate image beside its owning request and link it from that request when the image is needed to explain the plan. Do not treat a TBD path as a runtime dependency.
2. When implementing the Skill, put the selected image inside that Skill, near the reference that explains it. A `references/<category>/images/` directory is suitable when several images support that category; a single image may sit beside its reference.
3. Link each image from the relevant Markdown reference with a relative path and a short explanation of what it demonstrates. For stateful examples, identify the state in the explanation. Route readers to that Markdown reference through the existing reference index; an image-only directory does not need its own index.
4. Check the links after copying or archiving the Skill by itself. Do not rely on another Skill, a repository-level image folder, or a separate folder under `~/.agents/` for images the Skill needs.

Reference images are instructions or examples for the agent. Reserve `assets/` for files the Skill uses in generated output. Do not move an instructional image into `assets/` merely because it is a bitmap.

## Source and Reuse

For an image obtained outside this repository, record its source and applicable reuse terms next to the link or in a nearby source note. Include it in a distributable Skill only when those terms permit that use; otherwise link to the source or replace it with an original example. Do not copy an image from another Skill without checking its source and rights. If two installed Skills need the same permitted image, keep a copy inside each owning Skill so either one works independently; avoid a shared runtime image path.

## Review Examples

- For `react-ui-style`, a reference about a control's idle and active appearance can link two locally stored images and label which state each depicts. Copying only `react-ui-style/` must preserve both links.
- For `project-architecture-planner`, a boundary diagram can sit beside its planning reference and explain which arrows represent ownership or data flow. Copying only that Skill must preserve the diagram and its explanation.

These are placement checks, not requirements to create images for either Skill.
