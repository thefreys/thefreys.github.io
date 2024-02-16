Here is one way to display a family tree from a nested list structure on a web page in the form of an interactive expandable tree:

1. Use the nested lists (ul and ol elements) as the basis for the tree structure in the HTML. Add classes like "family-tree" and "family-member" for styling hooks.

```html
<ul class="family-tree">
  <li class="family-member">[...]</li>
  <li class="family-member">
    <ol>
      <li class="family-member">[...]</li>  
    </ol>
  </li>
</ul>
```

2. Use CSS to style it. Display top level as flex or grid. Hide nested lists.

```css
.family-tree {
  display: flex; 
}

.family-member ol {
  display: none;
}
```

3. Use JavaScript to toggle visibility of nested lists on click of family member to expand/collapse tree.

```js
const members = document.querySelectorAll(".family-member");

members.forEach(member => {
  member.addEventListener("click", e => {
    member.querySelector("ol").classList.toggle("show"); 
  });
});
```

4. Add additional CSS for nested visible state.

```css
.family-member ol.show {
  display: block;
}
```

This will allow the nested list family tree to be displayed as an interactive expandable tree. More styling can enhance it further.