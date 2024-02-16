import { siteConfig } from '../../config/js/index.js';
import { contentNodes } from '../../config/js/generated/contentNodes.js';

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

function buildSiteMapItems(items, parent, level) {
    var i = 0;
    parent.classList.add('sitemap-level-'+level);
    for (const key in items) {
        i++;
        var item = contentNodes[items[key]];
        if (!(typeof item.files['.hide'] === 'undefined')) {
            continue;
        }
        if (0 == item.markdownCount + item.htmlCount + item.javascriptCount) {
            continue;
        }


        var li = document.createElement("li");
        li.classList.add('sitemap-level-'+level);
        var a = document.createElement("a");
        a.textContent = item.navLabel;
        a.setAttribute("href", 'index.html?node=' + items[key]);
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
    //ul.classList.add('list-group'); 
    buildSiteMapItems(contentNodes['/'].children, ul,0);
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
    //ul.classList.add('list-group','list-group-flush'); 
    buildSiteMapItems(contentNodes[request.node].children, ul,0);
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

watchElementForChanges('htmlContent', () => {
    buildAfterContentLoaded();
});

watchElementForChanges('mdContent', () => {
    buildAfterContentLoaded();
});

watchElementForChanges('jsContent', () => {
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
        document.getElementById('htmlContent').innerHTML = '<h1>404 Not Found</h1><p>Page not found</p>';
        return;
    }
    else if (typeof contentNodes[request.node] === 'undefined') {
        document.title = 'Page not found ('+request.node+')';
        window.location.href = 'index.html?node=/404&reason=no-path&x2=' + request.node;
        return;
    }

    if (typeof contentNodes[request.node].files['markdown.md'] === 'undefined' &&
        typeof contentNodes[request.node].files['html.html'] === 'undefined' &&
        typeof contentNodes[request.node].files['javascript.js'] === 'undefined') {
        if (request.node == '/404') {
            document.title = 'Page not found, but node exists (/404)';
            document.getElementById('htmlContent').innerHTML = '<h1>404 Not Found</h1><p>Page not found</p>';
            return;
        }
        if (typeof contentNodes[request.node]['title'] === 'undefined'){
            document.title = 'Explore ' + contentNodes[request.node].navLabel + ' (' + request.node + ')';
        }
        else{
            document.title = 'Explore ' + contentNodes[request.node].title + ' (' + request.node + ')';
        }
        //document.getElementById('htmlContent').innerHTML = '<h1>Explore</h1><div id="area-map"></div>';
        document.getElementById('htmlContent').innerHTML = '<h1>Explore</h1></div>';
        return;
    }

    if (typeof contentNodes[request.node]['title'] === 'undefined'){
        document.title = contentNodes[request.node].navLabel + ' (' + request.node + ')';
    }
    else{
        document.title = contentNodes[request.node].title + ' (' + request.node + ')';
    }
    // fetch content files
    request.mdContent404 = false;
    request.htmlContent404 = false;
    request.jsContent404 = false;

    request.mdContentPath = null;
    request.htmlContentPath = null;
    request.jsContentPath = null;

    if (typeof contentNodes[request.node].files['markdown.md'] != 'undefined') { request.mdContentPath = siteConfig.contentPathPrefix + request.node + '/markdown.md' }
    if (typeof contentNodes[request.node].files['html.html'] != 'undefined') { request.htmlContentPath = siteConfig.contentPathPrefix + request.node + '/html.html' }
    if (typeof contentNodes[request.node].files['javascript.js'] != 'undefined') { request.jsContentPath = siteConfig.contentPathPrefix + request.node + '/javascript.js' }

    // use promises to make sure the fetching completes
    var promises = [];

    // fetch the markdown if it we have a path for it
    if (request.mdContentPath == null) {
        request.mdContent404 = true;
    }
    else {
        var mdPromise;
        promises.push(mdPromise);
        mdPromise = fetch(request.mdContentPath)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        request.mdContent404 = true;
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
                    var converter = new showdown.Converter({tables: true, strikethrough: true});
                    var mdHtml = converter.makeHtml(markdown).replace(/<table>/g, '<table class="table table-hover  table-bordered">')
                    document.getElementById('mdContent').innerHTML = mdHtml;
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    // fetch the html if it we have a path for it
    if (request.htmlContentPath == null) {
        request.htmlContent404 = true;
    }
    else {
        var htmlPromise;
        promises.push(htmlPromise);
        htmlPromise = fetch(request.htmlContentPath)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        request.htmlContent404 = true;
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
                    document.getElementById('htmlContent').innerHTML = html;
                }
            })
            .catch(error => {
                console.error('fetch/catch error:', error);
            });
    }

    // fetch the javascript if it we have a path for it
    if (request.jsContentPath == null) {
        request.jsContent404 = true;
    }
    else {
        var jsPromise;
        promises.push(jsPromise);
        jsPromise = fetch(request.jsContentPath)
            .then(response => {
                if (!response.ok) {
                    if (response.status === 404) {
                        request.jsContent404 = true;
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
                    document.getElementById('jsContent').src = request.jsContentPath + '?date=' + linkDate;
                }
            })
            .catch(error => {
                console.error('fetch/catch error:', error);
            });
    }

    Promise.all(promises)
        .then((results) => {
            if (request.mdContent404 && request.htmlContent404 && request.jsContent404) {
                if (request.node == '404') {
                    document.getElementById('htmlContent').innerHTML = '404 page is missing';
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