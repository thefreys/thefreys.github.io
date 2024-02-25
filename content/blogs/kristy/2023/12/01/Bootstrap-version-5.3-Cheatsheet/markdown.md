
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


## forms

### overview

```html
<form>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
<div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
<div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
<div class="mb-3">
    <label for="exampleSelect" class="form-label">Select menu</label>
    <select class="form-select" id="exampleSelect">
    <option selected="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
</div>
<div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<fieldset class="mb-3">
    <legend>Radios buttons</legend>
    <div class="form-check">
    <input type="radio" name="radios" class="form-check-input" id="exampleRadio1">
    <label class="form-check-label" for="exampleRadio1">Default radio</label>
    </div>
    <div class="mb-3 form-check">
    <input type="radio" name="radios" class="form-check-input" id="exampleRadio2">
    <label class="form-check-label" for="exampleRadio2">Another radio</label>
    </div>
</fieldset>
<div class="mb-3">
    <label class="form-label" for="customFile">Upload</label>
    <input type="file" class="form-control" id="customFile">
</div>
<div class="mb-3 form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked="">
    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<div class="mb-3">
    <label for="customRange3" class="form-label">Example range</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3">
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
```  

### disabled-forms

```html
<form>
<fieldset disabled="" aria-label="Disabled fieldset example">
    <div class="mb-3">
    <label for="disabledTextInput" class="form-label">Disabled input</label>
    <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="mb-3">
    <label for="disabledSelect" class="form-label">Disabled select menu</label>
    <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
    </select>
    </div>
    <div class="mb-3">
    <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled="">
        <label class="form-check-label" for="disabledFieldsetCheck">
        Can't check this
        </label>
    </div>
    </div>
    <fieldset class="mb-3">
    <legend>Disabled radios buttons</legend>
    <div class="form-check">
        <input type="radio" name="radios" class="form-check-input" id="disabledRadio1" disabled="">
        <label class="form-check-label" for="disabledRadio1">Disabled radio</label>
    </div>
    <div class="mb-3 form-check">
        <input type="radio" name="radios" class="form-check-input" id="disabledRadio2" disabled="">
        <label class="form-check-label" for="disabledRadio2">Another radio</label>
    </div>
    </fieldset>
    <div class="mb-3">
    <label class="form-label" for="disabledCustomFile">Upload</label>
    <input type="file" class="form-control" id="disabledCustomFile" disabled="">
    </div>
    <div class="mb-3 form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="disabledSwitchCheckChecked" checked="" disabled="">
    <label class="form-check-label" for="disabledSwitchCheckChecked">Disabled checked switch checkbox input</label>
    </div>
    <div class="mb-3">
    <label for="disabledRange" class="form-label">Disabled range</label>
    <input type="range" class="form-range" min="0" max="5" step="0.5" id="disabledRange">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</fieldset>
</form>
```  

### sizing

```html
<div class="mb-3">
<input class="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example">
</div>
<div class="mb-3">
<select class="form-select form-select-lg" aria-label=".form-select-lg example">
    <option selected="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
</div>
<div class="mb-3">
<input type="file" class="form-control form-control-lg" aria-label="Large file input example">
</div>
```  

```html
<div class="mb-3">
<input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example">
</div>
<div class="mb-3">
<select class="form-select form-select-sm" aria-label=".form-select-sm example">
    <option selected="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
</div>
<div class="mb-3">
<input type="file" class="form-control form-control-sm" aria-label="Small file input example">
</div>
```  

### input-group

```html
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon1">@</span>
<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
<div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
<div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
<span class="input-group-text" id="basic-addon2">@example.com</span>
<div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
<label for="basic-url" class="form-label">Your vanity URL</label>
<div class="input-group mb-3">
<span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
</div>
<div class="input-group mb-3">
<span class="input-group-text">$</span>
<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
<span class="input-group-text">.00</span>
</div>
<div class="input-group">
<span class="input-group-text">With textarea</span>
<textarea class="form-control" aria-label="With textarea"></textarea>
</div>
```  

### floating-labels">

```html
<form>
<div class="form-floating mb-3">
    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
    <label for="floatingInput">Email address</label>
<div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
<div class="form-floating">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
    <label for="floatingPassword">Password</label>
<div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
</form>
```  

