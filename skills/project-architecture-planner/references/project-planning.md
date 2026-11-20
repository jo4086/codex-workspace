# New Project Planning

## When to Use

Use this process before implementing a new project's initial structure. Start with the user's product intent and constraints, then inspect any existing repository conventions, applications, packages, integrations, and instructions.

## Planning Conversation

1. Summarize the intended product, primary users or consumers, major capabilities, and known constraints. Ask for missing information only when it changes a consequential architectural choice.
2. Propose a high-level responsibility map. Include essential roles implied by the product, even when the user did not name them. Explain why each proposed role exists and distinguish confirmed needs from suggestions.
3. Identify how responsibilities interact: dependencies, data movement, shared contracts, external systems, and the owner of each connection. Surface choices such as ownership or service boundaries for discussion before treating them as settled.
4. Present the smallest useful project-level directory tree with one clear owner for each agreed responsibility. Explain important boundaries and how anticipated work will be placed.
5. Review the map and tree with the user before implementation. A conversational plan can precede a file. When saving the reviewed result as the first durable project document, place it under `<project>/docs/`; continue later project-wide planning documents there. Put substantial initial scope and acceptance criteria in `docs/REQUIREMENTS/` following `workspace-unit-doc-manager`.

## Review Criteria

- Every agreed responsibility has an owner; no directory is a catch-all for unrelated roles.
- Every significant cross-boundary interaction has an identified contract or coordination point.
- Current roles and possible future roles are distinguishable. A future role can appear in the plan without creating an empty directory.
- The tree follows existing repository conventions and does not imply an unapproved framework, dependency, service, or deployment choice.

Do not create directories merely to reproduce the drawing. Create the owning `docs/` directory when the first durable document is written; create other agreed directories as authorized work reaches them and the repository can use them. Preserve an existing project's established document paths unless migration is separately authorized.
