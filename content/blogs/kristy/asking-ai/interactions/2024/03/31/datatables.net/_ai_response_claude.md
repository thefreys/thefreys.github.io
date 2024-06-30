To convert every table on a page to use the DataTables.net library in JavaScript, you can follow these steps:

1. **Include the DataTables library files**
   You need to include the required DataTables CSS and JavaScript files in your HTML file. You can either download the files from the official DataTables website (https://datatables.net/download/) or use a Content Delivery Network (CDN) link.

   ```html
   <!-- DataTables CSS -->
   <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">

   <!-- jQuery library (required for DataTables) -->
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

   <!-- DataTables JS -->
   <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
   ```

2. **Initialize DataTables for each table**
   After including the required files, you can use the following JavaScript code to initialize DataTables for every table on the page:

   ```javascript
   $(document).ready(function() {
     $('table').DataTable();
   });
   ```

   This code selects all `<table>` elements on the page and initializes DataTables for each of them using the default configuration.

If you want to apply specific configuration options or customize the behavior of DataTables, you can pass an object with the desired options to the `DataTable()` function:

```javascript
$(document).ready(function() {
  $('table').DataTable({
    // DataTables configuration options
    paging: true,
    searching: true,
    ordering: true,
    // ... add more options as needed
  });
});
```

By running this code, all `<table>` elements on the page will be converted to use the DataTables functionality, providing features like pagination, searching, sorting, and more.

Note: Make sure to include the DataTables library files and the jQuery library before initializing DataTables. Additionally, wrap the initialization code inside the `$(document).ready()` function to ensure that it runs after the HTML elements have been fully loaded.