You can achieve this by using the `:nth-child` selector in CSS to apply different symbols to different levels of nested `ul` elements. Here's an example using five different symbols (❤️ 💛 💚 💙 💜):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Family Tree with Symbols</title>
  <style>
    /* Define different symbols */
    .tree li::before {
      content: '❤️'; /* Default symbol for root level */
    }

    .tree li ul li::before {
      content: '💛'; /* Symbol for the second level */
    }

    .tree li ul li ul li::before {
      content: '💚'; /* Symbol for the third level */
    }

    .tree li ul li ul li ul li::before {
      content: '💙'; /* Symbol for the fourth level */
    }

    .tree li ul li ul li ul li ul li::before {
      content: '💜'; /* Symbol for the fifth level */
    }

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

In this example, each level of nesting has a different symbol. You can customize the symbols and styling as needed.