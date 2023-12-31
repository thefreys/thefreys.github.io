import * as mySitemapModule from './sitemap.js';
import * as myContentModule from './content.js';
import * as myMenuModule from './menu.js';

var sitemap_items = [
  {"label": "Home", "href": "index.html?x=index"},
  {"label": "Recipes", "href": "index.html?x=recipes/", "children": [
    {"label": "Rainbow Cookies", "href": "index.html?x=recipes/rainbow-cookies"},
    {"label": "Tiramisu", "href": "index.html?x=recipes/tiramisu"},
    {"label": "Yeast Rolls", "href": "index.html?x=recipes/yeast-rolls"},
  ]},
  {"label": "Creative Reuse", "href": "index.html?x=creative-reuse/", "children": [
    {"label": "Food Scraps", "href": "index.html?x=creative-reuse/food-scraps", "children": [
      {"label": "Tea Bags", "href": "index.html?x=creative-reuse/food-scraps/tea-bags"},
      {"label": "Coffee Grounds", "href": "index.html?x=creative-reuse/food-scraps/coffee-grounds"},
    ]},
    {"label": "Textiles", "href": "index.html?x=creative-reuse/textiles", "children": [
      {"label": "T-Shirts", "href": "index.html?x=creative-reuse/textiles/t-shirts"},
    ]},
  ]},
  {"label": "Web Design", "href": "index.html?x=web-design/", "children": [
    {"label": "Sitemaps", "href": "index.html?x=web-design/sitemaps"},
    {"label": "Hamburger Menu", "href": "index.html?x=web-design/hamburger"},
  ]},
];

var queryParams = myContentModule.getQueryParams();
var request_path = 'index.html?x=' + queryParams['x'];
//var arr = window.location.href.split("index.html?");
if(request_path.endsWith('/index')){
  request_path = request_path.slice(0, -5);
}  
console.log(request_path);
myContentModule.loadContent();

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
  mySitemapModule.buildSiteMap(sitemap_items, document.getElementById("site-map"), null);
  mySitemapModule.buildAreaMap(request_path, sitemap_items, document.getElementById("area-map"), null); 
});

watchElementForChanges('mdContent', () => {
  console.log('mdContent changed');
});

watchElementForChanges('jsContent', () => {
  console.log('jsContent changed');
});

//document.getElementById('menu-right').innerHTML = myMenuModule.buildMenuItems(bookmarks,'right', 'Bookmarks','menu-right', 0);
document.getElementById('left-menu-form').style.display = 'block';
document.getElementById('menu-left').innerHTML = myMenuModule.buildMenuItems(sitemap_items,'left', 'Menu','menu-left', 0);