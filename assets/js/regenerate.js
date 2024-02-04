import { siteConfig } from './configs.js';
import { fileDates } from '../../fileDates.js';
import { pathTitles } from '../../pathTitles.js';

function getDefaultContentItem(){
    return {
        levelNumber: 1,
        parentKey: '',
        children: [],
        hasTitle: false,
        hasMarkdown: false,
        hasHtml: false,
        hasJavascript: false,
        title: null,
        content: null
    };
}

var content = {};

content[''] = getDefaultContentItem();
content[''].levelNumber = 0;
content[''].parentKey = null;

content['404'] = getDefaultContentItem();
content['404'].parentKey = null;
content['404'].title = 'Explore';
content['404'].content = `
<h1>404 Not Found</h1><hr />
<p>Page not found.</p>
<div id="site-map"></div>`;

var otherFiles = {}
for (const p in fileDates) {

    if (!p.startsWith(siteConfig.contentPathPrefix)) {
        otherFiles[p] = {};
        otherFiles[p].modifiedDate = fileDates[p];
        continue;
    }

    var filePath = p.substring(8);
    var keyParts = filePath.split('/');   
    var filename = keyParts.pop();
    var tmpParts = [];
    var tmpParentPath = ''
    
    // loop through each folder in the key
    for (var levelNumber = 1; levelNumber <= keyParts.length; levelNumber++) {
        tmpParts.push(keyParts[levelNumber-1]);
        var key = tmpParts.join('/');
        if (typeof content[key] === 'undefined') {
            content[key] = getDefaultContentItem();
            content[key].levelNumber = levelNumber;
            content[key].parentKey = tmpParentPath;
        }
        tmpParentPath = key;
    }
    
    if (filename === 'html.html') { content[key].hasHtml = true; content[key].dateHtml = fileDates[p]; }
    if (filename === 'markdown.md') { content[key].hasMarkdown = true; content[key].dateMarkdown = fileDates[p]; }
    if (filename === 'javascript.js') { content[key].hasJavascript = true; content[key].dateJavascript = fileDates[p]; }  

    var key = keyParts.join('/');
    if(key == ''){key = ''}
    if (filename === '_title.txt') { 
        content[key].hasTitle = true; 
        content[key].dateTitle = fileDates[p];
        content[key].title = pathTitles[key];
    }
}

for (const p in content) {
    
    var keyParts = p.split('/');   
    //var endPathPart = keyParts.pop();
    //if (content[p].title == null || content[p].title == ''){
    //    content[p].title = endPathPart;
    //}

    if(content[p].hasHtml || content[p].hasMarkdown || content[p].hasJavascript){   
        // loop through each folder in the key
        while (keyParts.length > 0) {
            var childKey = keyParts.join('/');
            var parentKey = content[childKey].parentKey;
            if (typeof content[parentKey] === 'undefined'){
                console.log(parentKey);
            }
            else {
                if (!content[parentKey].children.includes(childKey)) {
                    content[parentKey].children.push(childKey);
                }
            }
            var lastPart = keyParts.pop();
            if (content[childKey].title == null || content[childKey].title == ''){content[childKey].title = lastPart}
        }
    }



    
    // if(content[key].hasHtml || content[key].hasMarkdown || content[key].hasJavascript){
    //     console.log(key); 
    //     console.log(content[key].parentKey); 
    //     if (content[key].parentKey != null && !content[content[key].parentKey].children.includes(key)) {
    //         content[content[key].parentKey].children.push(key);
    //     }
    // }
}

//console.log(content);
//console.log(otherFiles);
const preElement = document.getElementById('metaObject');
preElement.textContent = 'export const content = ' + JSON.stringify(content, null, 2);
