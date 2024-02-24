// JavaScript file for index one page site
import { siteConfig } from '../../config/index/js/index.js';
import { nodes } from '../../config/index/js/generated/nodes.js';
import { markdownNodes } from '../../config/index/js/generated/markdownNodes.js';
import { htmlNodes } from '../../config/index/js/generated/htmlNodes.js';
import { javascriptNodes } from '../../config/index/js/generated/javascriptNodes.js';
import { cssNodes } from '../../config/index/js/generated/cssNodes.js';
import { hiddenNodes } from '../../config/index/js/generated/hiddenNodes.js';
import { titledNodes } from '../../config/index/js/generated/titledNodes.js';
import { taggedNodes } from '../../config/index/js/generated/taggedNodes.js';
import { contentNodes } from '../../config/index/js/generated/contentNodes.js';
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js';
// individually load additional languages
// import go from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/languages/go.min.js';
// hljs.registerLanguage('go', go);
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
  //document.getElementById('content').innerHTML = marked.parse('# Marked in the browser\n\nRendered by **marked**.');

var request = {};

var templateMenuItem = `
  <li class="nav-item"><a class="nav-link" href="{{href}}">{{navLabel}}</a></li>`;
var templateMenuItemWithChildren = `<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
{{navLabel}}</a><ul class="dropdown-menu">{{children}}
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="{{href}}">All {{navLabel}}</a></li>
</ul>
</li>`;
var templateMenuItemChild = `
  <li><a class="dropdown-item" href="{{href}}">{{navLabel}}</a></li>`;
var breadcrumbItemTemplate = `<li class="breadcrumb-item"><a href="{{href}}">{{navLabel}}</a></li>`;
var breadcrumbItemCurrentTemplate = `<li class="breadcrumb-item active" aria-current="page">{{navLabel}}</li>`;

export function getQueryParams() {
    var queryParams = {};
    var queryString = window.location.search.substring(1); // Remove the '?' at the start
    var params = queryString.split("&");
    for (var i = 0; i < params.length; i++) {
        var pair = params[i].split("=");
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1] || "");
        queryParams[key] = value;
    }
    return queryParams;
}

function buildSiteMapItems(items, parent, level=0) {
    var i = 0;
    parent.classList.add('sitemap-level-'+level);
    for (const key in items) {
        i++;
        var item = contentNodes[items[key]];
        // do not show this node or go deeper when .hide is found
        if (hiddenNodes.includes(items[key])) {
            continue;
        }
        // do not show this node or go deeper when there will never be content files to show
        var markdownCount = markdownNodes.filter(str => str.startsWith(items[key])).length;
        var htmlCount = htmlNodes.filter(str => str.startsWith(items[key])).length;
        var javascriptCount = javascriptNodes.filter(str => str.startsWith(items[key])).length;
        if (0 == markdownCount + htmlCount + javascriptCount) {
            continue;
        }
        var li = document.createElement("li");
        li.classList.add('sitemap-level-'+level);
        var a = document.createElement("a");
        a.textContent = item.navLabel;
        a.setAttribute("href", 'index.html?node=' + items[key]);
        a.classList.add('sitemap-level-'+level);
        li.appendChild(a);
        if (item.children.length > 0) {
            var ul = document.createElement("ul");
            buildSiteMapItems(item.children, ul, level + 1);
            li.appendChild(ul);
        }
        parent.appendChild(li);
    }
}

function buildSiteMap(parent) {
    if (parent === null || parent === undefined) {
        return;
    }
    var ul = document.createElement("ul");
    buildSiteMapItems(contentNodes['/'].children, ul);
    parent.appendChild(ul);
}

function buildAreaMap(parent) {
    if (request.node == '/404' && typeof contentNodes[request.node] === 'undefined') {
        return;
    }
    if (parent === null || parent === undefined) {
        return;
    }
    var ul = document.createElement("ul");
    buildSiteMapItems(contentNodes[request.node].children, ul);
    parent.appendChild(ul);
}

