# REQUEST02 — Reference Images for Managed Skills

- **Requested:** 2026-11-18
- **Status:** Implemented and validated
- **Target:** Existing [`my-skill-creator` Skill](../../../skills/my-skill-creator/SKILL.md)

## Purpose

Plan a reusable convention for images that help agents understand a Skill's guidance, such as visual examples of UI states. The convention should work for `react-ui-style` and other managed Skills without creating a separate image-management Skill.

## Confirmed Requirements

- [x] Add guidance to `my-skill-creator` for organizing supplemental reference images across managed Skills when such images are useful.
- [x] Keep reference images with the Skill guidance they support so a copied or archived Skill retains its usable references. Do not depend on a separate image folder under `~/.agents/`.
- [x] Distinguish images used as instructions or examples from `assets/` files used in generated output.
- [x] Make the relevant Markdown reference point to and explain its images; avoid unindexed image collections and unnecessary placeholder folders.

## Proposed Structure and Workflow

- During TBD planning, keep candidate images near the request, for example under `TBD/skills/<name>/reference-images/<topic>/`, and link them from the numbered request when they are added.
- During implementation, place selected images inside the owning Skill, near the reference that uses them, for example under `skills/<name>/references/<category>/images/`. The Skill's reference document should explain what each image demonstrates and link to it with a relative path.
- Treat an image-only folder as supporting material for its owning reference, not as a new guidance category solely because it contains files. Keep the existing reference indexes focused on documents that route the agent to the images.
- Add images only when they clarify a distinction that text alone does not convey well. For stateful UI examples, identify the state shown by each image rather than relying on filenames alone.

These paths are proposed conventions, not required directories for every Skill.

## Implementation Decisions

- Record the source and reuse terms beside an externally obtained image link or in a nearby source note. Include it in a distributable Skill only when those terms permit reuse.
- Keep a permitted copy inside each Skill that needs the same image, so each installed Skill remains self-contained.

## Completion Evidence

- [x] [Reference Images](../../../skills/my-skill-creator/references/standards/reference-images.md) explains placement, linking, image purpose, source rights, and self-contained copies without requiring empty folders.
- [x] Reviewed an idle/active visual-state example for `react-ui-style` and a boundary diagram for `project-architecture-planner`: each image sits inside its owning Skill and is linked by a local reference, so copying only that Skill preserves the route. These are documentation scenarios; no image was added to either Skill.
- [x] `quick_validate.py skills/my-skill-creator`, four-Skill reference/link/LF checks, and `git diff --check` passed on 2026-11-18.

Implementation owner: `my-skill-creator`. This request plans the convention only; Skill implementation and synchronization are separate work.