### validation

```html
<form class="row g-3">
<div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationServer01" value="Mark" required="">
    <div class="valid-feedback">
    Looks good!
    </div>
<div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
<div class="col-md-4">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control is-valid" id="validationServer02" value="Otto" required="">
    <div class="valid-feedback">
    Looks good!
    </div>
</div>
<div class="col-md-4">
    <label for="validationServerUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
    <span class="input-group-text" id="inputGroupPrepend3">@</span>
    <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3" required="">
    <div class="invalid-feedback">
        Please choose a username.
    </div>
    <div data-lastpass-icon-root="true" style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;"></div></div>
</div>
<div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" required="">
    <div class="invalid-feedback">
    Please provide a valid city.
    </div>
</div>
<div class="col-md-3">
    <label for="validationServer04" class="form-label">State</label>
    <select class="form-select is-invalid" id="validationServer04" required="">
    <option selected="" disabled="" value="">Choose...</option>
    <option>...</option>
    </select>
    <div class="invalid-feedback">
    Please select a valid state.
    </div>
</div>
<div class="col-md-3">
    <label for="validationServer05" class="form-label">Zip</label>
    <input type="text" class="form-control is-invalid" id="validationServer05" required="">
    <div class="invalid-feedback">
    Please provide a valid zip.
    </div>
</div>
<div class="col-12">
    <div class="form-check">
    <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required="">
    <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
    </label>
    <div class="invalid-feedback">
        You must agree before submitting.
    </div>
    </div>
</div>
<div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>
```  


## components

### accordion

```html
<div class="accordion" id="accordionExample">
<div class="accordion-item">
    <h4 class="accordion-header">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
    </button>
    </h4>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
<div class="accordion-item">
    <h4 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
    </button>
    </h4>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
<div class="accordion-item">
    <h4 class="accordion-header">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
    </button>
    </h4>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
</div>
</div>
```  

### alerts

```html

<div class="alert alert-primary alert-dismissible fade show" role="alert">
A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-secondary alert-dismissible fade show" role="alert">
A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-success alert-dismissible fade show" role="alert">
A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-danger alert-dismissible fade show" role="alert">
A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-info alert-dismissible fade show" role="alert">
A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-light alert-dismissible fade show" role="alert">
A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
<div class="alert alert-dark alert-dismissible fade show" role="alert">
A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```  

```html
<div class="alert alert-success" role="alert">
<h4 class="alert-heading">Well done!</h4>
<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
<hr>
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
```  

### badge

```html
<p class="h1">Example heading <span class="badge bg-primary">New</span></p>
<p class="h2">Example heading <span class="badge bg-secondary">New</span></p>
<p class="h3">Example heading <span class="badge bg-success">New</span></p>
<p class="h4">Example heading <span class="badge bg-danger">New</span></p>
<p class="h5">Example heading <span class="badge text-bg-warning">New</span></p>
<p class="h6">Example heading <span class="badge text-bg-info">New</span></p>
<p class="h6">Example heading <span class="badge text-bg-light">New</span></p>
<p class="h6">Example heading <span class="badge bg-dark">New</span></p>
```  

```html

<span class="badge rounded-pill bg-primary">Primary</span>
<span class="badge rounded-pill bg-secondary">Secondary</span>
<span class="badge rounded-pill bg-success">Success</span>
<span class="badge rounded-pill bg-danger">Danger</span>
<span class="badge rounded-pill text-bg-warning">Warning</span>
<span class="badge rounded-pill text-bg-info">Info</span>
<span class="badge rounded-pill text-bg-light">Light</span>
<span class="badge rounded-pill bg-dark">Dark</span>
```  

### breadcrumb

```html
<nav aria-label="breadcrumb">
<ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
</ol>
</nav>
```  

### buttons

```html

<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
```  

```html

<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
```  

```html
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-primary">Standard button</button>
<button type="button" class="btn btn-primary btn-lg">Large button</button>
```  

### button-group

