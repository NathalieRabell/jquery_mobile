    var numAndCompDiff = function(x, y) {
        return Math.abs(x - y);
    };

    // Assign random number from 1 to 50
    var compNum = Math.floor((Math.random() * 50) + 1);
    // Assign variable for number of attempts
    var numAttempts = 1;

    var hotAndCold = function() {
        // Input field to enter number
        var enterNum = $("#enterNum").val();
        //$(enterNum).val("enterNum");
        var diffTotal = numAndCompDiff(enterNum, compNum);

        if (isNaN(enterNum) || enterNum === "") {
            $(".gameStatusAlert").html("Du skal indtaste et tal for at starte")
        } else if (diffTotal <= 5 && diffTotal > 0) {
            $("html body").animate({
                backgroundColor: "#ba0000"
            }, 1000);
            $(".gameStatusAlert").html("Brandvarm!<br><small>Gæt igen</small>");
            $(".attempts").html(numAttempts + " af 5 ");


        } else if (diffTotal >= 6 && diffTotal <= 10) {
            $("html body").animate({
                backgroundColor: "#e84700"
            }, 1000);
            $(".gameStatusAlert").html("Super varm <br><small>Gæt igen</small>");
            $(".attempts").html(numAttempts + " af 5 ");


        } else if (diffTotal >= 11 && diffTotal <= 20) {
            $("html body").animate({
                backgroundColor: "#e88800"
            }, 1000);
            $(".gameStatusAlert").html("Tampen brænder <br><small>Gæt igen</small>");
            $(".attempts").html(numAttempts + " af 5 ");


        } else if (diffTotal >= 21 && diffTotal <= 50) {
            $("html body").animate({
                backgroundColor: "#3bcde7"
            }, 1000);
            $(".gameStatusAlert").html("Kold <br><small>Gæt igen</small>");
            $(".attempts").html(numAttempts + " af 5 ");


        } else if (diffTotal >= 51) {
            $("html body").animate({
                backgroundColor: "#a3effd"
            }, 1000);
            $(".gameStatusAlert").html("Iskold <br><small>Gæt igen</small>");
            $(".attempts").html(numAttempts + " af 5 ");


        } else {
            $("html body").animate({
                backgroundColor: "#a4d741"
            }, 1000);
            $(".gameStatusAlert").html("Korrekt, det rigte tal var " + compNum);
            $("#startOverBtn").css("display", "block");

        }
    } // end function


    $("#startOverBtn").click(function() {
        numAttempts = 0;
        $(".gameStatusAlert,.attempts,#startOverBtn").hide();
        $("#enterNum").val("");
    });


    //To be able to click return key
    $('#enterNum').keydown(function(event) {
        if (event.keyCode == 13) {
            $('#enterBtn').trigger('click');

        }
    });

    $(document).ready(function() {

        $("#enterBtn").click(function(enterNum) {
            //event.preventDefault();
            hotAndCold();
            $(".gameStatusAlert,.attempts,#startOverBtn").show();
            //increment number of attempts
            numAttempts++
            //stop game after 5 attempts
            if (numAttempts === 6 && enterNum !== compNum) {
                $(".gameStatusAlert").html("Du tabte, det korrekte tal var " + compNum);
                $("#startOverBtn").css("display", "block");
                $("html body").animate({
                    backgroundColor: "#4c5562"
                }, 1000);
                event.preventDefault();
            }
        });


    });
 