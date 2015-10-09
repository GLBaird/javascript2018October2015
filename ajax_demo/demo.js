

$.ajax({
    url: "story.txt",
    type:"get",
    dataType: "text",
    success: function(data) {
        $("body").append(
            $("<pre />").html(data)
        );
    },
    error: function(jqXHR, status, error) {
        $("body").append(
            $("<p />").html("Error - "+status+", "+error)
        );
    }
});


$.ajax({
    url: "data.json",
    type:"get",
    dataType: "json",
    data: {
        username: "leon",
        password: "pie-eater"
    },
    success: function(data) {

        console.log(data);

        var ul = $("<ul />");
        $("body").append(ul);

        data.users.forEach(function(record, index) {
            ul.append(
                $("<li />").html("#"+index+", "+record.name+" : "+record.address)
            );
        });


    },
    error: function(jqXHR, status, error) {
        $("body").append(
            $("<p />").html("Error - "+status+", "+error)
        );
    }
});

