While directly converting every table on a page isn't the most recommended approach, here's how you can achieve it in JavaScript using DataTables.net:

**1. Include Libraries:**

Make sure you have jQuery and DataTables.net libraries loaded in your HTML:

```html
<script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
<script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>
```

**2. Loop through tables:**

Use JavaScript to find all tables and iterate through them:

```javascript
$(document).ready(function() {
  $("table").each(function() {
    // Convert each table to DataTable
    $(this).DataTable();
  });
});
```

**Explanation:**

- `$(document).ready(function() { ... })` ensures the code runs after the document is loaded.
- `$("table")` selects all elements with the `table` tag.
- `.each(function() { ... })` loops through each selected table.
- `$(this).DataTable();` initializes the current table as a DataTable. 

**Important Considerations:**

* This approach might not be ideal for all situations. Consider if every table needs the full functionality of DataTables. 
* You might want to add checks or configuration options within the loop to customize DataTables behavior for specific tables.
* DataTables offers functionalities like searching, sorting, and pagination.  These features might not be useful for all tables.

**Alternative Approach:**

For better control, consider adding a class to the tables you want to convert and target them specifically:

```html
<table class="data-table">
  </table>
```

```javascript
$(document).ready(function() {
  $(".data-table").DataTable();
});
```

This allows you to choose which tables become DataTables and potentially configure them differently.
