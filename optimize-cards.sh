#!/bin/bash
# Turn the card PNGs into web-sized JPEGs.
#
# The PNGs are ~1MB each and the phone downloads every one of them; the JPEGs
# land around 300KB with no visible difference at card size. The PNGs stay put
# as the originals — only the JPEGs are served.
#
# Run it after dropping a new PNG into cards/. Cards already converted are
# skipped unless the PNG is newer, so re-running is cheap.
#
#   ./optimize-cards.sh              # quality 85
#   QUALITY=95 ./optimize-cards.sh   # bigger files, if 85 ever looks soft
#
# ponytail: sips is built into macOS, so there is nothing to install. On a
# non-Mac box, swap the sips line for: cwebp -q "$QUALITY" "$png" -o "$jpg"
set -euo pipefail

QUALITY=${QUALITY:-85}
cd "$(dirname "$0")/cards"

converted=0
for png in *.png; do
  [ -e "$png" ] || continue
  jpg="${png%.png}.jpg"

  if [ -e "$jpg" ] && [ "$jpg" -nt "$png" ]; then
    continue
  fi

  sips -s format jpeg -s formatOptions "$QUALITY" "$png" --out "$jpg" >/dev/null
  echo "  $jpg"
  converted=$((converted + 1))
done

echo
echo "converted $converted card(s) at quality $QUALITY"
echo "  png total: $(du -ch ./*.png 2>/dev/null | tail -1 | cut -f1)"
echo "  jpg total: $(du -ch ./*.jpg 2>/dev/null | tail -1 | cut -f1)"
