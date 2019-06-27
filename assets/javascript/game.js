$(document).ready(function () {


    var goalNum = Math.floor(Math.random() * 102) + 19;
    var currentNum = 0;
    var wins = 0;
    var losses = 0;

    var blueNum = Math.floor(Math.random() * 12) + 1;
    var greenNum = Math.floor(Math.random() * 12) + 1;
    var yellowNum = Math.floor(Math.random() * 12) + 1;
    var redNum = Math.floor(Math.random() * 12) + 1;

    //
    $("#goal").html('<h2>' + goalNum + '</h2>');

    //gem "buttons"
    $("#blueGem").on("click", function () {
        currentNum += blueNum;
        $("#current").html('<h2>' + currentNum + '</h2>');
        check();
    });
    $("#greenGem").on("click", function () {
        currentNum += greenNum;
        $("#current").html('<h2>' + currentNum + '</h2>');
        check();
    });
    $("#yellowGem").on("click", function () {
        currentNum += yellowNum;
        $("#current").html('<h2>' + currentNum + '</h2>');
        check();
    });
    $("#redGem").on("click", function () {
        currentNum += redNum;
        $("#current").html('<h2>' + currentNum + '</h2>');
        check();
    });


    //Couldn't think of a better way to refresh the wins/losses
    function check() {
        if (currentNum === goalNum) {
            wins++;
            $("#winsLabel").text("Wins: " + wins);
            goalNum = Math.floor(Math.random() * 102) + 19;
            currentNum = 0;
            $("#goal").html('<h2>' + goalNum + '</h2>');
            $("#current").html('<h2>0</h2>');

            //Refresh gem numbers
            blueNum = Math.floor(Math.random() * 12) + 1;
            greenNum = Math.floor(Math.random() * 12) + 1;
            yellowNum = Math.floor(Math.random() * 12) + 1;
            redNum = Math.floor(Math.random() * 12) + 1;
        }
        else if (currentNum > goalNum) {
            losses++;
            $("#lossesLabel").text("Losses: " + losses);
            goalNum = Math.floor(Math.random() * 102) + 19;
            currentNum = 0;
            $("#goal").html('<h2>' + goalNum + '</h2>');
            $("#current").html('<h2>0</h2>');

            //Refresh gem numbers
            blueNum = Math.floor(Math.random() * 12) + 1;
            greenNum = Math.floor(Math.random() * 12) + 1;
            yellowNum = Math.floor(Math.random() * 12) + 1;
            redNum = Math.floor(Math.random() * 12) + 1;
        }
    }
});