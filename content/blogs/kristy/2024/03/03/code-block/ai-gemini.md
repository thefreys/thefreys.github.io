Here's an HTML snippet that displays a Python code snippet and makes it easy for the visitor to copy the code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Python Code Snippet</title>
  <style>
    .code-snippet {
      background-color: #f5f5f5;
      padding: 10px;
      border-radius: 5px;
      font-family: monospace;
      white-space: pre-wrap;
      overflow-x: auto; /* Enable horizontal scrolling for long lines */
    }

    .copy-button {
      display: inline-block;
      padding: 5px 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Python Code Example</h2>
  <pre class="code-snippet">
    def my_function(x, y):
      """This function adds two numbers and returns the sum."""
      return x + y
  </pre>
  <button class="copy-button" onclick="copyToClipboard()">Copy Code</button>

  <script>
    function copyToClipboard() {
      const codeSnippet = document.querySelector('.code-snippet').innerText;
      navigator.clipboard.writeText(codeSnippet).then(() => {
        alert("Python code copied to clipboard!");
      }, (err) => {
        console.error('Failed to copy code:', err);
        alert("Failed to copy code. Please try again.");
      });
    }
  </script>
</body>
</html>
```

This code snippet includes:

1. **HTML structure:** Basic HTML structure with head and body sections.
2. **Styling:** CSS styles the code snippet with a background color, padding, and a monospace font for better readability. It also enables horizontal scrolling for long lines and styles the copy button.
3. **Code snippet:** The Python code is wrapped in a `<pre>` tag with the class `code-snippet` for styling.
4. **Copy button:** A button with the class `copy-button` triggers the `copyToClipboard` function on click.
5. **JavaScript:** The `copyToClipboard` function uses the `navigator.clipboard.writeText` API to copy the text content of the code snippet to the clipboard. It displays an alert message based on success or failure.

**Note:** This method relies on the browser's `navigator.clipboard` API, which might not be supported in all browsers. Consider adding a fallback mechanism for older browsers that don't support this API.