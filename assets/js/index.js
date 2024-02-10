import { siteConfig } from '../../config/js/configs.js';
import { contentNodes } from '../../config/js/generated/contentNodes.js';

var page = {};

var templateMenuItem = `
  <li class="nav-item"><a class="nav-link" href="{{href}}">{{title}}</a></li>`;
var templateMenuItemWithChildren = `<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
{{title}}</a><ul class="dropdown-menu">{{children}}
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="{{href}}">All {{title}}</a></li>
</ul>
</li>`;
var templateMenuItemChild = `
  <li><a class="dropdown-item" href="{{href}}">{{title}}</a></li>`;
var breadcrumbItemTemplate = `<li class="breadcrumb-item"><a href="{{href}}">{{title}}</a></li>`;  
var breadcrumbItemCurrentTemplate = `<li class="breadcrumb-item active" aria-current="page">{{title}}</li>`;

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

function buildSiteMapItems(items, parent) {  
    var i = 0;
    for (const key in items) {
        i++;
        var item = contentNodes[items[key]];
        if (!(typeof item.files['.hide'] === 'undefined')){
            continue;
        }
        if (0 == item.markdownCount+item.htmlCount+item.javascriptCount){
            continue;
        }

        
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = item.title;    
        a.setAttribute("href", 'index.html?x='+items[key]);
        li.appendChild(a);
        if (item.children.length > 0) {                
            var ul = document.createElement("ul");                
            ul.setAttribute("id", parent.getAttribute("id") + "-" + i); 
            buildSiteMapItems(item.children, ul);
            li.appendChild(ul);
        }
        parent.appendChild(li);
    }     
}

function buildSiteMap(parent) {     
    console.log('buildSiteMap');
    if (parent === null || parent === undefined) {
        return;
    } 
    var ul = document.createElement("ul");
    buildSiteMapItems(contentNodes['/'].children,ul); 
    parent.appendChild(ul);
}

function buildAreaMap(parent) {   
    if (page.path == '/404' && typeof contentNodes[page.path] === 'undefined') {
        return;
    }
    console.log('buildAreaMap');
    if (parent === null || parent === undefined) {
        return;
    } 
    var ul = document.createElement("ul");
    buildSiteMapItems(contentNodes[page.path].children,ul);    
    parent.appendChild(ul);    
}

function buildBreadcrumbs() { 
    if (page.path == '/404' && typeof contentNodes[page.path] === 'undefined') {
        return;
    }
    console.log('buildBreadcrumbs');
    var breadcrumbs = '';
    console.log('page.breadcrumbs: '+page.breadcrumbs);
    var breadcrumbItem = breadcrumbItemTemplate;
    breadcrumbItem = breadcrumbItem.replace(/{{title}}/g,'Home');
    breadcrumbItem = breadcrumbItem.replace(/{{href}}/g,'index.html?x=/');
    breadcrumbs = breadcrumbs + breadcrumbItem;
    for (var i = 0; i < page.breadcrumbs.length; i++) {
        var breadcrumbItem = breadcrumbItemTemplate;
        var breadcrumbPath = page.breadcrumbs[i];
        console.log('breadcrumbPath: '+breadcrumbPath);
        var sitemapItem = contentNodes[breadcrumbPath];
        breadcrumbItem = breadcrumbItem.replace(/{{title}}/g,sitemapItem.title);
        breadcrumbItem = breadcrumbItem.replace(/{{href}}/g,'index.html?x='+breadcrumbPath);
        breadcrumbs = breadcrumbs + breadcrumbItem;
    }
    var breadcrumbItem = breadcrumbItemCurrentTemplate;
    console.log('page.path: '+page.path);
    var sitemapItem = contentNodes[page.path];
    //console.log(sitemapItem);
    breadcrumbItem = breadcrumbItem.replace(/{{title}}/g,sitemapItem.title);
    breadcrumbItem = breadcrumbItem.replace(/{{href}}/g,'index.html?x='+page.path);
    breadcrumbs = breadcrumbs + breadcrumbItem;
    document.getElementById('breadcrumbs').innerHTML = breadcrumbs;
}

function buildMenu() { 
    console.log('buildMenu');
    var menu = '';
    for (var i = 0; i < siteConfig.hamburgerLevelOneItems.length; i++) {
        var sitemapItem = contentNodes[siteConfig.hamburgerLevelOneItems[i]];
        var menuItem = templateMenuItem;
        if(sitemapItem.children.length > 0){
            var menuItem = templateMenuItemWithChildren;
        }
        menuItem = menuItem.replace(/{{title}}/g,sitemapItem.title);
        menuItem = menuItem.replace(/{{href}}/g,'index.html?x='+siteConfig.hamburgerLevelOneItems[i]);
        var menuItemChildren = '';
        for (var j = 0; j < sitemapItem.children.length; j++) {
            var menuChildItem = templateMenuItemChild;
            var sitemapChildItem = contentNodes[sitemapItem.children[j]];
            menuChildItem = menuChildItem.replace(/{{title}}/g,sitemapChildItem.title);
            menuChildItem = menuChildItem.replace(/{{href}}/g,'index.html?x='+sitemapItem.children[j]);
            menuItemChildren = menuItemChildren + menuChildItem;
        }
        menuItem = menuItem.replace(/{{children}}/g,menuItemChildren);
        menu = menu + menuItem;
    }
    document.getElementById('navbarSupportedContentUl').innerHTML = menu;
}

