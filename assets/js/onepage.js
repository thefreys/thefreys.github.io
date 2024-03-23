// JavaScript file for one page site
import { siteConfig } from '/assets/js/config.js';
import { markdownNodes } from '/assets/js/generated/markdownNodes.js';
import { htmlNodes } from '/assets/js/generated/htmlNodes.js';
import { javascriptNodes } from '/assets/js/generated/javascriptNodes.js';
import { jsAncestorNodes } from '/assets/js/generated/jsAncestorNodes.js';
import { cssNodes } from '/assets/js/generated/cssNodes.js';
import { cssAncestorNodes } from '/assets/js/generated/cssAncestorNodes.js';
import { hiddenNodes } from '/assets/js/generated/hiddenNodes.js';
import { contentNodes } from '/assets/js/generated/contentNodes.js';
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
        a.setAttribute("href", 'onepage.html?node=' + items[key]);
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
    breadcrumbItem = breadcrumbItem.replace(/{{href}}/g, 'onepage.html?node=/');
    breadcrumbs = breadcrumbs + breadcrumbItem;
    for (var i = 0; i < request.breadcrumbs.length; i++) {
        var breadcrumbItem = breadcrumbItemTemplate;
        var breadcrumbPath = request.breadcrumbs[i];
        var sitemapItem = contentNodes[breadcrumbPath];
        breadcrumbItem = breadcrumbItem.replace(/{{navLabel}}/g, sitemapItem.navLabel);
        breadcrumbItem = breadcrumbItem.replace(/{{href}}/g, 'onepage.html?node=' + breadcrumbPath);
        breadcrumbs = breadcrumbs + breadcrumbItem;
    }
    var breadcrumbItem = breadcrumbItemCurrentTemplate;
    var sitemapItem = contentNodes[request.node];
    breadcrumbItem = breadcrumbItem.replace(/{{navLabel}}/g, sitemapItem.navLabel);
    breadcrumbItem = breadcrumbItem.replace(/{{href}}/g, 'onepage.html?node=' + request.node);
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
            menuItem = menuItem.replace(/{{href}}/g, 'onepage.html?node=' + level1);
            menu = menu + menuItem;
            continue;
        }
        var sitemapItem = contentNodes[level1];
        if (sitemapItem.children.length > 0) {
            var menuItem = templateMenuItemWithChildren;
        }
        menuItem = menuItem.replace(/{{navLabel}}/g, sitemapItem.navLabel);
        menuItem = menuItem.replace(/{{href}}/g, 'onepage.html?node=' + siteConfig.hamburgerLevelOneItems[i]);
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
            menuChildItem = menuChildItem.replace(/{{href}}/g, 'onepage.html?node=' + sitemapItem.children[j]);
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
watchElementForChanges('nodeJavascript', () => {
    console.log('nodeJavascript changed');
});
watchElementForChanges('nodeCss', () => {
    console.log('nodeCSS changed');
});

function processFetchedFiles(){
    console.log('processFetchedFiles');  
    request.markdown = ' ';          
    request.html = ' ';          
    request.css = ' ';          
    request.javascript = '';          
    for (let i in request.files) {     
        if(request.files[i].endsWith('/markdown.md')){
            if (request.fetchedFiles[request.files[i]].fetchStatus == 200) { 
                request.markdown = request.fetchedFiles[request.files[i]].body;
            }
            else { 
                request.markdown = 'MARKDOWN FILE NOT FOUND';
            }
        }
        if(request.files[i].endsWith('/html.html')){
            if (request.fetchedFiles[request.files[i]].fetchStatus == 200) { 
                request.html = request.fetchedFiles[request.files[i]].body;
            }
            else { 
                request.html = 'HTML FILE NOT FOUND';
            }            
        }
        if(request.files[i].endsWith('.css')){
            request.css = request.css + "/* " + request.files[i] + " */";
            request.css = request.css + "\n";
            if (request.fetchedFiles[request.files[i]].fetchStatus == 200) { 
                request.css = request.css + request.fetchedFiles[request.files[i]].body;
            }
            else { 
                request.css = request.css + '/* CSS FILE NOT FOUND */';
            }            
            request.css = request.css + "\n";
        }
        if(request.files[i].endsWith('.js')){
            if (request.fetchedFiles[request.files[i]].fetchStatus == 200) { 
                if(request.files[i].endsWith('javascript.js')){
                    request.javascript = request.javascript + "\n";
                    request.javascript = request.javascript + '// ' + request.files[i];
                    request.javascript = request.javascript + "\n";
                    request.javascript = request.javascript + request.fetchedFiles[request.files[i]].body;
                    request.javascript = request.javascript + "\n";
                }
                else {
                    var importAs = 'ancestor' + (request.files[i].split('/').length - 1);
                    request.javascript = request.javascript + 'import * as '+importAs+' from \'/'+request.files[i]+'\';';
                    request.javascript = request.javascript + "\n";
                }
            } 
        }
    }
    if (request.css >= ' ') {
        document.getElementById('nodeCss').innerHTML = request.css;
    }
    if (request.markdown >= ' ' || request.html >= ' ') {
        console.log('we have content');
        if (request.markdown >= ' ') {
            var mdHtml = marked.parse(request.markdown).replace(/<table>/g, '<table class="table table-hover  table-bordered">');
            document.getElementById('nodeMarkdown').innerHTML = mdHtml;
        }
        if (request.html >= ' ') {
            document.getElementById('nodeHtml').innerHTML = request.html;
        }
    }
    else {
        console.log('content free node - show Explore');
        document.getElementById('nodeHtml').innerHTML = '<h1>Explore</h1></div>';
    }
    buildAfterContentLoaded();
    if (request.javascript >= ' ') {
        document.getElementById('nodeJavascript').innerHTML = request.javascript;
    }
    console.log('request.javascript ------------------');
    console.log(request.javascript);


    // THIS IS THE END OF ALL PROCESSING - SET GLOBALS HERE FOR ALL OTHER JS
    window.nodeInformation = {
        request: request,
        siteConfig: siteConfig,
        contentNodes: contentNodes,
        markdownNodes: markdownNodes,
        htmlNodes: htmlNodes,
        javascriptNodes: javascriptNodes,
        cssAncestorNodes: cssAncestorNodes,
        cssNodes: cssNodes,
        cssAncestorNodes: cssAncestorNodes,
        hiddenNodes: hiddenNodes
    };
}

