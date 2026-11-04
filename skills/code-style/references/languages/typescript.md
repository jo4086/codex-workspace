# TypeScript

- Inspect the project's `tsconfig.json`, lint rules, and nearby code before choosing a pattern.
- Prefer types that describe the actual input and output contract. Use inference for clear local values and explicit types where a public boundary or complex return shape benefits from them.
- Narrow `unknown` and nullable values before use. Avoid `any` and unchecked assertions unless a boundary cannot be expressed safely; document the reason when an exception is necessary.
- Model meaningful alternatives with unions or discriminated unions so callers can handle them exhaustively.
- Preserve existing exported type contracts when changing implementation details.
- Validate external data at runtime; a TypeScript annotation does not validate JSON, environment variables, or network input.
- Use the project's configured compiler and type check to verify changed contracts.
