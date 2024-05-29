#!/bin/bash
source "$(dirname ${BASH_SOURCE[0]})/config.sh"

echo "$(date): Generating ${xmlsitemapfile}"
find "${pages_dir}" -type f -name "sitemap_url.xml" > "${xmlsitemapfile}.urls"
echo '<?xml version="1.0" encoding="UTF-8"?>' > "${xmlsitemapfile}"
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' >> "${xmlsitemapfile}"
find "${pages_dir}" -type f -name "sitemap_row.xml" -exec cat {} + >> "${xmlsitemapfile}"
echo '</urlset>' >> "${xmlsitemapfile}"
if ! [[ "" == "${xmlsitemapfilecopy}" ]]; then
    if ! [[ "${xmlsitemapfile}" == "${xmlsitemapfilecopy}" ]]; then
        cat "${xmlsitemapfile}" > "${xmlsitemapfilecopy}"
    fi
fi
echo "$(date): COMPLETE: ${xmlsitemapfile}"
