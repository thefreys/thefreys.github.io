#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"

find content -type f -name ".hide" > "${xmlsitemap}.hide"
find content -type f -name "markdown.md" > "${xmlsitemap}.md"

today=$(date '+%Y-%m-%d')

echo '<?xml version="1.0" encoding="UTF-8"?>' > "${xmlsitemap}"
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' >> "${xmlsitemap}"
cat "${xmlsitemap}.md" | while read filename; do
    mdstring=${filename:0:-11}
    node="/${filename:0:-12}"
    node=${node:8}
    countHidden=0
    while read hidefile
    do
        if ! [[ "" = "${hidefile}" ]]; then
            hidestring=${hidefile:0:-5}
            if [[ "$mdstring" == "$hidestring"* ]]; then
                ((countHidden++))
            fi
        fi
    done <<< "$(cat "${xmlsitemap}.hide")"
    if [[ "0" == "$countHidden" ]]; then
        gitdate="$(git log -1 --format="%ai" -- "$filename")"
        if [[ "" == "${gitdate}" ]]; then
            lastmod=${today}
        else
            lastmod=${gitdate:0:10}
        fi
        echo "  <url>" >> "${xmlsitemap}"
        echo "    <loc>${xmlsitemapurlprefix}${node}/index.html</loc>" >> "${xmlsitemap}"
        echo "    <lastmod>${lastmod}</lastmod>" >> "${xmlsitemap}"
        echo "  </url>" >> "${xmlsitemap}"
    fi
done
echo '</urlset>' >> "${xmlsitemap}"

rm -f "${xmlsitemap}.hide"
rm -f "${xmlsitemap}.md"