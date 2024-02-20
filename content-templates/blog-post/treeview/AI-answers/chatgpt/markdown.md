Certainly! You can create a collapsible and expandable treeview using HTML, CSS, and JavaScript. Here's a simple example for you:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
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
  </style>
</head>
<body>

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

<script>
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
</script>

</body>
</html>
```

This example uses CSS for styling and JavaScript to toggle the `expanded` class on the treeview items when they are clicked. The Unicode characters for right and down arrows are used to indicate the expand/collapse state. You can customize the styles and expand/collapse indicators based on your preference.