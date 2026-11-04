# JavaScript

- Follow the project's module format, supported runtime, lint rules, and nearby syntax conventions.
- Make input and output contracts clear through names and focused functions. Add JSDoc where the project uses it or where a public JavaScript API would otherwise be ambiguous.
- Check values received from files, environment variables, network calls, and other untrusted boundaries before use.
- Use the project's existing async and error handling conventions; ensure rejected promises reach a caller that can handle them.
- Keep module exports intentional and stable. Use the package's declared public entry points for cross-package imports.
- Run the relevant lint, test, or JavaScript type-check command when available.
