# Error Handling

- Follow the project's established error types, result conventions, logging, and recovery boundaries.
- Handle errors where the caller can add context or take a meaningful action. Preserve the original cause when wrapping an error.
- Do not silently swallow failures or turn an unexpected failure into a success-shaped value.
- Validate untrusted input at the boundary before relying on its shape. Keep internal invariants explicit.
- Use a typed error or discriminated result when callers need to distinguish expected failure cases. Avoid a new error abstraction for a single local case.
- Do not expose secrets or unnecessary internal details in user-facing error messages or logs.
