There are two main approaches to turning an unordered list with nested lists into a collapsible and expandible treeview:

**1. Pure CSS Solution:**

This approach is simpler but offers limited customization and accessibility. Here's what you need:

**HTML:**
```html
<ul id="tree">
  <li>
    Parent 1
    <ul>
      <li>Child 1</li>
      <li>Child 2</li>
    </ul>
  </li>
  <li>
    Parent 2
    <ul>
      <li>Child 3</li>
      <li>Child 4</li>
    </ul>
  </li>
</ul>
```

**CSS:**
```css
#tree ul {
  display: none;
  margin: 0;
  padding: 0;
}

#tree li > ul {
  display: block; /* Ensure visibility of first-level children */
}

#tree li:before {
  content: "▸";
  cursor: pointer;
  display: inline-block;
  margin-right: 5px;
}

#tree li.expanded:before {
  content: "▾";
}

#tree li.expanded > ul {
  display: block;
}
```

**Explanation:**

* `#tree ul` hides all nested lists by default.
* `#tree li > ul` ensures first-level children are visible.
* The `:before` pseudo-element adds an indicator (`▸`) before each list item.
* The `expanded` class changes the indicator (`▾`) and displays the nested list.

**2. CSS and JavaScript Solution:**

This approach offers more flexibility, customization, and accessibility but requires JavaScript. Here's what you need:

**HTML:**
```html
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
```

**CSS:**
```css
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
```

**JavaScript:**
```javascript
const listItems = document.querySelectorAll('#tree li');

listItems.forEach(listItem => {
  listItem.addEventListener('click', (event) => {
    const nestedList = listItem.querySelector('.nested');
    const isExpanded = listItem.classList.contains('expanded');

    listItem.classList.toggle('expanded');
    nestedList.style.display = isExpanded ? 'none' : 'block';
  });
});
```

**Explanation:**

* This approach is similar to the pure CSS solution but uses classes and JavaScript.
* Click events on list items toggle the `expanded` class and display/hide the nested list using JavaScript.

**Additional Considerations:**

* You can customize the indicator, styles, and functionality according to your preferences.
* Ensure proper keyboard navigation and accessibility for screen readers.
* Explore advanced libraries for complex treeview features like checkboxes, drag and drop, or custom animations.

Remember to choose the approach that best suits your needs and complexity requirements.