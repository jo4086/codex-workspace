# Naming and File Organization

Use the repository's naming and directory conventions first. Check nearby files and configured lint rules before introducing a new pattern.

- Give modules and symbols names that describe their responsibility. Use the project's established casing for files, variables, types, and constants.
- Keep one clear responsibility per module. Split a file when distinct responsibilities need independent use or maintenance; avoid one-file-per-symbol rules.
- Place code with the feature or package that owns it. Move a utility to a shared location only when it has a real cross-feature consumer.
- Keep an existing public name stable unless a requested change includes updating its consumers or migration path.
- Let formatters decide whitespace and punctuation they already enforce. Do not restate their settings as a competing style guide.
