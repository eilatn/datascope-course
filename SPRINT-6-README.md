# Sprint 6 — DataScope Training Academy

## Objective

Redesign the existing two-part introduction as a responsive employee-onboarding experience while preserving its academic content.

## Files

```text
website/
├── index.html
├── academy/index.html
├── training/
│   ├── part-a/index.html
│   ├── part-b/index.html
│   └── completion/index.html
└── assets/
    ├── css/training.css
    └── js/training.js

docs/
├── CHANGELOG-SPRINT-6.md
└── DECISION-ADR-004.md
```

## Install

Extract the ZIP into the root of `datascope-course` and allow matching files to be replaced.

```bash
git add .
git commit -m "Add Sprint 6 DataScope Training Academy"
git push origin main
```

Railway should redeploy automatically.

## Test paths

```text
/academy/
/training/part-a/
/training/part-b/
/training/completion/
```

## Development labels

Labels are visible because each page uses:

```html
<body class="show-section-labels">
```

To hide all visible labels before the final release, remove `show-section-labels` from the body class. HTML comments and section IDs remain searchable in the source.

## Notes

- The Loom video requires internet access and may be blocked by institutional security settings.
- Browser form responses are not stored. Formal submissions still belong in Moodle.
