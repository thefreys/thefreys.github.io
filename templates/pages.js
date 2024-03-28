// JavaScript file for pages
import { siteConfig } from '{{assets_url}}/generated/config.js?version={{version}}';
import { markdownNodes } from '{{assets_url}}/generated/markdownNodes.js?version={{version}}';
import { htmlNodes } from '{{assets_url}}/generated/htmlNodes.js?version={{version}}';
import { hiddenNodes } from '{{assets_url}}/generated/hiddenNodes.js?version={{version}}';
import { contentNodes } from '{{assets_url}}/generated/contentNodes.js?version={{version}}';
import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js';
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

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
        if (0 == markdownCount + htmlCount) {
            continue;
        }
        var li = document.createElement("li");
        li.classList.add('sitemap-level-'+level);
        var a = document.createElement("a");
        a.textContent = item.navLabel;
        a.setAttribute("href", '/pages' + items[key] + '/index.html');
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

function buildAreaMap(parent,node) {
    console.log('buildAreaMap for '+ node);
    if (parent === null || parent === undefined) {
        return;
    }
    var ul = document.createElement("ul");
    buildSiteMapItems(contentNodes[node].children, ul);
    parent.appendChild(ul);
}

function buildBreadcrumbs() {
    var breadcrumbs = '';
    var breadcrumbItem = breadcrumbItemTemplate;
    breadcrumbItem = breadcrumbItem.replace(/{{navLabel}}/g, 'Home');
    breadcrumbItem = breadcrumbItem.replace(/{{href}}/g, '/pages/index.html');
    breadcrumbs = breadcrumbs + breadcrumbItem;
    for (var i = 0; i < request.breadcrumbs.length; i++) {
        var breadcrumbItem = breadcrumbItemTemplate;
        var breadcrumbPath = request.breadcrumbs[i];
        var sitemapItem = contentNodes[breadcrumbPath];
        breadcrumbItem = breadcrumbItem.replace(/{{navLabel}}/g, sitemapItem.navLabel);
        breadcrumbItem = breadcrumbItem.replace(/{{href}}/g, '/pages' + breadcrumbPath + '/index.html');
        breadcrumbs = breadcrumbs + breadcrumbItem;
    }
    var breadcrumbItem = breadcrumbItemCurrentTemplate;
    var sitemapItem = contentNodes[request.node];
    breadcrumbItem = breadcrumbItem.replace(/{{navLabel}}/g, sitemapItem.navLabel);
    breadcrumbItem = breadcrumbItem.replace(/{{href}}/g, '/pages' + request.node + '/index.html');
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
            menuItem = menuItem.replace(/{{href}}/g, '/pages' + level1 + '/index.html');
            menu = menu + menuItem;
            continue;
        }
        var sitemapItem = contentNodes[level1];
        if (sitemapItem.children.length > 0) {
            var menuItem = templateMenuItemWithChildren;
        }
        menuItem = menuItem.replace(/{{navLabel}}/g, sitemapItem.navLabel);
        menuItem = menuItem.replace(/{{href}}/g, '/pages' + siteConfig.hamburgerLevelOneItems[i] + '/index.html');
        var menuItemChildren = '';
        for (var j = 0; j < sitemapItem.children.length; j++) {   
            // do not show this node or go deeper when .hide is found
            if (hiddenNodes.includes(sitemapItem.children[j])) {
                continue;
            }
            // do not show this node or go deeper when there will never be content files to show
            var markdownCount = markdownNodes.filter(str => str.startsWith(sitemapItem.children[j])).length;
            var htmlCount = htmlNodes.filter(str => str.startsWith(sitemapItem.children[j])).length;
            if (0 == markdownCount + htmlCount) {
                continue;
            }
            var menuChildItem = templateMenuItemChild;
            var sitemapChildItem = contentNodes[sitemapItem.children[j]];
            menuChildItem = menuChildItem.replace(/{{navLabel}}/g, sitemapChildItem.navLabel);
            menuChildItem = menuChildItem.replace(/{{href}}/g, '/pages' + sitemapItem.children[j] + '/index.html');
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
    var spans = document.querySelectorAll('span.site-name');
    spans.forEach(function (span) {
        span.textContent = siteConfig.siteName;
    });
    hljs.highlightAll();
    if (document.getElementById("site-map")) {
        buildAreaMap(document.getElementById("site-map"),"/");
    }
    if (document.getElementById("area-map")) {
        buildAreaMap(document.getElementById("area-map"),request.node);
    }
    request.markdown = document.getElementById("nodeMarkdownRaw").innerHTML;
    request.markdown_as_html = document.getElementById("nodeMarkdown").innerHTML;
    request.html = document.getElementById("nodeHtml").innerHTML;
    
    // THIS IS THE END OF ALL PROCESSING - SET GLOBALS HERE FOR ALL OTHER JS
    window.nodeInformation = {
        request: request,
        siteConfig: siteConfig,
        contentNodes: contentNodes,
        markdownNodes: markdownNodes,
        htmlNodes: htmlNodes,
        hiddenNodes: hiddenNodes
    };
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
    console.log('nodeHtml changed');
    updateExternalLinkTarget('#nodeHtml');
});
watchElementForChanges('nodeMarkdown', () => {
    console.log('nodeMarkdown changed');
    updateExternalLinkTarget('#nodeMarkdown');
});

export function init() {
    // determine the node requested
    request.node = window.location.pathname;

    if (request.node.startsWith('/pages/') && request.node.endsWith('/index.html')) {
        request.node = request.node.slice(6, -11);
        if (request.node == ''){request.node = '/'}
    }
    console.log('request.node: '+request.node);
    // continue on with defined node
    request.breadcrumbs = [];
    request.filename = request.node
    request.parentPath = '/';
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
    
    var mdHtml = marked.parse(document.getElementById('nodeMarkdownRaw').innerHTML).replace(/<table>/g, '<table class="table table-hover  table-bordered">');
    document.getElementById('nodeMarkdown').innerHTML = mdHtml;

    // handle when node is not defined
    if (typeof contentNodes[request.node] === 'undefined') {
        //console.log('INVALID request.node: '+request.node);
        console.log('UNDEFINED in contentNodes: '+request.node);
    }

    buildAfterContentLoaded();
} 

init();