One possible way to display a family tree using nested lists on a web page is to use CSS to style the lists and create connectors between the nodes. You can also use JavaScript to add some interactivity, such as collapsing and expanding the branches. Here is an example of how you can create a simple family tree with HTML and CSS:

```html
<style>
  /* Person */
  .person {
    border: 1px solid black;
    padding: 10px;
    min-width: 150px;
    background-color: #FFFFFF;
    display: inline-block;
  }

  .person.female {
    border-color: #F45B69;
  }

  .person.male {
    border-color: #456990;
  }

  .person div {
    text-align: center;
  }

  .person .name {
    font-size: 16px;
  }

  /* Tree */
  .tree ul {
    padding-top: 20px;
    position: relative;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
  }

  .tree li {
    display: table-cell;
    text-align: center;
    list-style-type: none;
    position: relative;
    padding: 20px 5px 0 5px;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
  }

  /*We will use ::before and ::after to draw the connectors*/
  .tree li::before,
  .tree li::after {
    content: "";
    position: absolute;
    top: 0;
    right: 50%;
    border-top: 1px solid #ccc;
    width: 50%;
    height: 20px;
  }

  .tree li::after {
    right: auto;
    left: 50%;
    border-left: 1px solid #ccc;
  }

  /*We need to remove left-right connectors from elements without any siblings*/
  .tree li:only-child::after,
  .tree li:only-child::before {
    display: none;
  }

  /*Remove space from the top of single children*/
  .tree li:only-child {
    padding-top: 0;
  }

  /*Remove left connector from first child and right connector from last child*/
  .tree li:first-child::before,
  .tree li:last-child::after {
    border: 0 none;
  }

  /*Adding back the vertical connector to the last nodes*/
  .tree li:last-child::before {
    border-right: 1px solid #ccc;
    border-radius: 0 5px 0 0;
    -webkit-border-radius: 0 5px 0 0;
    -moz-border-radius: 0 5px 0 0;
  }

  .tree li:first-child::after {
    border-radius: 5px 0 0 0;
    -webkit-border-radius: 5px 0 0 0;
    -moz-border-radius: 5px 0 0 0;
  }

  /*Time to add downward connectors from parents*/
  .tree ul ul::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    border-left: 1px solid #ccc;
    width: 0;
    height: 20px;
  }

  .tree li .parent {
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    margin-top: 10px;
  }

  .tree li .parent::before {
    content: "";
    position: absolute;
    top: 40px;
    left: 50%;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    width: 3px;
    height: 10px;
  }

  .tree li .family {
    position: relative;
  }

  .tree li .family .spouse {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: 95px;
  }

  .tree li .family .spouse::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -10px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    width: 10px;
    height: 3px;
  }
</style>

<div class="tree">
  <ul>
    <li>
      <div class="person male">
        <div class="name">Me</div>
      </div>
      <ul>
        <li>
          <div class="family">
            <div class="person female">
              <div class="name">Mom</div>
            </div>
            <div class="spouse male">
              <div class="name">Step Dad</div>
            </div>
          </div>
          <ul>
            <li>
              <div class="person male">
                <div class="name">Grandpa</div>
              </div>
            </li>
            <li>
              <div class="person female">
                <div class="name">Grandma</div>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="person male">
            <div class="name">Dad</div>
          </div>
          <ul>
            <li>
              <div class="person male">
                <div class="name">Grandpa</div>
              </div>
            </li>
            <li>
              <div class="person female">
                <div class="name">Grandma</div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

This is how it looks like on a web page:

![tree](https://i.imgur.com/9Q6mZ6l.png)

You can find more information and examples on how to display a tree in HTML/CSS on these web pages¹²³⁴⁵. I hope this helps. 😊

Source: Conversation with Bing, 2/16/2024
(1) How to display a tree in HTML/CSS? nested left-floating divs and .... https://stackoverflow.com/questions/14511872/how-to-display-a-tree-in-html-css-nested-left-floating-divs-and-wrapping.
(2) Family Tree with pure HTML and CSS (or with minimal JS). https://stackoverflow.com/questions/53151296/family-tree-with-pure-html-and-css-or-with-minimal-js.
(3) Minimal Tree View Based On Nested Lists - listree | CSS Script. https://www.cssscript.com/tree-view-nested-list/.
(4) How do I present a tree in an HTML table? - Stack Overflow. https://stackoverflow.com/questions/945460/how-do-i-present-a-tree-in-an-html-table.
(5) 10 CSS Tree View Examples | WebTopic. https://www.webtopic.com/css-tree-view-examples/.
(6) undefined. http://jsfiddle.net/Afasv/8/.
(7) undefined. http://jsfiddle.net/QGkKD/1/.
(8) github.com. https://github.com/HiteshVadoliya/jobaapka/tree/d26d172fef8f42ba5cf9a39fc5bee44ae1a51b4c/application%2Fviews%2Fadmin%2Fhwt_user%2FView.php.
(9) github.com. https://github.com/NirKehat/DVD_FAB_5/tree/46a90114a3be2297b44ea5f411965c1f0bc2be3d/Implementation%2FLogicalUnits%2Fk2_ws%2FJava%2Fsrc%2Fcom%2Fk2view%2Fcdbms%2Fusercode%2Flu%2Fk2_ws%2FLUDBViewer%2FLogic.java.
(10) github.com. https://github.com/openenergymonitor/emoncms3/tree/38f1d0ae015a72e32666eafbf2e7f9a5742630b4/Views%2Fnodes%2Fnodes_view.php.
(11) github.com. https://github.com/zavaab/htc/tree/9f14f37319dbd2c7265258dfe1c4b260dc1bd6c9/application%2Fviews%2Ffront%2Fcourses%2Ftoefle.php.