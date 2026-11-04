# General Reference Index

## Purpose

Route language-independent code organization and boundary decisions.

## References

| Reference | Responsibility | When to Read |
| --- | --- | --- |
| [naming.md](naming.md) | Names, file placement, and formatting ownership | Naming or organizing code |
| [imports.md](imports.md) | Import paths, aliases, and resolution | Adding or changing imports or aliases |
| [module-boundaries.md](module-boundaries.md) | Private modules and package public APIs | Changing exports or cross-package dependencies |
| [error-handling.md](error-handling.md) | Failure handling and error contracts | Adding or changing failure paths |

## Usage

Read only the references relevant to the change. Combine imports and module boundaries when a path change affects what consumers can access.
