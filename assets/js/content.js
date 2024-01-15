import { metaObject } from '../../../content/meta_object.js';
var moduleConfig = {};
moduleConfig.contentPathPrefix = '../content/';
moduleConfig.hamburgerLevelOneItems = ['blogs','recipes','upcycling'];

var page = {};
var sitemap = {};

var menuItemTemplate = `<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
{{title}}</a><ul class="dropdown-menu">{{children}}
<li><hr class="dropdown-divider"></li>
<li><a class="dropdown-item" href="{{href}}">Area Map</a></li>
</ul>
</li>`;
var menuItemChildTemplate = `
  <li><a class="dropdown-item" href="{{href}}">{{title}}</a></li>`;

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
    if (parent === null || parent === undefined) {
        return;
    } 
    var i = 0;
    for (const key in items) {
        i++;
        var item = sitemap[items[key]];
        if (item.exclude_from_sitemap == true){
            continue;
        }
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.textContent = item.title;    
        a.setAttribute("href", 'index.html?x='+item.metaKey);
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
    if (parent === null || parent === undefined) {
        return;
    } 
    var ul = document.createElement("ul");
    buildSiteMapItems(sitemap[' '].children,ul); 
    parent.appendChild(ul);
}

function buildAreaMap(parent) {   
    if (parent === null || parent === undefined) {
        return;
    } 
    var ul = document.createElement("ul");
    buildSiteMapItems(sitemap[page.path].children,parent);    
    parent.appendChild(ul);    
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
    buildSiteMap(document.getElementById("site-map"));
    buildAreaMap(document.getElementById("area-map"));
  });
  
  watchElementForChanges('mdContent', () => {
    console.log('mdContent changed');
  });
  
  watchElementForChanges('jsContent', () => {
    console.log('jsContent changed');
  });


