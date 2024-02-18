Each content item (node) is represented by a directory and a few key files within it.

- markdown.md: This is the primary content file. Only nodes containing this file will be included in navigation elements and the sitemap.
- html.html: In some cases, you may want to include more complex content using HTML after a markdown introduction.
- javascript.js: When you include an html.html file, you may also want to enhance it with JavaScript.
- _title.txt: If included, the content of this file will be used as the page title and as the label for this node in navigation elements and the sitemap. It will also be used in the site search. If not included, the directory name will be used instead.
- _tags.txt: If included, the site will use the list of tags (one per line) in the site search and in tag based navigation elements.
- .hide: The presence of this file will suppress the node and all child nodes (directories within a node) from showing in navigation elements and the sitemap.