function buildBreadcrumbs() {
    if (request.node == '/404' && typeof contentNodes[request.node] === 'undefined') {
        return;
    }
    var breadcrumbs = '';
    var breadcrumbItem = breadcrumbItemTemplate;
    breadcrumbItem = breadcrumbItem.replace(/{{navLabel}}/g, 'Home');
    breadcrumbItem = breadcrumbItem.replace(/{{href}}/g, 'index.html?node=/');
    breadcrumbs = breadcrumbs + breadcrumbItem;
    for (var i = 0; i < request.breadcrumbs.length; i++) {
        var breadcrumbItem = breadcrumbItemTemplate;
        var breadcrumbPath = request.breadcrumbs[i];
        var sitemapItem = contentNodes[breadcrumbPath];
        breadcrumbItem = breadcrumbItem.replace(/{{navLabel}}/g, sitemapItem.navLabel);
        breadcrumbItem = breadcrumbItem.replace(/{{href}}/g, 'index.html?node=' + breadcrumbPath);
        breadcrumbs = breadcrumbs + breadcrumbItem;
    }
    var breadcrumbItem = breadcrumbItemCurrentTemplate;
    var sitemapItem = contentNodes[request.node];
    breadcrumbItem = breadcrumbItem.replace(/{{navLabel}}/g, sitemapItem.navLabel);
    breadcrumbItem = breadcrumbItem.replace(/{{href}}/g, 'index.html?node=' + request.node);
    breadcrumbs = breadcrumbs + breadcrumbItem;
    document.getElementById('breadcrumbs').innerHTML = breadcrumbs;
}

function buildMenu() {
    var menu = '';
    for (var i = 0; i < siteConfig.hamburgerLevelOneItems.length; i++) {
        var level1 = siteConfig.hamburgerLevelOneItems[i];
        var menuItem = templateMenuItem;
        if ('Sitemap' == level1){
            menuItem = menuItem.replace(/{{navLabel}}/g, level1);
            menuItem = menuItem.replace(/{{href}}/g, 'index.html?node=' + level1);
            menu = menu + menuItem;
            continue;
        }
        var sitemapItem = contentNodes[level1];
        if (sitemapItem.children.length > 0) {
            var menuItem = templateMenuItemWithChildren;
        }
        menuItem = menuItem.replace(/{{navLabel}}/g, sitemapItem.navLabel);
        menuItem = menuItem.replace(/{{href}}/g, 'index.html?node=' + siteConfig.hamburgerLevelOneItems[i]);
        var menuItemChildren = '';
        for (var j = 0; j < sitemapItem.children.length; j++) {
            var menuChildItem = templateMenuItemChild;
            var sitemapChildItem = contentNodes[sitemapItem.children[j]];
            menuChildItem = menuChildItem.replace(/{{navLabel}}/g, sitemapChildItem.navLabel);
            menuChildItem = menuChildItem.replace(/{{href}}/g, 'index.html?node=' + sitemapItem.children[j]);
            menuItemChildren = menuItemChildren + menuChildItem;
        }
        menuItem = menuItem.replace(/{{children}}/g, menuItemChildren);
        menu = menu + menuItem;
    }
    document.getElementById('navbarSupportedContentUl').innerHTML = menu;
}

function buildAfterContentLoaded() {
    buildMenu();
    buildBreadcrumbs();
    buildSiteMap(document.getElementById("site-map"));
    if (document.getElementById("area-map")) {
        buildAreaMap(document.getElementById("area-map"));
    }
    var spans = document.querySelectorAll('span.site-name');
    spans.forEach(function (span) {
        span.textContent = siteConfig.siteName;
    });
    hljs.highlightAll();
}

