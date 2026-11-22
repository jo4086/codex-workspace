# Child Area Planning

## When to Use

Use this process when implementation first enters an application, package, service, feature, or other child area whose internal responsibilities and boundaries have not been established. Revisit it when new work materially changes those boundaries. An isolated file edit within an established area does not need a new architecture discussion.

## Planning Conversation

1. Read the parent area's agreed role, applicable instructions, nearby code, and existing structure. State the child area's purpose and its boundary with siblings.
2. Map incoming and outgoing interactions before choosing folders: callers, dependencies, data flow, shared contracts, external services, and ownership of each connection.
3. Separate the child area's meaningful responsibilities, including essential roles implied by the requested work. Present new roles as proposals and discuss consequential choices with the user.
4. Draw a role-based internal tree and explain which work belongs in each directory. Recurse into a subarea only when it has multiple meaningful responsibilities or an unresolved boundary.
5. Use the reviewed tree for implementation and file placement. If implementation reveals a real missing responsibility or changed interaction, revisit the affected level and update its plan.

## Backend Example

For new work in `apps/<app>/backend`, first identify the backend's callers, its shared contracts with the frontend or other packages, persistence or external integrations, and who owns each interface. Then identify the backend's actual roles and propose directories for those roles. A tree might separate request entrypoints, domain behavior, persistence adapters, and external integrations when all are needed; the names and layers must follow the project's stack and agreed responsibilities. Plan a deeper area only when one of these roles contains meaningful internal boundaries.

## Review Criteria

- Each role has a clear owner and the proposed tree matches the parent's architecture.
- Cross-boundary dependencies and contracts have an owner.
- The area is decomposed enough to avoid a catch-all, without speculative folders or placeholder files.
