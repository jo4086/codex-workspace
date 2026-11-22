# Navigation and Links

## Placement

Choose the shortest clear path from an existing entry point to each document. Create an intermediate README when it organizes multiple directly owned documents, combines direct documents with child categories, or adds useful context or reading guidance. Skip one that only forwards a single link or repeats a parent index.

Examples for a project with `docs/`:

- With `docs/architecture.md` and `docs/workflow.md`, a `docs/README.md` can index the directly owned files.
- With only `docs/foundations/README.md` and its category documents, the project README can link straight to the category README; `docs/README.md` is optional.
- With `docs/overview.md` plus `docs/foundations/`, a `docs/README.md` can bring the direct file and category together.
- With only `docs/architecture.md`, the project README can link directly to the file.

These are placement examples, not required layouts. A project or specialized Skill may require a particular index; keep that index even when a shorter route seems possible.

## Link Maintenance

- Use relative Markdown links for local documents and briefly describe the role of each navigational target. A target in the current directory or a child directory must start with `./`, such as `./guide.md` or `./docs/guide.md`; `guide.md` and `docs/guide.md` are not allowed as link targets. Use `../` for a parent directory.
- Link to files that exist. Identify planned files as plans rather than presenting them as valid targets.
- When adding, deleting, moving, renaming, or splitting a document, inspect and update its incoming links and affected indexes. Make each maintained index reflect the files and areas it routes to.
- Give readers a way to select task-relevant documents without traversing unnecessary README pages or loading every reference.
- Check links from the source file's directory after editing, including the required `./` on current-directory and child-directory targets; inspect both direct targets and the paths readers use to reach them.
