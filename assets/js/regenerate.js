import { fileDates } from '../../fileDates.js';
var moduleConfig = {};
moduleConfig.siteName = 'The Freys';
moduleConfig.contentPathPrefix = 'content/';
moduleConfig.hamburgerLevelOneItems = ['recipes','upcycling','blogs','sitemap'];

var content = {}
content[' '] = {
    'levelNumber': 0,
    'children': [], 
}

for (const p in fileDates) {
    if (!p.startsWith('content/')) {
        continue;
    }
    var filePath = p.substring(8);
    var keyParts = filePath.split('/');   
    var filename = keyParts.pop();
    var tmpParts = [];
    // loop through each folder in the key
    for (var levelNumber = 1; levelNumber <= keyParts.length; levelNumber++) {
        tmpParts.push(keyParts[levelNumber-1]);
        var key = tmpParts.join('/');
        if (typeof content[key] === 'undefined') {
            content[key] = {};
            content[key].levelNumber = levelNumber;
            if (levelNumber == 1){
                content[key].parentKey = ' ';
            }
            content[key].children = [];
        }
    }
}

var sitemap = {};
sitemap[' '] = {
    'levelNumber': 0,
    'exclude_from_sitemap': false, 
    'title': 'Root', 
    'children': [], 
}

for (const key in fileDates) {
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
    }
}


document.getElementById('metaObject').innerHTML = sitemap;//'hello';

console.log(content);