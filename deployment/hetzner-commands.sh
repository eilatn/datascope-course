#!/bin/sh
# Run on the existing Hetzner server after GitHub contains Sprint 13.
# This touches only /var/www/datascope/government (not LibStax or Nginx).
set -eu
cd /tmp/datascope-check
git pull --ff-only origin main
test -f website/government/index.html
test -f website/government/statistics/index.html
test -f website/government/designs/index.html
test -f website/government/guidestar/index.html
mkdir -p /var/www/datascope/government
cp -a website/government/. /var/www/datascope/government/
for p in index.html statistics/index.html designs/index.html guidestar/index.html style.css; do
    test -f "/var/www/datascope/government/$p"
done
printf 'Sprint 13 government files copied. Check https://datascope.library-admin.com/government/\n'
