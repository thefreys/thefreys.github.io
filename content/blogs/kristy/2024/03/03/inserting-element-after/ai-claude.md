To insert an element after another element with a specific ID in JavaScript, you can use the insertAdjacentElement() method.

Here is an example:

```js
// Get reference to element you want to insert after 
const elementAfter = document.getElementById("myId");

// Create new element 
const newElement = document.createElement("p");
newElement.innerText = "New element";

// Insert new element directly after the other element
elementAfter.insertAdjacentElement("afterend", newElement);
```

Breaking this down:

- Get a reference to the existing element you want to insert after (`elementAfter`)
- Create the new element (`newElement`) 
- Use `insertAdjacentElement()` on the reference element, specifying:
  - The position as `"afterend"` (to insert after the element)
  - The element to insert (`newElement`)

So this allows you to precisely insert the new element directly after the existing one, with just a specific ID to reference.