To default your DataTable to only show a set of rows that match a custom filter condition, you can use the `search()` API method to apply a search to a specific column. Here's an example of how you might set this up:

```javascript
$(document).ready(function() {
  var table = $('#yourTableId').DataTable();

  // Apply the search
  table.columns(yourColumnIndex).search('Your Custom Filter').draw();
});
```

Replace `yourTableId` with the ID of your table, `yourColumnIndex` with the index of the column you want to filter by, and `'Your Custom Filter'` with the condition you want to match.

Remember to call the `draw()` method after setting the search to update the table. This will filter the rows initially and display only those that match your custom condition when the DataTable loads.

Source: Conversation with Bing, 4/22/2024
(1) Change the default number of rows to display on one "page". https://stackoverflow.com/questions/19965934/change-the-default-number-of-rows-to-display-on-one-page.
(2) Change values of select box of "show 10 entries" of jquery datatable. https://stackoverflow.com/questions/10630853/change-values-of-select-box-of-show-10-entries-of-jquery-datatable.
(3) DataTables: filter rows based on value in column - Stack Overflow. https://stackoverflow.com/questions/29569492/datatables-filter-rows-based-on-value-in-column.
(4) How to show all rows by default in JQuery DataTable. https://stackoverflow.com/questions/9443773/how-to-show-all-rows-by-default-in-jquery-datatable.
(5) undefined. https://datatables.net/examples/advanced_init/length_menu.html.