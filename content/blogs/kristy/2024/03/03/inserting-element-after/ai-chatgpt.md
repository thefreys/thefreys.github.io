In JavaScript, you can use the DOM (Document Object Model) to manipulate HTML elements. To insert an element directly after another one with a specific ID, you can follow these steps:

1. **Get a reference to the element after which you want to insert the new element.**
2. **Create the new element you want to insert.**
3. **Use the `insertBefore` or `insertAdjacentElement` method to insert the new element after the reference element.**

Here's an example using `insertBefore`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Insert Element After Another</title>
</head>
<body>

  <div id="referenceElement">This is the reference element.</div>

  <script>
    // Step 1: Get a reference to the element after which you want to insert the new element
    var referenceElement = document.getElementById("referenceElement");

    // Step 2: Create the new element
    var newElement = document.createElement("div");
    newElement.textContent = "This is the new element.";

    // Step 3: Insert the new element after the reference element
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
  </script>

</body>
</html>
```

In this example, a new `div` element is created and inserted after the element with the ID "referenceElement." The `insertBefore` method is used with the `nextSibling` property to specify the position of the new element relative to the reference element.

Alternatively, you can use the `insertAdjacentElement` method, which allows you to specify the position more explicitly:

```javascript
referenceElement.insertAdjacentElement('afterend', newElement);
```

This line achieves the same result as the `insertBefore` example. The `'afterend'` argument indicates that the new element should be inserted immediately after the reference element.