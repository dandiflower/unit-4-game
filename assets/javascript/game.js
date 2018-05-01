
        
var wins = 0;
var losses = 0;
var computerNumber = [];
var userNumber = [];

function lottoGeneration() {

    var newNum = "";
    for (var i = 1; i < 10; i++) {
        var x = (Math.floor(Math.random() * 10));
        newNum = newNum + x;
    }
    return newNum;
}

console.log(lottoGeneration());

// <!-- which variables do we need -->

//     <!-- button for clicking -->
$(".button").on("click", function () {
    var y = lottoGeneration()
});

// <!-- random lotto number generator -->