```html
<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
<div class="btn-group me-2" role="group" aria-label="First group">
    <button type="button" class="btn btn-secondary">1</button>
    <button type="button" class="btn btn-secondary">2</button>
    <button type="button" class="btn btn-secondary">3</button>
    <button type="button" class="btn btn-secondary">4</button>
</div>
<div class="btn-group me-2" role="group" aria-label="Second group">
    <button type="button" class="btn btn-secondary">5</button>
    <button type="button" class="btn btn-secondary">6</button>
    <button type="button" class="btn btn-secondary">7</button>
</div>
<div class="btn-group" role="group" aria-label="Third group">
    <button type="button" class="btn btn-secondary">8</button>
</div>
</div>
```  

### card

```html
<div class="row  row-cols-1 row-cols-md-2 g-4">
<div class="col">
    <div class="card">
    <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
</div>
<div class="col">
    <div class="card">
    <div class="card-header">
        Featured
    </div>
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-body-secondary">
        2 days ago
    </div>
    </div>
</div>
<div class="col">
    <div class="card">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
    </ul>
    <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
    </div>
</div>
<div class="col">
    <div class="card">
    <div class="row g-0">
        <div class="col-md-4">
        <svg class="bd-placeholder-img" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg>
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
```  

### carousel

```html
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
</div>
<div class="carousel-inner">
    <div class="carousel-item">
    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#555" dy=".3em">First slide</text></svg>
    <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
    </div>
    </div>
    <div class="carousel-item active">
    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#666"></rect><text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text></svg>
    <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
    </div>
    </div>
    <div class="carousel-item">
    <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#555"></rect><text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text></svg>
    <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
    </div>
    </div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>
```  

### dropdowns

```html
<div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
<div class="dropdown">
    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
    </button>
    <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
    </button>
    <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
<div class="dropdown">
    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
    </button>
    <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
</div>
```  

```html
<div class="btn-group">
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div><!-- /btn-group -->
<div class="btn-group">
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div><!-- /btn-group -->
<div class="btn-group">
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div><!-- /btn-group -->
<div class="btn-group">
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-info dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div><!-- /btn-group -->
<div class="btn-group">
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-warning dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div><!-- /btn-group -->
<div class="btn-group">
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
    <span class="visually-hidden">Toggle Dropdown</span>
</button>
<ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
</ul>
</div><!-- /btn-group -->
```  

```html
<div class="btn-group w-100 align-items-center justify-content-between flex-wrap">
<div class="dropend">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropend button
    </button>
    <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
<div class="dropup">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropup button
    </button>
    <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
<div class="dropstart">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart button
    </button>
    <ul class="dropdown-menu">
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
</div>
```  

```html
<div class="btn-group">
<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    End-aligned menu
    </button>
    <ul class="dropdown-menu dropdown-menu-end">
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
</div>
```  

### list-group

```html
<ul class="list-group">
<li class="list-group-item disabled" aria-disabled="true">A disabled item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A fourth item</li>
<li class="list-group-item">And a fifth one</li>
</ul>
```  

```html
<ul class="list-group list-group-flush">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A fourth item</li>
<li class="list-group-item">And a fifth one</li>
</ul>
```  

```html
<div class="list-group">
<a href="#" class="list-group-item list-group-item-action">A simple default list group item</a>

<a href="#" class="list-group-item list-group-item-action list-group-item-primary">A simple primary list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-secondary">A simple secondary list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-success">A simple success list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-danger">A simple danger list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-warning">A simple warning list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-info">A simple info list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-light">A simple light list group item</a>
<a href="#" class="list-group-item list-group-item-action list-group-item-dark">A simple dark list group item</a>
</div>
```  

### modal

```html
<div class="d-flex justify-content-between flex-wrap">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalDefault">
    Launch demo modal
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropLive">
    Launch static backdrop modal
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
    Vertically centered scrollable modal
</button>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalFullscreen">
    Full screen
</button>
</div>
```  

### navs

```html
<nav class="nav">
<a class="nav-link active" aria-current="page" href="#">Active</a>
<a class="nav-link" href="#">Link</a>
<a class="nav-link" href="#">Link</a>
<a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
```  

```html
<nav>
<div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabindex="-1">Profile</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" tabindex="-1">Contact</button>
</div>
</nav>
<div class="tab-content" id="nav-tabContent">
<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <p>This is some placeholder content the <strong>Home tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
</div>
<div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
    <p>This is some placeholder content the <strong>Profile tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
</div>
<div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
    <p>This is some placeholder content the <strong>Contact tab's</strong> associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
</div>
</div>
```  

