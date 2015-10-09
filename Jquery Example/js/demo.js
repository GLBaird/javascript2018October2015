// Jquery Demo

$("p.marked:last")
    .css({
        color: "green",
        fontSize: "1.2em"
    });

var headingColor = $("#mainHeading").width(20);
console.log(headingColor);

// make section hide
$("#hider").click(function(e) {
    //$(this).hide();
    //console.log(this);
    $("#hideBlock").slideToggle(1000);
});

var container = $("#container");
$("#add").click(function(e) {
    //container.append("<p>"+Date.now()+"</p>");
    container.append(
        $("<p />")
            .addClass("list-item")
            .attr("data-id", "demo")
            .html( Date.now() )
            .append(
                $("<button />")
                    .html("Click Me")
                    .click(function(e) {
                        $(this.parentNode).remove();
                    })
        )
    );
});

