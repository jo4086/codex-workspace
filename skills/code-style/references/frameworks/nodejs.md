# Node.js Code Organization

- Check the supported Node.js version, package module type, build output, and runtime entry points before changing syntax or import paths.
- Keep transport or command handlers separate from reusable application logic when doing so supports an actual consumer or test boundary.
- Parse and validate process environment, command-line arguments, and request data at their boundaries.
- Propagate failures through the project's established async and error handling path; release resources in cleanup paths.
- For shared packages, keep private `imports` mappings and public `exports` compatible with the supported Node.js runtime and generated files.

Use the general import and module-boundary references for alias syntax and public API decisions.
