var config = {};
var page = {};
var status = {isInitialized: false};

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

export function init(pConfig) {
    // Perform initialization tasks
    config = pConfig;
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
    page.href = 'index.html?x=' + page.path; 
    //page.filename = window.location.pathname.split('/').pop();
    page.pathParts = page.path.split('/');
    page.filename = page.pathParts.pop();
    if(page.path == 'index'){
        page.parentPath = null;
    }
    else {
        page.parentPath = 'index.html?x=' + page.pathParts
        .join('/');
    }

    
    if (typeof config['contentPathPrefix'] === 'undefined') {
        config.contentPathPrefix = '../content/';
    }
    status.isInitialized = true;
    console.log('Module initialized with pConfig:', pConfig);
    console.log('Module config:', config);
    console.log('Module status:', status);
    console.log('Module page:', page);


    var sitemapPath = config.contentPathPrefix + 'sitemap_items.json'; 
    var mdContentPath = config.contentPathPrefix +  page.path + '.md'; 
    var mdContent404 = false;
    var htmlContentPath = config.contentPathPrefix + page.path + '.html'; 
    var htmlContent404 = false;
    var jsContentPath = config.contentPathPrefix +  page.path + '.js'; 
    var jsContent404 = false;
    
    var sitemapPromise = fetch(sitemapPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    console.log('sitemap_items.json not found: 404');
                    return;
                }
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
            }
            return response.json(); 
        })
        .then(data => {
            var items = data.items;
            var sitemap = new Map();
            var sitemapItems;
            for (var i = 0; i < items.length; i++) {
                var sitemapItem = {
                    key: items[i].xpath,
                    href: 'index.html?x=' + items[i].xpath,
                    meta: items[i].meta
                }
                var path_parts = sitemapItem.key.split('/');
                var last_element = path_parts.pop()
                sitemap.set(items[i].xpath, sitemapItem);
                //console.log(last_element);
            }
            //console.log(sitemap);
            sitemap.forEach((value, key) => {
                //console.log(key + '.href = ' + value.href);
            });
            config.sitemapItems = items;
        })
        .catch(error => {
            console.log('There has been a problem with your fetch operation:', error);
        });


       
    var mdPromise = fetch(mdContentPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    console.log(mdContentPath + ' not found: 404');
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
                console.log(mdContentPath + ' populated');
                var converter = new showdown.Converter();
                document.getElementById('mdContent').innerHTML = converter.makeHtml(markdown);
            }
        })
        .catch(error => {
            console.log('There has been a problem with your fetch operation:', error);
        });


    var htmlPromise = fetch(htmlContentPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    console.log(htmlContentPath + ' not found: 404');
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
                console.log(htmlContentPath + ' populated');
                document.getElementById('htmlContent').innerHTML = html;
            }
        })
        .catch(error => {
            console.error('fetch/catch error:', error);
        });  
    

    var jsPromise = fetch(jsContentPath)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    console.log(jsContentPath + ' not found: 404');
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
                console.log(jsContentPath + ' populated');
                var linkDate = new Date().toISOString().replace(/:/g, '').replace(/ /g, '').replace(/-/g, '');
                document.getElementById('jsContent').src = jsContentPath + '?date=' + linkDate;
            }
        })
        .catch(error => {
            console.error('fetch/catch error:', error);
        });  


    let promises = [sitemapPromise, mdPromise, htmlPromise, jsPromise];
    
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

export function buildSiteMap(items, parent) {    
    if (parent === null){
        return;
    }
    for (var i = 0; i < items.length; i++) {      
        var li = document.createElement("li");     
        if ("href" in items[i]) { 
            var a = document.createElement("a");
            a.textContent = items[i].label;    
            a.setAttribute("href", items[i].href);
            li.append(a);
        }  
        else{
            li.textContent = items[i].label;    
        }
        if ("children" in items[i] && items[i].children.length > 0) {                  
            var ul = document.createElement("ul");                
            ul.setAttribute("id", parent.getAttribute("id") + "-" + i); 
            buildSiteMap(items[i].children, ul);
            li.append(ul);
        }
        parent.append(li);
    }     
}

export function buildAreaMap(items, parent) {    
    if (parent === null){
        return;
    }
    for (var i = 0; i < items.length; i++) {  
        if("href" in items[i] && items[i].href.startsWith(page.href) && items[i].href != page.href){     
            buildSiteMap(items, parent);
            return;
        }
        else {
            if ("children" in items[i] && items[i].children.length > 0) {  
                buildAreaMap(items[i].children, parent);
            }
        }
    }     
}



