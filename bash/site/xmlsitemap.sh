#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"

find "${content_dir}" -type f -name ".hide" > "${xmlsitemapfile}.hide"
find "${content_dir}" -type f -name "markdown.md" > "${xmlsitemapfile}.md"

today=$(date '+%Y-%m-%d')

echo '<?xml version="1.0" encoding="UTF-8"?>' > "${xmlsitemapfile}"
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' >> "${xmlsitemapfile}"
cat "${xmlsitemapfile}.md" | while read filename; do
    mdstring=${filename:0:-11}
    node="/${filename:0:-12}"
    node=${node:${#content_dir}}
    countHidden=0
    while read hidefile
    do
        if ! [[ "" = "${hidefile}" ]]; then
            hidestring=${hidefile:0:-5}
            if [[ "$mdstring" == "$hidestring"* ]]; then
                ((countHidden++))
            fi
        fi
    done <<< "$(cat "${xmlsitemapfile}.hide")"
    if [[ "0" == "$countHidden" ]]; then
        gitdate="$(git log -1 --format="%ai" -- "$filename")"
        if [[ "" == "${gitdate}" ]]; then
            lastmod=${today}
        else
            lastmod=${gitdate:0:10}
        fi
        echo "  <url>" >> "${xmlsitemapfile}"
        echo "    <loc>${xmlsitemapurlprefix}${node}/index.html</loc>" >> "${xmlsitemapfile}"
        echo "    <lastmod>${lastmod}</lastmod>" >> "${xmlsitemapfile}"
        echo "  </url>" >> "${xmlsitemapfile}"
    fi
done
echo '</urlset>' >> "${xmlsitemapfile}"

rm -f "${xmlsitemapfile}.hide"
rm -f "${xmlsitemapfile}.md"