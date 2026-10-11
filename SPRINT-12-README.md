# DataScope Sprint 12 — Revised (Word formatting preserved)

Four static Hebrew/RTL pages. Content is taken from the FOUR updated Word documents supplied by the course author (2026-10-10), **not** the earlier TXT/PDF extracts. No instructional text has been intentionally rewritten or abridged.

## Preview locally
1. Extract the ZIP on your computer.
2. Open `website/business/index.html` in Chrome or Edge.
3. Use the four page navigation links to check all pages. The Moodle assignment links will open Moodle, which may ask you to sign in.

## Deployment (preserve Sprint 11)
1. In your GitHub `datascope-course` repository, merge ONLY the new `website/business/` directory into the existing `website/` directory. Do **not** replace the root `website/index.html` or any other Sprint 11 content.
2. Commit the changes to `main`.
3. On Hetzner, follow your manual pull/copy workflow (`git pull` in `/tmp/datascope-check`, then `cp -a /tmp/datascope-check/website/. /var/www/datascope/`). **Do not touch the LibStax service or Nginx configuration.**
4. View `https://datascope.library-admin.com/business/` and check all three Moodle buttons.
5. If desired, add a link to `/business/` on the existing course home page (this ZIP deliberately does not alter the earlier homepage).

## Moodle assignment links (now live in the HTML)
- 1א · מודעות דרושים — https://online.dyellin.ac.il/mod/assign/view.php?id=325517
- 1ב · המלצה על כנס — https://online.dyellin.ac.il/mod/assign/view.php?id=325518
- 1ג · פרופיל חברה — https://online.dyellin.ac.il/mod/assign/view.php?id=325519

## Formatting rules applied
- Word paragraph breaks and manual line breaks distinguish text blocks; true bullets become `<ul><li>` and never `<h1>`/`<h2>`.
- Word Heading 2 becomes HTML `<h2>`; source bold numbered conference labels become compact `<h3>`.
- Word inline bold is preserved using `<strong>`; three numbered company-profile rules become a semantic `<ol>`.
- Both conference tables and both company-profile tables are included in their original sequence.
- The conference optional extension is in `<details>` (collapsed); core teaching content remains visible.
- Source hyperlinks embedded in the conference Word file are retained.
- CSS is scoped to `website/business/` and does not alter Sprint 11.

## Editorial note
Text from Word was preserved **as written**, including apparent typos such as `השתתפות בכנס השקעת משאבים` and `חברת דן אנד ברדסטריט מוכרות`. Please edit the Word source and request regeneration if you want these corrected; they have not been silently changed.