export function init() {
    page.queryParams = getQueryParams();       
    if (typeof page.queryParams['x'] === 'undefined') {
        window.location.href = 'index.html?x=index';
        return;
    }
    page.path = page.queryParams['x'];
    if (page.path.endsWith('/')){
        window.location.href = 'index.html?x=' + page.path + 'index';
        return;
    }
    page.pathParts = page.path.split('/');
    if(page.pathParts > 1){
        page.filename = page.pathParts.pop();
        page.parentPath = page.pathParts.join('/');
    }
    else {
        page.filename = page.path
        page.parentPath = '';
    }
    page.href = 'index.html?x=' + page.path; 
        
    sitemap[' '] = {
        'levelNumber': 0,
        'exclude_from_sitemap': false, 
        'title': 'Root', 
        'children': [], 
    }
    for (const key in metaObject) {
        var keyParts = key.split('/');   
        var tmpParts = [];
        // loop through each folder in the key
        for (var pathIndex = 0; pathIndex < keyParts.length; pathIndex++) {
            var tmpParentPath = tmpParts.join('/');
            tmpParts.push(keyParts[pathIndex]);
            var tmpPath = tmpParts.join('/');
            if (typeof sitemap[tmpPath] === 'undefined') {
                sitemap[tmpPath] = {};
                sitemap[tmpPath].levelNumber = pathIndex + 1;
                sitemap[tmpPath].lastPath = keyParts[pathIndex];
                sitemap[tmpPath].parentKey = tmpParentPath;
                if (pathIndex == 0){
                    sitemap[tmpPath].parentKey = ' ';
                }
                sitemap[tmpPath].exclude_from_sitemap = false;
                sitemap[tmpPath].children = [];
            }
        };
    }

    for (const key in sitemap) {
        if (key != ' ') {
            sitemap[sitemap[key].parentKey].children.push(key);
        }
    }

    for (const key in sitemap) {
        if (sitemap[key].children.length == 1 && sitemap[sitemap[key].children[0]].lastPath == 'index') {
            sitemap[key].metaKey = key + '/index';
            sitemap[key].isIndex = false;
            sitemap[key].children = [];
        }
        else if(sitemap[key].children.length == 1 && sitemap[key].lastPath == 'index'){
            sitemap[key].metaKey = key;
            sitemap[key].isIndex = true;
        }
        else if (sitemap[key].children.length > 0 && key == ' ') {
            sitemap[key].metaKey = key;
            sitemap[key].isIndex = true;
        }
        else if (sitemap[key].children.length > 0) {
            sitemap[key].metaKey = key + '/index';
            sitemap[key].isIndex = true;
        }
        else {
            sitemap[key].metaKey = key;
            sitemap[key].isIndex = false;
        }
    }
    for (const key in sitemap) {
        if(typeof sitemap[sitemap[key].metaKey] === 'undefined') {
            sitemap[key].metaKey = key;
        }
    }

    for (const key in sitemap) {
        if(!(typeof metaObject[sitemap[key].metaKey] === 'undefined')) {
            var metaItem = metaObject[sitemap[key].metaKey];
            if (!(typeof metaItem.title === 'undefined')) {
                sitemap[key].title = metaItem.title;
            }
            if (!(typeof metaItem.exclude_from_sitemap === 'undefined')) {
                sitemap[key].exclude_from_sitemap = metaItem.exclude_from_sitemap;
            }
            if (!(typeof metaItem.hasMarkdown === 'undefined') && metaItem.hasMarkdown == true) {
                sitemap[key].mdContentPath = moduleConfig.contentPathPrefix + page.path + '.md';
            }
            if (!(typeof metaItem.hasHtml === 'undefined') && metaItem.hasHtml == true) {
                sitemap[key].htmlContentPath = moduleConfig.contentPathPrefix + page.path + '.html';
            }
            if (!(typeof metaItem.hasJavaScript === 'undefined') && metaItem.hasJavaScript == true) {
                sitemap[key].jsContentPath = moduleConfig.contentPathPrefix + page.path + '.js';
            }
        }
    }

    for (const key in sitemap) {
        if (sitemap[key].metaKey != key) {
            var newChildren = sitemap[key].children;
            for (const c in sitemap[key].children) {
                if (sitemap[sitemap[key].children[c]].lastPath == 'index'){
                    newChildren.splice(c,1);
                }
            }
            sitemap[key].children = newChildren;
        }
        if (typeof sitemap[key].title === 'undefined'){
            sitemap[key].title = sitemap[key].lastPath;
        }
    }

    if (page.path =='404' && typeof sitemap[page.path] === 'undefined'){
        document.getElementById('htmlContent').innerHTML = '404 page is missing';
        return;
    }

    if (typeof sitemap[page.path] === 'undefined') {
        if (page.filename != 'index'){
            window.location.href = 'index.html?x=404&reason=no-sitemap-for-'+page.path;
            return;
        }
        window.location.href = page.parentPath;
        return;
    }
    
    if (typeof sitemap[page.path].mdContentPath === 'undefined' &&
        typeof sitemap[page.path].htmlContentPath === 'undefined' &&
        typeof sitemap[page.path].jsContentPath === 'undefined'){

        if(sitemap[page.path].isIndex){
            var h = document.createElement("h1");
            h.textContent = sitemap[page.path].title;
            document.getElementById('htmlContent').appendChild(h);
            var h = document.createElement("h2");
            h.textContent = "Explore what's here:";
            document.getElementById('htmlContent').appendChild(h);
            var d = document.createElement("div");
            d.id = 'area-map';  
            buildAreaMap(d);
            document.getElementById('htmlContent').appendChild(d);
            return;
        }

        window.location.href = 'index.html?x=404';
        return;
    }
    
    // fetch content files

    var mdContent404 = false;
    var htmlContent404 = false;
    var jsContent404 = false;
    
    var promises = [];

    if (typeof sitemap[page.path].mdContentPath === 'undefined') {
        mdContent404 = true;
    }
    else {
        var mdPromise;
        promises.push(mdPromise);
        mdPromise = fetch(sitemap[page.path].mdContentPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    mdContent404 = true;
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

    if (typeof sitemap[page.path].htmlContentPath === 'undefined') {
        htmlContent404 = true;
    }
    else {
        var htmlPromise;
        promises.push(htmlPromise);
        htmlPromise = fetch(sitemap[page.path].htmlContentPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    htmlContent404 = true;
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

    if (typeof sitemap[page.path].jsContentPath === 'undefined') {
        jsContent404 = true;
    }
    else {
        var jsPromise;
        promises.push(jsPromise);
        jsPromise = fetch(sitemap[page.path].jsContentPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    jsContent404 = true;
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
                document.getElementById('jsContent').src = sitemap[page.path].jsContentPath + '?date=' + linkDate;
            }
        })
        .catch(error => {
            console.error('fetch/catch error:', error);
        });  
    }

    // Do stuff while fetching:
    var menu = '';
    for (var i = 0; i < moduleConfig.hamburgerLevelOneItems.length; i++) {
        var menuItem = menuItemTemplate;
        var sitemapItem = sitemap[moduleConfig.hamburgerLevelOneItems[i]];
        menuItem = menuItem.replace(/{{title}}/g,sitemapItem.title);
        menuItem = menuItem.replace(/{{href}}/g,'index.html?x='+sitemapItem.metaKey);
        var menuItemChildren = '';
        for (var j = 0; j < sitemapItem.children.length; j++) {
            var menuChildItem = menuItemChildTemplate;
            var sitemapChildItem = sitemap[sitemapItem.children[j]];
            menuChildItem = menuChildItem.replace(/{{title}}/g,sitemapChildItem.title);
            menuChildItem = menuChildItem.replace(/{{href}}/g,'index.html?x='+sitemapChildItem.metaKey);
            menuItemChildren = menuItemChildren + menuChildItem;
            //console.log(menuChildItem); 
        }
        menuItem = menuItem.replace(/{{children}}/g,menuItemChildren);
        menu = menu + menuItem;
    }
    console.log(menu); 
    document.getElementById('navbarSupportedContentUl').innerHTML = menu;

    Promise.all(promises)
        .then((results) => {
            console.log('All promises resolved:', results);
            if(mdContent404 && htmlContent404 && jsContent404){
                if(page.path =='404'){
                    document.getElementById('htmlContent').innerHTML = '404 page is missing';
                    return;
                }
                window.location.href = 'index.html?x=404';
                return;
            }
        })
        .catch((error) => {
            console.error('A promise failed:', error);
        });

}
