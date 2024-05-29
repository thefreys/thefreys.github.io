#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"

csv_file="${generated_assets_dir}/search.csv"
find "${pages_dir}" -type f -name "search_row.csv" -exec cat {} + > "${csv_file}"
echo "$(date): COMPLETE: ${csv_file}"

datatables_search="${generated_assets_dir}/datatables_search.json.tmpfile"
echo "{\"data\": [" > "${datatables_search}"
countSearchRow=0
# use sed to preserve \ before " within csv column values
sed 's/\\"/\\\\\\"/g' "${csv_file}" | while read search_row; do
    ((countSearchRow++))
    [[ "${countSearchRow}" -gt 1 ]] && echo -n "," >> "${datatables_search}"
    echo -e "[${search_row}]" >> "${datatables_search}"
done
echo "]}" >> "${datatables_search}"

cat "${datatables_search}" > "${generated_assets_dir}/datatables_search.json"
rm -f "${datatables_search}"
echo "$(date): COMPLETE: ${generated_assets_dir}/datatables_search.json"


