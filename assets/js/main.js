import * as mySitemapModule from './sitemap.js';
import * as myContentModule from './content.js';
import * as myMenuModule from './menu.js';

var sitemap_items = [
  {"label": "Home", "href": "index.html?x=index"},
  {"label": "Recipes", "children": [
    {"label": "Rainbow Cookies", "href": "index.html?x=recipes/rainbow-cookies"},
    ]},
];

console.log(window.location.pathname);
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
  //mySitemapModule.buildAreaMap('/',menu_items, document.getElementById("area-map"), null); 
});

watchElementForChanges('mdContent', () => {
  console.log('mdContent changed');
});

watchElementForChanges('jsContent', () => {
  console.log('jsContent changed');
});


//document.getElementById('menu-right').innerHTML = myMenuModule.buildMenuItems(bookmarks,'right', 'Bookmarks','menu-right', 0);
document.getElementById('left-menu-form').style.display = 'block';
document.getElementById('menu-left').innerHTML = myMenuModule.buildMenuItems(sitemap_items,'left', 'Sitemap','menu-left', 0);