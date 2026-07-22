# Sprint 5 — First Impressions

## Objective
Clarify the simulation before students enter the DataScope narrative, strengthen the onboarding experience, add searchable section labels, normalize typography, and improve responsive behavior.

## Files in this package

```text
website/index.html
website/assets/css/framework.css
website/assets/css/home.css
docs/CHANGELOG.md
docs/ROADMAP.md
docs/DECISIONS.md
SPRINT-5-README.md
```

## Installation
Extract the ZIP into the root of `datascope-course` and allow it to replace files with the same names.

The package does not change the Railway deployment configuration.

## Development labels
Visible labels are enabled by this class:

```html
<body class="show-section-labels">
```

Before the final release, hide all visible labels by changing it to:

```html
<body>
```

The searchable HTML comments, IDs, and `data-section` values can remain without affecting the visual design.

## Suggested commit

```bash
git add .
git commit -m "Add Sprint 5 homepage refinement"
git push origin main
```

## Acceptance checks
- HOME-00 explains that the course uses a professional simulation.
- HOME-01 introduces DataScope, OSINT, clients, and expected work.
- HOME-00 through HOME-05 are visible and searchable.
- The page uses one font stack.
- Cards become single-column on narrow screens.
- The workflow becomes two columns on tablets and one column on phones.
- Railway builds without any deployment configuration changes.
