$(document).ready(function () {
    
    // variables

    var wins = 0;
    var losses = 0;
    var computerNumber = 0;
    var userNumber = 0;

    var card1 = [];
    var card2 = [];
    var card3 = [];
    var card4 = [];

    var min = 19;
    var max = 120;

    // Function that update variables...

    function updateComputer() {
        computerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById("computerNumber").innerHTML = computerNumber;
    }

    function randomNumber1() {
        var min = 1;
        var max = 12;
        card1 = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomNumber1();

    function randomNumber2() {
        var min = 1;
        var max = 12;
        card2 = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomNumber2();

    function randomNumber3() {
        var min = 1;
        var max = 12;
        card3 = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomNumber3();

    function randomNumber4() {
        var min = 1;
        var max = 12;
        card4 = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    randomNumber4();

    function updateTotal1() {
        userNumber = userNumber + card1;
        document.getElementById("userNumber").innerHTML = userNumber;
        
    }

    function updateTotal2() {
        userNumber = userNumber + card2;
        document.getElementById("userNumber").innerHTML = userNumber;
        
    }

    function updateTotal3() {
        userNumber = userNumber + card3;
        document.getElementById("userNumber").innerHTML = userNumber;
        
    }

    function updateTotal4() {
        userNumber = userNumber + card4;
        document.getElementById("userNumber").innerHTML = userNumber;
        
    }

    function updateWins() {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        userNumber = 0;
        document.getElementById("userNumber").innerHTML = userNumber;
        
        alert("you won!");
    }

    function updateLosses() {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        userNumber = 0;
        document.getElementById("userNumber").innerHTML = userNumber;
        alert("you lost!");
    }

    // Main Section where functions are called upon...


    updateComputer();

    $(".btn1").click(function () {
        updateTotal1();

        if (userNumber > computerNumber) {
            updateLosses();
            updateComputer();
            randomNumber1();
            randomNumber2();
            randomNumber3();
            randomNumber4();
        }

        if (userNumber === computerNumber) {
            updateWins();
            updateComputer();
            randomNumber1();
            randomNumber2();
            randomNumber3();
            randomNumber4();
        }
        console.log(card1);
        } 
    );

    $(".btn2").click(function () {
        updateTotal2();
        if (userNumber > computerNumber) {
            updateLosses();
            updateComputer();
            randomNumber1();
            randomNumber2();
            randomNumber3();
            randomNumber4();
        }

        if (userNumber === computerNumber) {
            updateWins();
            updateComputer();
            randomNumber1();
            randomNumber2();
            randomNumber3();
            randomNumber4();
        }
        }
    );

    $(".btn3").click(function () {
        updateTotal3();
        if (userNumber > computerNumber) {
            updateLosses();
            updateComputer();
            randomNumber1();
            randomNumber2();
            randomNumber3();
            randomNumber4();
        }

        if (userNumber === computerNumber) {
            updateWins();
            updateComputer();
            randomNumber1();
            randomNumber2();
            randomNumber3();
            randomNumber4();
        }
        }
    );

    $(".btn4").click(function () {
        updateTotal4();
        if (userNumber > computerNumber) {
            updateLosses();
            updateComputer();
            randomNumber1();
            randomNumber2();
            randomNumber3();
            randomNumber4();
        }

        if (userNumber === computerNumber) {
            updateWins();
            updateComputer();
            randomNumber1();
            randomNumber2();
            randomNumber3();
            randomNumber4();
        }
        }
    );



});
