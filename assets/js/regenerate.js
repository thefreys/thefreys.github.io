import { fileDates } from '../../fileDates.js';
import { pathTitles } from '../../pathTitles.js';
var moduleConfig = {};
moduleConfig.siteName = 'The Freys';
moduleConfig.contentPathPrefix = 'content/';
moduleConfig.hamburgerLevelOneItems = ['recipes','upcycling','blogs','sitemap'];

function getDefaultContentItem(){
    return {
        levelNumber: 1,
        parentKey: ' ',
        children: [],
        hasIndex: false,
        hasTitle: false,
        hasMarkdown: false,
        hasHtml: false,
        hasJavascript: false,
        title: null,
        content: null
    };
}

var content = {};
content[' '] = getDefaultContentItem();
content[' '].levelNumber = 0;
content[' '].parentKey = null;

content['404'] = getDefaultContentItem();
content['404'].title = 'Explore';
content['404'].content = `
<h1>404 Not Found</h1><hr />
<p>Page not found.</p>
<div id="site-map"></div>`;

var otherFiles = {}
for (const p in fileDates) {

    if (!p.startsWith(moduleConfig.contentPathPrefix)) {
        otherFiles[p] = {};
        otherFiles[p].modifiedDate = fileDates[p];
        continue;
    }

    var filePath = p.substring(8);
    var keyParts = filePath.split('/');   
    var filename = keyParts.pop();
    var tmpParts = [];
    var tmpParentPath = ' '
    
    // loop through each folder in the key
    for (var levelNumber = 1; levelNumber <= keyParts.length; levelNumber++) {
        tmpParts.push(keyParts[levelNumber-1]);
        var key = tmpParts.join('/');
        if (!content[tmpParentPath].children.includes(key)) {
            content[tmpParentPath].children.push(key);
        }
        if (typeof content[key] === 'undefined') {
            content[key] = getDefaultContentItem();
            content[key].levelNumber = levelNumber;
            content[key].parentKey = tmpParentPath;
        }
        
        if (filename === '_index.html') { content[key].hasIndex = true; content[key].dateIndex = fileDates[p]; }
        if (filename === 'html.html') { content[key].hasHtml = true; content[key].dateHtml = fileDates[p]; }
        if (filename === 'markdown.md') { content[key].hasMarkdown = true; content[key].dateMarkdown = fileDates[p]; }
        if (filename === 'javascript.js') { content[key].hasJavascript = true; content[key].dateJavascript = fileDates[p]; }  

        if (filename === '_title.txt') { 
            content[key].hasTitle = true; 
            content[key].dateTitle = fileDates[p];
            content[key].title = pathTitles[p];
        }

        tmpParentPath = key;
    }
}

//console.log(content);
//console.log(otherFiles);
const preElement = document.getElementById('metaObject');
preElement.textContent = 'export const content = ' + JSON.stringify(content, null, 2);
