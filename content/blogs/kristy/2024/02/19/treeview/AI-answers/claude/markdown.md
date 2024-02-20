Here is code to create a collapsible and expandable tree view from an unordered list with nested unordered lists using CSS and JavaScript:

```html
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
```

```css
/* Hide nested lists */
.nested {
  display: none;
}

/* Add arrow before parent list items */
.caret::before {
  content: "\25B6";
  color: black;
  display: inline-block; 
  margin-right: 6px;
}

/* Rotate caret down when nested list is open */
.nested:show + .caret::before {
  transform: rotate(90deg);
}
```

```js
// Toggle display of nested lists on click
const carets = document.getElementsByClassName("caret");
for(let i = 0; i < carets.length; i++) {
  carets[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("show");
  }); 
}
```

The key aspects are:

- Use the `caret` span to indicate an expandable parent item
- Hide all nested lists with `display: none` by default
- Toggle the `show` class on click to display the nested list
- Rotate the caret with CSS when nested list is visible

Let me know if any part needs more explanation!