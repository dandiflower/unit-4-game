



$(document).ready(function () {
    
    // variables

    var wins = 0;
    var losses = 0;
    var computerNumber = 0;
    var userNumber = 0;

    var card1 = 0;
    // var card2 = [];
    // var card3 = [];
    // var card4 = [];

    var min = 19;
    var max = 120;

    // Function that update variables...

    function updateComputer() {
        computerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("computerNumber").innerHTML = computerNumber;
    }

    function updateTotal1() {
        document.getElementById("userNumber").innerHTML = userNumber;
        userNumber = userNumber + card1;
    }

    // function updateTotal2() {
    //     document.getElementById("userNumber").innerHTML = userNumber;
    //     userNumber = userNumber + card2;
    // }

    function updateWins() {
        document.getElementById("wins").innerHTML = wins;
    }

    function updateLosses() {
        document.getElementById("losses").innerHTML = losses;
    }

    function randomNumber() {
        var min = 1;
        var max = 12;
        card1 = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Main Section where functions are called upon...

    updateComputer();
    
    $(".btn1").on("click", function () {
        updateTotal1();
        } 
    );

    // $(".btn1").on("click", function () {
    //     updateTotal2();
    //     }
    // );


});

// <!-- which variables do we need -->

//     <!-- button for clicking -->
// $(#card1).click(function() {
//     console.log(randomNumber());
// });

// <!-- random lotto number generator -->