function fetchFiles() {
    console.log('fetchFiles');
    var fetchPromises = [];
    var bodyPromises = [];
    for (let i in request.files) {
        request.fetchedFiles[request.files[i]] = {};
        request.fetchedFiles[request.files[i]].fetchStatus = 0;
        request.fetchedFiles[request.files[i]].fetchStatusText = '';
        request.fetchedFiles[request.files[i]].body = '';
        request.fetchedFiles[request.files[i]].bodyPromiseIndex = -1;
        fetchPromises.push(fetch(request.files[i]));
        request.fetchedFiles[request.files[i]].fetchPromiseIndex = fetchPromises.length - 1;
    }
    Promise.all(fetchPromises).then(response => {
        for (let i in request.files) {     
            request.fetchedFiles[request.files[i]].response = response[request.fetchedFiles[request.files[i]].fetchPromiseIndex];
            request.fetchedFiles[request.files[i]].fetchStatus = request.fetchedFiles[request.files[i]].response.status;
            request.fetchedFiles[request.files[i]].fetchStatusText = request.fetchedFiles[request.files[i]].response.statusText;
            if(request.fetchedFiles[request.files[i]].response.ok){
                console.log('Getting text() for '+request.files[i]);
                bodyPromises.push(request.fetchedFiles[request.files[i]].response.text());
                request.fetchedFiles[request.files[i]].bodyPromiseIndex = bodyPromises.length - 1;
            }
            else{
                //throw new Error('Network response was not ok: ' + request.fetchedFiles[request.files[i]].response.statusText);
                console.log('Network response was not ok: ' + request.fetchedFiles[request.files[i]].response.statusText);
            }
        }
        Promise.all(bodyPromises).then(response => {
            for (let i in request.files) {         
                if(request.fetchedFiles[request.files[i]].bodyPromiseIndex >= 0){
                    request.fetchedFiles[request.files[i]].body = response[request.fetchedFiles[request.files[i]].bodyPromiseIndex];
                }
            }
            processFetchedFiles();
        }); 
    });
} 

export function init() {
    // determine the node requested
    request.queryParams = getQueryParams();
    if (typeof request.queryParams['node'] === 'undefined') {
        window.location.href = 'onepage.html?node=/';
        return;
    }
    request.node = request.queryParams['node'];
    if (request.node == '') {
        request.node = '/';
    }
    if (request.node != '/' && request.node.endsWith('/')) {
        request.node = request.node.slice(0, -1);
    }
    // handle when node is not defined
    if (typeof contentNodes[request.node] === 'undefined') {
        window.location.href = 'onepage.html?node=/&error=404&orig_node=' + request.node;
        return;
    }
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

    request.files = [];
    request.fetchedFiles = {}
    if(markdownNodes.includes(request.node)){
       request.files.push(siteConfig.contentPathPrefix + request.node + '/markdown.md');
    }
    if(htmlNodes.includes(request.node)){
       request.files.push(siteConfig.contentPathPrefix + request.node + '/html.html');
    }
    request.ancestralNodes = ['/'];
    if ('/' != request.node) {
        for (const i in request.breadcrumbs) {
            request.ancestralNodes.push(request.breadcrumbs[i]);
        }
        request.ancestralNodes.push(request.node);
    }
    for (const i in request.ancestralNodes) {
        if(cssAncestorNodes.includes(request.ancestralNodes[i])){
            request.files.push(siteConfig.contentPathPrefix + request.ancestralNodes[i].replace(/\/$/, '') + '/ancestor.css');
        }
        if(jsAncestorNodes.includes(request.ancestralNodes[i])){
            request.files.push(siteConfig.contentPathPrefix + request.ancestralNodes[i].replace(/\/$/, '') + '/ancestor.js');
        }
    }  
    if(cssNodes.includes(request.node)){
        request.files.push(siteConfig.contentPathPrefix + request.node.replace(/\/$/, '') + '/css.css');
    }
    if(javascriptNodes.includes(request.node)){
        request.files.push(siteConfig.contentPathPrefix + request.node.replace(/\/$/, '') + '/javascript.js');
    }
    if (typeof contentNodes[request.node]['title'] === 'undefined'){
        document.title = contentNodes[request.node].navLabel + ' (' + request.node.replace(/\/$/, '') + ')';
    }
    else{
        document.title = contentNodes[request.node].title + ' (' + request.node.replace(/\/$/, '') + ')';
    }
    fetchFiles();
} 

init();