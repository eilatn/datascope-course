# DataScope — Sprint 13: Unit 2 · מידע ממשלתי

**Status:** Approved by instructor, ready for GitHub and Hetzner deployment. **Not published by this package.**

## Included
- `website/government/index.html` — introduction to government information
- `website/government/statistics/index.html` — 2א, הלשכה המרכזית לסטטיסטיקה
- `website/government/designs/index.html` — 2ב, מאגרי עיצובים וסימני מסחר
- `website/government/guidestar/index.html` — 2ג, גיידסטאר
- `website/government/style.css` — unit-local muted-plum theme (#76486C)
- `website/government/assets/datascope-eye.png` — local brand logo asset

## Moodle links
- 2א — https://online.dyellin.ac.il/mod/assign/view.php?id=327908
- 2ב — https://online.dyellin.ac.il/mod/assign/view.php?id=327909
- 2ג — https://online.dyellin.ac.il/mod/assign/view.php?id=327910

## Installation (safe sequence)

1. Download and extract the ZIP onto your Windows computer.
2. Copy **only** the extracted `website/government/` directory into the `website/` directory of your `eilatn/datascope-course` GitHub checkout. **Do not delete or replace other site directories.**
3. Commit and push to GitHub. If you already have a local Git checkout, the commands in that repository are:

   ```powershell
   git add website/government
   git commit -m "Sprint 13: government information unit"
   git push origin main
   ```

4. Connect the existing Academy/course hub to the new unit, using `integration/academy-card-example.html` as an **example** rather than replacing the hub. Add one link labeled `יחידה 2 · מידע ממשלתי` pointing to `/government/`. Commit that change too. Optionally place a forward link from the previous business unit's last page.
5. SSH into your Hetzner server from Windows PowerShell:

   ```powershell
   ssh -i "$HOME\.ssh\id_ed25519" root@178.105.138.103
   ```

6. On the server, use the commands in `deployment/hetzner-commands.sh` **after** the GitHub push. This copies only the new `/government/` folder. If you changed the Academy hub in GitHub, deploy that approved file separately as well. Your LibStax service is not touched.
7. Check `https://datascope.library-admin.com/government/` and navigate through 2א, 2ב, and 2ג. Test Moodle links while logged into Moodle.

## Design and content choices
- Consistent Hebrew DataScope masthead, logo, centered course title, and home button.
- Preserved Sprint 11 / 12 compact reading layout and previous/next links.
- Muted plum (#76486C) is unique to this section; earlier navy/teal units remain unchanged.
- Instructor's four Word documents are the text authority: headings, lists, bold emphasis and tables retained, and no assignment instructions invented.

## Safety and dependencies
- Existing links in this unit point to `website/index.html`, `website/academy/index.html`, and `website/business/index.html`. Verify those locations exist in your live deployment. If Sprint 12 is not yet published, the "previous unit" link will lead to a missing page until it is deployed.
- The package does not include or overwrite the site homepage, Academy, business unit, LibStax or Nginx configuration.
- External Moodle URLs were provided by the instructor; student permissions/login were not verified.
