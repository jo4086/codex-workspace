# Feature Modules

Keep UI, hooks, types, and utilities used by one feature inside that feature. Start with a flat module:

```text
features/feature-a/
├── FeatureA.tsx
├── useFeatureA.ts
└── types.ts
```

Split a growing feature by responsibility when its file count or navigation cost warrants it:

```text
features/feature-a/
├── components/
├── hooks/
├── utils/
├── types.ts
└── index.ts      # Only when a public feature entrypoint helps
```

Features need not have identical folder shapes. Promote code to a shared location only after actual cross-feature reuse establishes a common owner. Keep one-off page composition at the page level and reusable behavior with its feature.