```html
<ul class="nav nav-pills">
<li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</li>
</ul>
```  

### navbar

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="/docs/5.3/assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy" style="filter: invert(1) grayscale(100%) brightness(200%);">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>
        <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
    </ul>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-dark" type="submit">Search</button>
    </form>
    </div>
</div>
</nav>

<nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
<div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img src="/docs/5.3/assets/brand/bootstrap-logo-white.svg" width="38" height="30" class="d-inline-block align-top" alt="Bootstrap" loading="lazy">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent2">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
        </a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </li>
        <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
    </ul>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Search</button>
    </form>
    </div>
</div>
</nav>
```  

### pagination

```html
<nav aria-label="Pagination example">
<ul class="pagination pagination-sm">
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
    <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
</ul>
</nav>
```  

```html
<nav aria-label="Standard pagination example">
<ul class="pagination">
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">«</span>
    </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
    <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">»</span>
    </a>
    </li>
</ul>
</nav>
```  

```html
<nav aria-label="Another pagination example">
<ul class="pagination pagination-lg flex-wrap">
    <li class="page-item disabled">
    <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
    <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
    <a class="page-link" href="#">Next</a>
    </li>
</ul>
</nav>
```  

### popovers

```html
<button type="button" class="btn btn-lg btn-danger" data-bs-toggle="popover" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover title">Click to toggle popover</button>
```  

```html
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on top
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="right" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on end
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on bottom
</button>
<button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="left" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
Popover on start
</button>
```  

### progress

```html
<div class="progress mb-3" role="progressbar" aria-label="Example with label" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar">0%</div>
</div>
<div class="progress mb-3" role="progressbar" aria-label="Success example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar bg-success w-25">25%</div>
</div>
<div class="progress mb-3" role="progressbar" aria-label="Info example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar text-bg-info w-50">50%</div>
</div>
<div class="progress mb-3" role="progressbar" aria-label="Warning example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar text-bg-warning w-75">75%</div>
</div>
<div class="progress" role="progressbar" aria-label="Danger example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar bg-danger w-100">100%</div>
</div>
```  

```html
<div class="progress-stacked">
<div class="progress" role="progressbar" aria-label="Segment one - default example" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar"></div>
</div>
<div class="progress" role="progressbar" aria-label="Segment two - animated striped success example" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
    <div class="progress-bar progress-bar-striped progress-bar-animated bg-success"></div>
</div>
</div>
```  

### scrollspy

```html
<div class="bd-example">
<nav id="navbar-example2" class="navbar bg-body-tertiary px-3">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul class="nav nav-pills">
    <li class="nav-item">
        <a class="nav-link" href="#scrollspyHeading1">First</a>
    </li>
    <li class="nav-item">
        <a class="nav-link active" href="#scrollspyHeading2">Second</a>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Dropdown</a>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#scrollspyHeading3">Third</a></li>
        <li><a class="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
        </ul>
    </li>
    </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example position-relative mt-2 overflow-auto" tabindex="0">
    <h4 id="scrollspyHeading1">First heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading2">Second heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading3">Third heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading4">Fourth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
    <h4 id="scrollspyHeading5">Fifth heading</h4>
    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
</div>
</div>
```
### spinners

```html

<div class="spinner-border text-primary" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
<span class="visually-hidden">Loading...</span>
</div>
```  

```html

<div class="spinner-grow text-primary" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
<span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
<span class="visually-hidden">Loading...</span>
</div>
```  

### toasts

```html
<div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
<div class="toast-header">
    <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
    <strong class="me-auto">Bootstrap</strong>
    <small class="text-body-secondary">11 mins ago</small>
    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
</div>
<div class="toast-body">
    Hello, world! This is a toast message.
</div>
</div>
```  

### tooltips

```html
<div class="bd-example-snippet bd-code-snippet"><div class="bd-example m-0 border-0 tooltip-demo">
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">Tooltip on top</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on end">Tooltip on end</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on start">Tooltip on start</button>
<button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">Tooltip with HTML</button>
```  
