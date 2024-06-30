You can use the `onClick` event in combination with the `data-url` attribute to achieve this. Here's an example:

HTML:

```html
<table id="example" class="display" style="width:100%">
    <thead>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr data-url="https://example.com/page1">
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
        </tr>
        <tr data-url="https://example.com/page2">
            <td>Garrett Winters</td>
            <td>Accountant</td>
            <td>Tokyo</td>
            <td>63</td>
            <td>2011/07/25</td>
            <td>$170,750</td>
        </tr>
        <!-- ... other rows ... -->
    </tbody>
</table>
```

JavaScript:

```javascript
$(document).ready(function() {
    $('#example').DataTable();
    
    $('#example tbody').on('click', 'tr', function() {
        var url = $(this).data('url');
        window.open(url);
    });
});
```

In the HTML, each table row (`<tr>`) has a `data-url` attribute that specifies the URL for that row. In the JavaScript, we use the DataTables API to attach a click event listener to each row in the table body (`$('#example tbody').on('click', 'tr', function() {...})`). When a row is clicked, we get the URL from the `data-url` attribute and open it using `window.open()`.

Make sure to replace the example URLs in the `data-url` attributes with the actual URLs you want to open for each row.