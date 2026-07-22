# Project Decisions

## ADR-001 — External learning website
Learning content is published as a dedicated website. Moodle remains responsible for authentication, announcements, quizzes, submissions, and grades.

## ADR-002 — Professional simulation
Students work as junior information professionals in the fictional company DataScope. Each unit is framed as a client assignment.

## ADR-003 — Stable section identifiers
Homepage sections use stable identifiers such as `HOME-00` and `HOME-03` in HTML comments, element IDs, and `data-section` attributes. Visible development labels may be removed before final release.

## ADR-004 — Typography
The website uses one Hebrew-friendly system sans-serif font stack. Visual hierarchy is created through size and weight rather than unrelated font families.

## ADR-005 — Responsive baseline
Core page layouts must work at desktop, tablet, and phone widths without horizontal page scrolling.
