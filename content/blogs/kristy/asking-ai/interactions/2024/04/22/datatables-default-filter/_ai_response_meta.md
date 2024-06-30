(link unavailable) provides a feature called "searching" that allows you to filter rows based on a custom condition. You can use the search() method to set a default filter when the table is initialized.
Here is an example:
JavaScript
$('#myTable').DataTable({
  "search": {
    "search": "filter_value"
  },
  "columns": [
    { "title": "Column1" },
    { "title": "Column2" }
  ]
});
In this example, the table will be initialized with a default filter of "filter_value" applied to all columns.
If you want to filter based on a specific column, you can specify the column index in the search() method:
JavaScript
$('#myTable').DataTable({
  "search": {
    "search": "filter_value",
    "columns": [0] // filter only on the first column
  },
  "columns": [
    { "title": "Column1" },
    { "title": "Column2" }
  ]
});
You can also use a function to define a custom filter condition:
JavaScript
$('#myTable').DataTable({
  "search": {
    "search": function(row) {
      // custom filter logic here
      return row.column1.indexOf("filter_value") > -1;
    }
  },
  "columns": [
    { "title": "Column1" },
    { "title": "Column2" }
  ]
});
Make sure to check the (link unavailable) documentation for more information on the search() method and custom filtering.
Also, you can use rows().filter() method to filter rows based on a custom condition.
JavaScript
var table = $('#myTable').DataTable();
table.rows().filter(function(index, row) {
  // custom filter logic here
  return row.column1.indexOf("filter_value") > -1;
}).draw();
This will filter the rows and redraw the table.