






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
