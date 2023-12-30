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

export function loadContent() {
    var queryParams = getQueryParams();
    if (typeof queryParams['x'] === 'undefined') {
        window.location.href = 'index.html?x=index';
        return;
    }

    var mdContentPath = 'content/' +  queryParams['x'] + '.md'; 
    var mdContent404 = false;
    var htmlContentPath = 'content/' +  queryParams['x'] + '.html'; 
    var htmlContent404 = false;
    var jsContentPath = 'content/' +  queryParams['x'] + '.js'; 
    var jsContent404 = false;
       
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


    let promises = [mdPromise, htmlPromise, jsPromise];
    
    Promise.all(promises)
        .then((results) => {
            console.log('All promises resolved:', results);
            if(mdContent404 && htmlContent404 && jsContent404){
                window.location.href = 'index.html?x=404';
                return;
            }
        })
        .catch((error) => {
            console.error('A promise failed:', error);
        });



}





