# DataScope Academy — Moodle assignment links update

This patch updates **only** the three training lesson HTML files and their shared lesson CSS. It leaves the Academy landing page and Sprints 12/13 unchanged.

## Exercises and Moodle URLs

- TRAIN-A, Exercise 01: https://online.dyellin.ac.il/mod/assign/view.php?id=324641
- TRAIN-B, Exercise 02: https://online.dyellin.ac.il/mod/assign/view.php?id=324642
- TRAIN-C, Exercise 03: https://online.dyellin.ac.il/mod/assign/view.php?id=324643

The exercise links appear on each lesson's last slide, opening Moodle in a new tab.

## Deploy through GitHub and Hetzner

1. Back up or keep the last working commit.
2. In GitHub, replace these paths with the matching files from this patch:
   - `website/training/train-a/index.html`
   - `website/training/train-b/index.html`
   - `website/training/train-c/index.html`
   - `website/assets/css/training-lessons.css`
3. Commit: `Connect Academy exercises 01-03 to Moodle`
4. On Hetzner (Ubuntu), **after the GitHub commit is confirmed**, fetch the latest repository and copy only these four files. Example:

   ```bash
   cd /tmp/datascope-release-13
   git pull --ff-only origin main
   sudo cp website/training/train-a/index.html /var/www/datascope/training/train-a/index.html
   sudo cp website/training/train-b/index.html /var/www/datascope/training/train-b/index.html
   sudo cp website/training/train-c/index.html /var/www/datascope/training/train-c/index.html
   sudo cp website/assets/css/training-lessons.css /var/www/datascope/assets/css/training-lessons.css
   ```

5. Visit `/training/train-a/`, `/training/train-b/`, `/training/train-c/`, click Next until the final slide, and verify each Moodle link. A Moodle login may be required.

No Nginx changes, server restart, or changes to the LibStax service are needed.
