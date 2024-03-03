Certainly! To display a Python code snippet and make it easy for visitors to copy the code, you can use the `<pre>` (preformatted text) and `<button>` elements along with a bit of JavaScript. Here's a simple HTML snippet for that:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Python Code Snippet</title>
  <style>
    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border: 1px solid #ccc;
      overflow-x: auto;
    }

    button {
      background-color: #007bff;
      color: #fff;
      padding: 5px 10px;
      cursor: pointer;
      border: none;
      border-radius: 3px;
    }
  </style>
</head>
<body>

  <pre id="pythonCode">
def hello_world():
    print("Hello, World!")

# Call the function
hello_world()
  </pre>

  <button onclick="copyCode()">Copy Code</button>

  <script>
    function copyCode() {
      var codeElement = document.getElementById('pythonCode');
      var range = document.createRange();
      range.selectNode(codeElement);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
      alert('Code copied to clipboard!');
    }
  </script>

</body>
</html>
```

In this example:

- The Python code is wrapped in a `<pre>` element, which preserves whitespace and line breaks.
- A "Copy Code" button is provided, and when clicked, it triggers the `copyCode` JavaScript function.
- The `copyCode` function selects the text within the `<pre>` element, copies it to the clipboard using `document.execCommand('copy')`, and then displays an alert to notify the user.

Feel free to customize the styles or structure based on your design preferences.