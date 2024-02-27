import hljs from 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/es/highlight.min.js';

document.getElementById('code_bingCSS').innerHTML = hljs.highlight(`
/* Remove default bullets */
ul, #myUL {
  list-style-type: none;
}

/* Remove margins and padding from the parent ul */
#myUL {
  margin: 0;
  padding: 0;
}

/* Style the caret/arrow */
.caret {
  cursor: pointer;
  user-select: none; /* Prevent text selection */
}

/* Create the caret/arrow with a unicode, and style it */
.caret::before {
  content: "\\25B6";
  color: black;
  display: inline-block;
  margin-right: 6px;
}

/* Rotate the caret/arrow icon when clicked on (using JavaScript) */
.caret-down::before {
  transform: rotate(90deg);
}

/* Hide the nested list */
.nested {
  display: none;
}

/* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
.active {
  display: block;
}
`, {language: 'css'}).value;
document.getElementById('code_bingJS').innerHTML = hljs.highlight(`
var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
`, {language: 'js'}).value;
document.getElementById('code_bingHTML').innerHTML = hljs.highlight(`
<ul id="myUL">
  <li><span class="caret">Beverages</span>
    <ul class="nested">
      <li>Water</li>
      <li>Coffee</li>
      <li><span class="caret">Tea</span>
        <ul class="nested">
          <li>Black Tea</li>
          <li>White Tea</li>
          <li><span class="caret">Green Tea</span>
            <ul class="nested">
              <li>Sencha</li>
              <li>Gyokuro</li>
              <li>Matcha</li>
              <li>Pi Lo Chun</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
`, {language: 'html'}).value;
document.getElementById('code_chatgptCSS').innerHTML = hljs.highlight(`
/* Style for the treeview */
.treeview {
    list-style: none;
    padding: 0;
}

/* Style for the treeview items */
.treeview li {
    margin: 0;
    padding: 8px 0 8px 20px;
    position: relative;
}

/* Style for the expand/collapse button */
.treeview li:before {
    content: "▶"; /* Unicode character for right arrow */
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

/* Style for the expanded state */
.treeview li.expanded:before {
    content: "▼"; /* Unicode character for down arrow */
}

/* Style for nested lists */
.treeview ul {
    list-style: none;
    margin: 0;
    padding-left: 20px;
}
    `, {language: 'css'}).value;
    document.getElementById('code_chatgptHTML').innerHTML = hljs.highlight(`
<ul class="treeview" id="myTree">
  <li>Item 1
    <ul>
      <li>Subitem 1.1</li>
      <li>Subitem 1.2
        <ul>
          <li>Subitem 1.2.1</li>
          <li>Subitem 1.2.2</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>Item 2</li>
  <li>Item 3
    <ul>
      <li>Subitem 3.1</li>
      <li>Subitem 3.2</li>
    </ul>
  </li>
</ul>
`, {language: 'html'}).value;
document.getElementById('code_chatgptJS').innerHTML = hljs.highlight(`
// Add click event listener to each treeview item
var treeviewItems = document.querySelectorAll('.treeview li');
treeviewItems.forEach(function(item) {
item.addEventListener('click', function() {
    if (item.classList.contains('expanded')) {
    item.classList.remove('expanded');
    } else {
    item.classList.add('expanded');
    }
});
});
  `, {language: 'js'}).value;
document.getElementById('code_claudeHTML').innerHTML = hljs.highlight(`
<ul class="tree">
  <li>
    <span class="caret">Parent 1</span> 
    <ul class="nested">
      <li>Child 1</li>
      <li>Child 2</li>
    </ul>
  </li>
  <li>
    <span class="caret">Parent 2</span>
    <ul class="nested">
      <li>Child 1</li> 
      <li>
        <span class="caret">Child 2</span>
        <ul class="nested">
          <li>Grandchild 1</li>
          <li>Grandchild 2</li>
        </ul>  
      </li>
    </ul>
  </li>
</ul>
`, {language: 'html'}).value;
document.getElementById('code_claudeCSS').innerHTML = hljs.highlight(`
/* Hide nested lists */
.nested {
  display: none;
}

/* Add arrow before parent list items */
.caret::before {
  content: "\\25B6";
  color: black;
  display: inline-block; 
  margin-right: 6px;
}

/* Rotate caret down when nested list is open */
.nested:show + .caret::before {
  transform: rotate(90deg);
}
`, {language: 'css'}).value;
document.getElementById('code_claudeJS').innerHTML = hljs.highlight(`
// Toggle display of nested lists on click
const carets = document.getElementsByClassName("caret");
for(let i = 0; i < carets.length; i++) {
  carets[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("show");
  }); 
}
`, {language: 'js'}).value;
document.getElementById('code_geminiHTML').innerHTML = hljs.highlight(`
<ul id="tree">
  <li>
    Parent 1
    <ul class="nested">
      <li>Child 1</li>
      <li>Child 2</li>
    </ul>
  </li>
  <li>
    Parent 2
    <ul class="nested">
      <li>Child 3</li>
      <li>Child 4</li>
    </ul>
  </li>
</ul>
`, {language: 'html'}).value;
document.getElementById('code_geminiCSS').innerHTML = hljs.highlight(`
#tree ul {
  display: none;
  margin: 0;
  padding: 0;
}

#tree li {
  cursor: pointer;
}

#tree li.expanded > ul {
  display: block;
}
`, {language: 'css'}).value;
document.getElementById('code_geminiJS').innerHTML = hljs.highlight(`
const listItems = document.querySelectorAll('#tree li');

listItems.forEach(listItem => {
  listItem.addEventListener('click', (event) => {
    const nestedList = listItem.querySelector('.nested');
    const isExpanded = listItem.classList.contains('expanded');

    listItem.classList.toggle('expanded');
    nestedList.style.display = isExpanded ? 'none' : 'block';
  });
});
`, {language: 'js'}).value;