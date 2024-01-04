import * as myContentModule from './content.js';

myContentModule.init({});

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
  //mySitemapModule.buildSiteMap(sitemap_items, document.getElementById("site-map"), null);
  //mySitemapModule.buildAreaMap(request_path, sitemap_items, document.getElementById("area-map"), null); 
  //mySitemapModule.buildSiteMapX(temp_items, document.getElementById("site-map"), null);
  //mySitemapModule.buildAreaMapX(request_path, temp_items, document.getElementById("area-map"), null); 
});

watchElementForChanges('mdContent', () => {
  console.log('mdContent changed');
});

watchElementForChanges('jsContent', () => {
  console.log('jsContent changed');
});

//document.getElementById('menu-right').innerHTML = myMenuModule.buildMenuItems(bookmarks,'right', 'Bookmarks','menu-right', 0);
//document.getElementById('left-menu-form').style.display = 'block';
//document.getElementById('menu-left').innerHTML = myMenuModule.buildMenuItems(sitemap_items,'left', 'Menu','menu-left', 0);