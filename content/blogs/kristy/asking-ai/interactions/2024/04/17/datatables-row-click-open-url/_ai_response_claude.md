To open a URL specified in the 4th column of a DataTable when a user clicks on a row, you can use the `rowCallback` option in your DataTable initialization. Here's an example:

```javascript
$(document).ready(function() {
  $('#myTable').DataTable({
    rowCallback: function(row, data, index) {
      // Get the URL from the 4th column
      var url = data[3];

      // Add a click event handler to the row
      $(row).click(function() {
        // Open the URL in a new window or tab
        window.open(url, '_blank');
      });
    }
  });
});
```

Here's how it works:

1. In the `rowCallback` function, we're passing in the `row`, `data`, and `index` parameters. The `data` parameter is an array of the values in each column for the current row.

2. We're getting the URL from the 4th column (index 3) of the `data` array.

3. We're then adding a click event handler to the `row` element, which will open the URL in a new window or tab when the user clicks on the row.

The `window.open(url, '_blank')` part of the code opens the URL in a new window or tab. If you want to open it in the same window, you can remove the `'_blank'` argument.

Note that the `rowCallback` function is called for each row in the DataTable, so this code will add the click event handler to every row in the table.