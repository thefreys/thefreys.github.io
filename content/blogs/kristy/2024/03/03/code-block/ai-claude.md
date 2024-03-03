Here is an HTML snippet to display and allow easy copying of a Python code snippet on a website:

```html
<div class="code-snippet">
  <div class="code-label">Python</div>
  
  <pre>
    <code>
def say_hello(name):
  print(f"Hello {name}!")
    </code>  
  </pre>
  
  <button class="copy-code-btn">Copy</button>
</div>
```

Explanation:

- The overall `<div>` wraps the code snippet 
- The `<div class="code-label">` shows the language
- The `<pre><code>` tags display the code and preserve formatting like indentation
- The `<button>` with class `copy-code-btn` will be the clickable button to copy the code. This can be hooked up to JavaScript copy functionality

Some additional things you can do:

- Style it with CSS for clean looks 
- Add JavaScript to make the copy button work 
- Syntax highlight the code using libraries like PrismJS

This gives you a good accessible starting point for displaying code snippets that can be copied!