You can convert every table on a page to use DataTables.net by following these steps:

1. Include the required libraries: DataTables.net library and jQuery.
2. Write JavaScript code to initialize DataTables for each table on the page.

Here's a step-by-step guide with code examples:

1. Include the required libraries in your HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convert Tables to DataTables</title>
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.6/css/jquery.dataTables.css">
</head>
<body>

<!-- Your HTML content with tables -->

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.11.6/js/jquery.dataTables.min.js"></script>
<script>
// Your JavaScript code will go here
</script>

</body>
</html>
```

2. Write JavaScript code to initialize DataTables for each table:

```javascript
$(document).ready(function() {
    $('table').each(function() {
        $(this).DataTable();
    });
});
```

This code selects each `<table>` element on the page and initializes DataTables for it.

So, when you combine the HTML and JavaScript code together, it will convert every table on the page into DataTables. Make sure your tables have proper structure (like `<thead>`, `<tbody>`, etc.) for DataTables to work effectively.