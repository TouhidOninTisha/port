// ajgobi practices js->
$(document).ready(function() {
    $(".jqearybutton").click(function() {
        var x1 = $(".inputqurery").val();
        var y1 = "";
        for (var i = 1; i <= x1; i++) {
            //y1 += "<p>";
            //y1 += "<br>"
            for (var j = 1; j <= i; j++) {
                y1 = y1 + '*';
            }
            y1 = y1 + "<br>"
                //y1 += "</p>";
        }
        $(".paragrapgquery").html(y1);
    });
});

//practices 2->
$(document).ready(function() {

    $(".btnsearch").click(function() {
        var x1 = $(".searchinput").val();
        switch (x1) {
            case 'Phone':
                $(".imj2,.imj3").hide();
                break;
            case 'Lamp':
                $(".imj1,.imj3").hide();
                break;
            case 'Anana':
                $(".imj1,.imj2").hide();
                break;

            default:
                console.log("value not found");
                break;

        }


        //var y1 = 5;
        //var y2 = 2;
        // var y3 = 1;
        // if (x1 = y1) {
        //$(".imj2,.imj3").hide();
        // }
        //if (x1 = y2) {
        //$(".imj2").hide();
        //}
        //if (x1 = y3) {
        // $(".imj1").hide();
        //} else {

        //}
    });
});
//jquerypractices ->
$("p").css({
    "color": "red",
    "font-size": "50px"
});
$("p").addClass(".ppara");
$(".bn").click(function() {
    $("p").toggle("ppara");
});
$("h5").text("Change vau");
$("h5").css("background-color", "yellow");
$("a").attr("href", "https://unsplash.com/s/photos/saudi-arab");

$(".btnn1").click(function() {
    var pj = this.innerHTML;
    $(".h22").text(pj + " is clicked");
});

$(".btnn2").click(function() {
    var jc1 = $("#pas1").val();
    var jc2 = $("#pas2").val();
    if (jc1 != "" && jc2 != "") {
        if (jc1 == jc2) {
            alert("succesfuly sign in")
        } else {
            alert("password missmass")
        }
    } else {
        alert("plese enter password")
    }
});