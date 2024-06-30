To default a DataTables table to only show a set of rows that match a custom filter condition, you can use the `search.search()` method in combination with the `draw()` method. Here's an example of how you can achieve this:

1. First, initialize the DataTables instance as usual:

```javascript
var table = $('#myTable').DataTable();
```

2. After initializing the DataTables instance, you can use the `search.search()` method to set a custom search filter and then call the `draw()` method to re-draw the table with the filtered data:

```javascript
// Set the custom search filter
table.search('yourFilterCondition').draw();
```

Replace `'yourFilterCondition'` with the condition you want to filter the rows by. The condition can be a string or a regular expression.

For example, if you want to show only rows where the "Status" column has the value "Active", you could use:

```javascript
table.search('Active$', true, false).draw();
```

The `true` parameter in `search()` indicates that the search should be treated as a regular expression, and the `false` parameter indicates that the search should not be case-sensitive.

3. Optionally, you can also set the `searchDelay` option to a higher value (e.g., 1000 milliseconds) to allow the user to type the entire filter string before the table is redrawn:

```javascript
var table = $('#myTable').DataTable({
    searchDelay: 1000
});
```

By doing this, the table will only be redrawn after the user stops typing for 1 second, improving performance for large tables.

This approach allows you to set the initial state of the table to show only the rows that match your custom filter condition. The user can then interact with the table and adjust the filter as needed.