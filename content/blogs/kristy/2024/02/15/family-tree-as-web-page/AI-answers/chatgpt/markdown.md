To display a family tree on your web page, you can use HTML and CSS to create a visual representation. You can leverage nested lists (ul and ol) to represent the hierarchy and use CSS to style and position the elements. Here's a simple example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Family Tree</title>
  <style>
    /* Style the tree */
    .tree {
      position: relative;
      padding: 20px;
    }

    /* Style the nodes (li elements) */
    .tree li {
      display: inline-block;
      list-style-type: none;
      text-align: center;
      position: relative;
      padding: 10px;
    }

    /* Style the connecting lines */
    .tree li::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      border-left: 1px solid #000;
      height: 100%;
    }

    /* Style the root node */
    .tree > li {
      text-align: center;
    }

    /* Style the connecting lines for the root node */
    .tree > li::before {
      left: 0;
      border-top: 1px solid #000;
      width: 100%;
    }
  </style>
</head>
<body>

<div class="tree">
  <ul>
    <!-- You as the root -->
    <li>You
      <ol>
        <!-- Your parents -->
        <li>Mother
          <ol>
            <!-- Maternal grandparents -->
            <li>Maternal Grandfather</li>
            <li>Maternal Grandmother</li>
          </ol>
        </li>
        <li>Father
          <ol>
            <!-- Paternal grandparents -->
            <li>Paternal Grandfather</li>
            <li>Paternal Grandmother</li>
          </ol>
        </li>
      </ol>
    </li>
  </ul>
</div>

</body>
</html>
```

This example uses CSS to style the tree, nodes, and connecting lines. You can customize the styling further to match your preferences. Additionally, you may want to add more details to each node, such as names and additional information, and adjust the styling accordingly.