function buildAfterContentLoaded() {     
    console.log('buildAfterContentLoaded');
    buildMenu();
    buildBreadcrumbs();
    buildSiteMap(document.getElementById("site-map"));
    if(document.getElementById("area-map") ){
      buildAreaMap(document.getElementById("area-map"));
    }
    var spans = document.querySelectorAll('span.site-name');
    spans.forEach(function(span) {
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
    console.log('htmlContent changed');
    buildAfterContentLoaded();
  });
  
  watchElementForChanges('mdContent', () => {
    console.log('mdContent changed');
    buildAfterContentLoaded();
  });
  
  watchElementForChanges('jsContent', () => {
    console.log('jsContent changed');
  });


export function init() {
    page.queryParams = getQueryParams();       
    if (typeof page.queryParams['x'] === 'undefined') {
        window.location.href = 'index.html?x=/';
        return;
    }
    page.path = page.queryParams['x'];
    console.log('page.path: '+page.path);
    if (page.path == ''){
        page.path = '/';
    }
    console.log('page.path 2: '+page.path);
    page.breadcrumbs = [];
    page.filename = page.path
    page.parentPath = '/';
    if (page.path != '/' && page.path.endsWith('/')){
        page.path = page.path.slice(0, -1);
    }
    if (page.path != '/'){
        page.pathParts = page.path.substring(1).split('/');
        console.log('page.pathParts: '+page.pathParts);
        if(page.pathParts.length > 1){
            page.filename = page.pathParts.pop();
            page.parentPath = page.pathParts.join('/');
            for (var i = page.pathParts.length - 1; i >=0; i--) {
                page.breadcrumbs.push('/'+page.pathParts.join('/')); 
                page.pathParts.pop();
            }
        }
    }
    console.log('page.path 3: '+page.path);
    page.breadcrumbs =  page.breadcrumbs.reverse();
            
    if (page.path == '/404' && typeof contentNodes[page.path] === 'undefined') {
        document.getElementById('htmlContent').innerHTML = '<h1>404 Not Found</h1><p>Page not found</p>';
        return;
    }
    else if (typeof contentNodes[page.path] === 'undefined') {
        window.location.href = 'index.html?x=/404&reason=no-path&x2='+page.path;
        return;
    }
    
    if (typeof contentNodes[page.path].files['markdown.md'] === 'undefined' && 
    typeof contentNodes[page.path].files['html.html'] === 'undefined' && 
    typeof contentNodes[page.path].files['javascript.js'] === 'undefined') {
        if(page.path == '/404'){
            document.getElementById('htmlContent').innerHTML = '<h1>404 Not Found</h1><p>Page not found</p>';
            return;
        }
        document.getElementById('htmlContent').innerHTML = '<h1>Explore</h1><div id="area-map"></div>';
        //window.location.href = 'index.html?x=/404&reason=no-content-via-obj&x2='+page.path;
        return;
    }
    
    // fetch content files
    page.mdContent404 = false;
    page.htmlContent404 = false;
    page.jsContent404 = false;
    
    page.mdContentPath = null;
    page.htmlContentPath = null;
    page.jsContentPath = null;

    if(typeof contentNodes[page.path].files['markdown.md'] != 'undefined'){page.mdContentPath = siteConfig.contentPathPrefix + page.path + '/markdown.md'}
    if(typeof contentNodes[page.path].files['html.html'] != 'undefined'){page.htmlContentPath = siteConfig.contentPathPrefix + page.path + '/html.html'}
    if(typeof contentNodes[page.path].files['javascript.js'] != 'undefined'){page.jsContentPath = siteConfig.contentPathPrefix + page.path + '/javascript.js'}
    
    var promises = [];

    if (page.mdContentPath == null) {
        page.mdContent404 = true;
    }
    else {
        var mdPromise;
        promises.push(mdPromise);
        mdPromise = fetch(page.mdContentPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    page.mdContent404 = true;
                    return;
                }
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
            }
            return response.text(); 
        })
        .then(markdown => {
            if(markdown > ''){
                var converter = new showdown.Converter();
                document.getElementById('mdContent').innerHTML = converter.makeHtml(markdown);
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

    if (page.htmlContentPath == null) {
        page.htmlContent404 = true;
    }
    else {
        var htmlPromise;
        promises.push(htmlPromise);
        htmlPromise = fetch(page.htmlContentPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    page.htmlContent404 = true;
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

    if (page.jsContentPath == null) {
        page.jsContent404 = true;
    }
    else {
        var jsPromise;
        promises.push(jsPromise);
        jsPromise = fetch(page.jsContentPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    page.jsContent404 = true;
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
                document.getElementById('jsContent').src = page.jsContentPath + '?date=' + linkDate;
            }
        })
        .catch(error => {
            console.error('fetch/catch error:', error);
        });  
    }


    Promise.all(promises)
        .then((results) => {
            console.log('All promises resolved:', results);
            if(page.mdContent404 && page.htmlContent404 && page.jsContent404){
                if(page.path =='404'){
                    document.getElementById('htmlContent').innerHTML = '404 page is missing';
                    return;
                }
                window.location.href = 'index.html?x=404&reason=no-content-via-fetch&x2='+page.path;
                return;
            }
        })
        .catch((error) => {
            console.error('A promise failed:', error);
        });

}

init();