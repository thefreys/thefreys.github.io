## content

### typography

```html
<p class="display-1">Display 1</p>
<p class="display-2">Display 2</p>
<p class="display-3">Display 3</p>
<p class="display-4">Display 4</p>
<p class="display-5">Display 5</p>
<p class="display-6">Display 6</p>
```  

```html
<p class="h1">Heading 1</p>
<p class="h2">Heading 2</p>
<p class="h3">Heading 3</p>
<p class="h4">Heading 4</p>
<p class="h5">Heading 5</p>
<p class="h6">Heading 6</p>
```  

```html
<p class="lead">
This is a lead paragraph. It stands out from regular paragraphs.
</p>
```  

```html
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
```  

```html
<hr>
```  

```html
<blockquote class="blockquote">
<p>A well-known quote, contained in a blockquote element.</p>
<footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```  

```html
<ul class="list-unstyled">
<li>This is a list.</li>
<li>It appears completely unstyled.</li>
<li>Structurally, it's still a list.</li>
<li>However, this style only applies to immediate child elements.</li>
<li>Nested lists:
    <ul>
    <li>are unaffected by this style</li>
    <li>will still show a bullet</li>
    <li>and have appropriate left margin</li>
    </ul>
</li>
<li>This may still come in handy in some situations.</li>
</ul>
```  

```html
<ul class="list-inline">
<li class="list-inline-item">This is a list item.</li>
<li class="list-inline-item">And another one.</li>
<li class="list-inline-item">But they're displayed inline.</li>
</ul>
```  

### images

```html
<svg class="bd-placeholder-img bd-placeholder-img-lg img-fluid" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Responsive image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Responsive image</text></svg>
```  

```html
<svg class="bd-placeholder-img img-thumbnail" width="200" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200" preserveAspectRatio="xMidYMid slice" focusable="false"><title>A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">200x200</text></svg>
```  

### tables

```html
<table class="table table-striped">
<thead>
<tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
</tr>
</thead>
<tbody>
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
<tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
</tr>
<tr>
    <th scope="row">3</th>
    <td colspan="2">Larry the Bird</td>
    <td>@twitter</td>
</tr>
</tbody>
</table>
```  

```html
<table class="table table-dark table-borderless">
<thead>
<tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
</tr>
</thead>
<tbody>
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
<tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
</tr>
<tr>
    <th scope="row">3</th>
    <td colspan="2">Larry the Bird</td>
    <td>@twitter</td>
</tr>
</tbody>
</table>
```  

```html
<table class="table table-hover">
<thead>
<tr>
    <th scope="col">Class</th>
    <th scope="col">Heading</th>
    <th scope="col">Heading</th>
</tr>
</thead>
<tbody>
<tr>
    <th scope="row">Default</th>
    <td>Cell</td>
    <td>Cell</td>
</tr>

<tr class="table-primary">
    <th scope="row">Primary</th>
    <td>Cell</td>
    <td>Cell</td>
</tr>
<tr class="table-secondary">
    <th scope="row">Secondary</th>
    <td>Cell</td>
    <td>Cell</td>
</tr>
<tr class="table-success">
    <th scope="row">Success</th>
    <td>Cell</td>
    <td>Cell</td>
</tr>
<tr class="table-danger">
    <th scope="row">Danger</th>
    <td>Cell</td>
    <td>Cell</td>
</tr>
<tr class="table-warning">
    <th scope="row">Warning</th>
    <td>Cell</td>
    <td>Cell</td>
</tr>
<tr class="table-info">
    <th scope="row">Info</th>
    <td>Cell</td>
    <td>Cell</td>
</tr>
<tr class="table-light">
    <th scope="row">Light</th>
    <td>Cell</td>
    <td>Cell</td>
</tr>
<tr class="table-dark">
    <th scope="row">Dark</th>
    <td>Cell</td>
    <td>Cell</td>
</tr>
</tbody>
</table>
```  

```html
<table class="table table-sm table-bordered">
<thead>
<tr>
    <th scope="col">#</th>
    <th scope="col">First</th>
    <th scope="col">Last</th>
    <th scope="col">Handle</th>
</tr>
</thead>
<tbody>
<tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr>
<tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
</tr>
<tr>
    <th scope="row">3</th>
    <td colspan="2">Larry the Bird</td>
    <td>@twitter</td>
</tr>
</tbody>
</table>
```  

### figures

```html
<figure class="figure">
<svg class="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 400x300" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">400x300</text></svg>
<figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
```