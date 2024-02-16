There are two main approaches to achieve this desired effect using CSS:

**1. Using the `::marker` pseudo-element:**

This approach is the most modern and efficient way to style individual list item markers. However, it has limited browser support (currently supported by Chromium-based browsers and Firefox).

Here's how to do it:

```css
ul {
  list-style: none; /* Remove default bullets */
}

ul li {
  position: relative;
  padding-left: 20px; /* Adjust padding as needed */
}

ul li::marker {
  content: "❤️"; /* First symbol */
  color: red; /* Adjust color as needed */
}

ul li ul li::marker {
  content: ""; /* Second symbol */
  color: gold; /* Adjust color as needed */
}

/* Repeat similar lines for each level with corresponding symbol and color */

ul li ul li ul li::marker {
  content: ""; /* Third symbol */
  color: green; /* Adjust color as needed */
}

/* ... and so on */

```

**2. Using content property and first-child pseudo-class:**

This approach works across most browsers but slightly less efficient and requires more CSS due to nested targeting.

Here's how to do it:

```css
ul {
  list-style: none; /* Remove default bullets */
}

ul li {
  position: relative;
  padding-left: 20px; /* Adjust padding as needed */
}

ul li:first-child {
  content: "❤️"; /* First symbol */
  color: red; /* Adjust color as needed */
  position: absolute;
  left: -20px; /* Adjust left position as needed */
}

ul li ul li:first-child {
  content: ""; /* Second symbol */
  color: gold; /* Adjust color as needed */
  position: absolute;
  left: -30px; /* Adjust left position as needed */
}

/* Repeat similar lines for each level with corresponding symbol and left position */

```

**Important notes:**

* Adjust the `padding-left` and `left` position values in each approach to align the symbols correctly.
* Replace the colors and symbols with your desired choices.
* Ensure you add similar lines for each level of nested lists using the next symbols in your sequence.

Remember, the first approach using `::marker` is preferred for modern browsers due to better performance and more targeted styling. Choose the approach that best suits your project's browser compatibility needs.
