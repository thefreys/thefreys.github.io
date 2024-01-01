
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

export function buildAreaMap(request_path, items, parent) {    
    if (parent === null){
        return;
    }
    for (var i = 0; i < items.length; i++) {  
        if("href" in items[i] && items[i].href.startsWith(request_path) && items[i].href != request_path){     
            buildSiteMap(items, parent);
            return;
        }
        else {
            if ("children" in items[i] && items[i].children.length > 0) {  
                buildAreaMap(request_path,items[i].children, parent);
            }
        }
    }     
}






    export function buildSiteMapX(items, parent) {    
        var html = '';
        if (parent === null){
            return;
        }
        for (var i = 0; i < items.length; i++) { 
            html = html + '<p><a href="'+items[i]+'"</a>'+items[i]+'</p>';
        }    
        parent.innerHTML = html; 
    }
    export function buildAreaMapX(request_path, items, parent) {  
        if (parent === null){
            return;
        }
        var html = '';  
        for (var i = 0; i < items.length; i++) {  
            var path = items[i];
            console.log(path);
            if(path.startsWith(request_path)){     
                html = html + '<p><a href="'+items[i]+'"</a>'+items[i]+'</p>';
            }
        }     
        parent.innerHTML = html; 
    }
