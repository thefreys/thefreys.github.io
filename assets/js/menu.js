const menuInnerTemplate = `<menuitem><span class="heading">{{header_label}}</span></menuitem>{{menu_items_html}}`;
const menuItemTemplate = `<menuitem><span>{{label}}</span></menuitem>`;
const menuItemWithLinkTemplate = `<menuitem><span><a href="{{href}}">{{label}}</a></span></menuitem>`;
const menuItemWithChildrenTemplate = `
<menuitem>
  <label for="{{menu_id}}-i{{item_counter}}">{{label}}</label>
  <input id="{{menu_id}}-i{{item_counter}}" type="checkbox">
  <nav>
    <main>
      <label class="menu-toggle" for="{{menu_id}}-i{{item_counter}}"><span>&nbsp;</span></label>
      <menu>
        {{children}}
      </menu>
    </main>
  </nav>
</menuitem>
`;

export function buildMenuItems(items, right_or_left, header_label, menu_id, item_counter) {
    var menu_items_html = '';
    for (var i = 0; i < items.length; i++) { 
        item_counter = item_counter + 1  
        if ("children" in items[i] && items[i].children.length > 0) {   
            menu_items_html = menu_items_html + menuItemWithChildrenTemplate;  
            var child_items_html = buildMenuItems(items[i].children, right_or_left, items[i].label, menu_id, item_counter);
            menu_items_html = menu_items_html.replace(/{{children}}/g, child_items_html); 
          } else if ("href" in items[i]) {
              menu_items_html = menu_items_html + menuItemWithLinkTemplate;
              //var onclick = "window.location.href = '" + items[i].href + "';";
              //menu_items_html = menu_items_html.replace(/{{onclick}}/g,onclick); 
              menu_items_html = menu_items_html.replace(/{{href}}/g,items[i].href); 
          } else {
            menu_items_html = menu_items_html + menuItemTemplate;
        } 
        menu_items_html = menu_items_html.replace(/{{item_counter}}/g,item_counter);    
        menu_items_html = menu_items_html.replace(/{{label}}/g,items[i].label);                           
        menu_items_html = menu_items_html.replace(/{{header_label}}/g,header_label); 
    }
    menu_items_html = menu_items_html.replace(/{{right_or_left}}/g, right_or_left); 
    menu_items_html = menu_items_html.replace(/{{menu_id}}/g, menu_id); 
    var menu_html = menuInnerTemplate;
    menu_html = menu_html.replace(/{{right_or_left}}/g, right_or_left); 
    menu_html = menu_html.replace(/{{menu_items_html}}/g, menu_items_html); 
    menu_html = menu_html.replace(/{{header_label}}/g,header_label); 
    return menu_html;     
}



