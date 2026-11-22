# `AGENTS.md` and `README.md`

## Distinct Roles

`AGENTS.md` contains instructions agents must follow in its directory scope and applicable descendants. Use it for work principles, responsibilities, restrictions, and necessary routing. Respect higher-priority instructions and the applicable parent and nested `AGENTS.md` hierarchy. Do not add a conflicting or redundant rule.

`README.md` explains a project or directory to its readers and helps them find relevant material. It may explain human usage, but ordinary README prose does not become a mandatory agent instruction merely because an agent reads it. Keep enforceable agent rules in `AGENTS.md` or another explicitly routed instruction source.

Put extended background and navigation in the README or another owning document when those details would crowd `AGENTS.md`. This does not require moving concise instructions that agents need in the `AGENTS.md` itself.

## Same-Directory Link

When `AGENTS.md` and `README.md` already exist together, link from `AGENTS.md` to `[README](./README.md)` so agents can find the area's explanation and related documents. Do not create a README solely to satisfy this convention. The link supplies context; it does not alter instruction priority.

When editing either file, verify that required instructions remain in their proper scope and that README descriptions have not been promoted into new rules without authorization.
