Here is how you can use CSS to change the list item bullet points to use 5 different symbols in a nested hierarchy:

```css
/* Set base styles for lists */
ul {
  list-style: none; 
  padding-left: 1em;
}

/* First/root level list items */
.family-tree > li::before {
   content: "❤️";
   display: inline-block; 
   width: 1em;
   margin-left: -1em; 
}

/* Second nested level */
.family-tree > li ul > li::before {
   content: "💛";
}

/* Third nested level */ 
.family-tree > li ul > li ul > li::before {
   content: "💚";
}

/* Fourth nested level */
.family-tree > li ul > li ul > li ul > li::before {
   content: "💙";
}

/* Fifth nested level */  
.family-tree > li ul > li ul > li ul > li ul > li::before {
  content: "💜";
}
```

So the first root `<ul>` list items use ❤️,  the next nested level uses 💛 and so on through the hierarchy.

The `::before` pseudo element inserts the symbols, while other CSS resets styles. Customize symbols and styling further to taste!