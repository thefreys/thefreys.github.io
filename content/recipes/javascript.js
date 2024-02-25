$("ul li").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log($(this).children());
});