function updateExternalLinkTarget(parentContainerSelector) {
    var links = document.querySelectorAll(parentContainerSelector+' a');
            
    // Check each link and update the target for external links
    links.forEach(function(link) {
        console.log(link);
        var href = link.getAttribute('href');

        // Check if the link is external (starts with http://, https://, or is an absolute URL)
        if (href && (href.startsWith('http://') || href.startsWith('https://') || new URL(href, window.location.origin).host !== window.location.host)) {
            link.setAttribute('target', '_blank');
            // Optionally, you can also add rel="noopener noreferrer" for security reasons
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

function watchElementForChanges(elemId, callback) {
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                callback();
            }
        }
    });
    const targetElement = document.getElementById(elemId);
    observer.observe(targetElement, { childList: true });
    // To stop observing later:
    // observer.disconnect();
}

watchElementForChanges('nodeHtml', () => {
    buildAfterContentLoaded();
    updateExternalLinkTarget('#nodeHtml');
});

watchElementForChanges('nodeMarkdown', () => {
    buildAfterContentLoaded();
    updateExternalLinkTarget('#nodeMarkdown');
});

watchElementForChanges('nodeJavascript', () => {
});

export function init() {
    // determine the content requested
    request.queryParams = getQueryParams();
    if (typeof request.queryParams['node'] === 'undefined') {
        window.location.href = 'index.html?node=/';
        return;
    }
    request.node = request.queryParams['node'];
    if (request.node == '') {
        request.node = '/';
    }
    request.breadcrumbs = [];
    request.filename = request.node
    request.parentPath = '/';
    if (request.node != '/' && request.node.endsWith('/')) {
        request.node = request.node.slice(0, -1);
    }
    if (request.node != '/') {
        request.nodeParts = request.node.substring(1).split('/');
        if (request.nodeParts.length > 1) {
            request.filename = request.nodeParts.pop();
            request.parentPath = request.nodeParts.join('/');
            for (var i = request.nodeParts.length - 1; i >= 0; i--) {
                request.breadcrumbs.push('/' + request.nodeParts.join('/'));
                request.nodeParts.pop();
            }
        }
    }
    request.breadcrumbs = request.breadcrumbs.reverse();

    if (request.node == '/404' && typeof contentNodes[request.node] === 'undefined') {
        document.title = 'Page not found (/404)';
        document.getElementById('nodeHtml').innerHTML = '<h1>404 Not Found</h1><p>Page not found</p>';
        return;
    }
    else if (typeof contentNodes[request.node] === 'undefined') {
        document.title = 'Page not found ('+request.node+')';
        window.location.href = 'index.html?node=/404&reason=no-path&x2=' + request.node;
        return;
    }

    if (!(markdownNodes.includes(request.node)) &&
        !(htmlNodes.includes(request.node)) &&
        !(javascriptNodes.includes(request.node))) {
        if (request.node == '/404') {
            document.title = 'Page not found, but node exists (/404)';
            document.getElementById('nodeHtml').innerHTML = '<h1>404 Not Found</h1><p>Page not found</p>';
            return;
        }
        if (typeof contentNodes[request.node]['title'] === 'undefined'){
            document.title = 'Explore ' + contentNodes[request.node].navLabel + ' (' + request.node + ')';
        }
        else{
            document.title = 'Explore ' + contentNodes[request.node].title + ' (' + request.node + ')';
        }
        document.getElementById('nodeHtml').innerHTML = '<h1>Explore</h1></div>';
        return;
    }

    if (typeof contentNodes[request.node]['title'] === 'undefined'){
        document.title = contentNodes[request.node].navLabel + ' (' + request.node + ')';
    }
    else{
        document.title = contentNodes[request.node].title + ' (' + request.node + ')';
    }
    // fetch content files
    request.nodeMarkdown404 = false;
    request.nodeHtml404 = false;
    request.nodeJavascript404 = false;
    request.nodeCss404 = false;

    request.nodeMarkdownPath = null;
    request.nodeHtmlPath = null;
    request.nodeJavascriptPath = null;
    request.nodeCssPath = null;

    if (markdownNodes.includes(request.node)) { request.nodeMarkdownPath = siteConfig.contentPathPrefix + request.node + '/markdown.md' }
    if (htmlNodes.includes(request.node)) { request.nodeHtmlPath = siteConfig.contentPathPrefix + request.node + '/html.html' }
    if (javascriptNodes.includes(request.node)) { request.nodeJavascriptPath = siteConfig.contentPathPrefix + request.node + '/javascript.js' }
    if (cssNodes.includes(request.node)) { request.nodeCssPath = siteConfig.contentPathPrefix + request.node + '/css.css' }

    // use promises to make sure the fetching completes
    var promises = [];

    // fetch the markdown if it we have a path for it
    if (request.nodeMarkdownPath == null) {
        request.nodeMarkdown404 = true;
    }
    else {
        var nodeMarkdownPromise;
        promises.push(nodeMarkdownPromise);
        nodeMarkdownPromise = fetch(request.nodeMarkdownPath)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        request.nodeMarkdown404 = true;
                        return;
                    }
                    if (!response.ok) {
                        throw new Error('Network response was not ok: ' + response.statusText);
                    }
                }
                return response.text();
            })
            .then(markdown => {
                if (markdown > '') {
                    var mdHtml = marked.parse(markdown).replace(/<table>/g, '<table class="table table-hover  table-bordered">');
                    document.getElementById('nodeMarkdown').innerHTML = mdHtml;
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    // fetch the html if it we have a path for it
    if (request.nodeHtmlPath == null) {
        request.nodeHtml404 = true;
    }
    else {
        var nodeHtmlPromise;
        promises.push(nodeHtmlPromise);
        nodeHtmlPromise = fetch(request.nodeHtmlPath)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        request.nodeHtml404 = true;
                        return;
                    }
                    if (!response.ok) {
                        throw new Error('Network response was not ok: ' + response.statusText);
                    }
                }
                return response.text();
            })
            .then(html => {
                if (html > '') {
                    document.getElementById('nodeHtml').innerHTML = html;
                }
            })
            .catch(error => {
                console.error('fetch/catch error:', error);
            });
    }

    // fetch the javascript if it we have a path for it
    if (request.nodeJavascriptPath == null) {
        request.nodeJavascript404 = true;
    }
    else {
        var nodeJavascriptPromise;
        promises.push(nodeJavascriptPromise);
        nodeJavascriptPromise = fetch(request.nodeJavascriptPath)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        request.nodeJavascript404 = true;
                        return;
                    }
                    if (!response.ok) {
                        throw new Error('Network response was not ok: ' + response.statusText);
                    }
                }
                return response.text();
            })
            .then(js => {
                if (js > '') {
                    var linkDate = new Date().toISOString().replace(/:/g, '').replace(/ /g, '').replace(/-/g, '');
                    document.getElementById('nodeJavascript').src = request.nodeJavascriptPath + '?date=' + linkDate;
                }
            })
            .catch(error => {
                console.error('fetch/catch error:', error);
            });
    }
    
    // fetch the css if it we have a path for it
    if (request.nodeCssPath == null) {
        request.nodeCss404 = true;
    }
    else {
        var nodeCssPromise;
        promises.push(nodeCssPromise);
        nodeCssPromise = fetch(request.nodeCssPath)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        request.nodeCss404 = true;
                        return;
                    }
                    if (!response.ok) {
                        throw new Error('Network response was not ok: ' + response.statusText);
                    }
                }
                return response.text();
            })
            .then(css => {
                if (css > '') {
                    document.getElementById('nodeCss').innerHTML = css;
                }
            })
            .catch(error => {
                console.error('fetch/catch error:', error);
            });
    }

    Promise.all(promises)
        .then((results) => {
            if (request.nodeMarkdown404 && request.nodeHtml404 && request.nodeJavascript404) {
                if (request.node == '404') {
                    document.getElementById('nodeHtml').innerHTML = '404 page is missing';
                    return;
                }
                window.location.href = 'index.html?node=404&reason=no-content-via-fetch&x2=' + request.node;
                return;
            }
        })
        .catch((error) => {
            console.error('A promise failed:', error);
        });

}

init();