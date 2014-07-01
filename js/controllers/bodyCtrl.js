/**
 * Created by bmorris on 6/24/14.
 */

//controller for the body of the game (respective html partial: gamebody.html)

hangmanControllers.controller("bodyCtrl", function($scope, $location, Keyword){
    $scope.data = {};
    $scope.countdown = 6;

    $scope.greeting = "Try and guess the word!";

//    $scope.move = function (){
//        $location.path('/initgame');
//    };

    $scope.data.getKeyword = function(){
        $scope.answer = Keyword.keyword;
        $scope.answer = angular.lowercase($scope.answer);
        $scope.answer = $scope.answer.split('');
        console.log("bodyCtrl got keyword " + $scope.answer);

    };


    //dummy array to make blanks
    $scope.underscoreArray =[];


    //array of previous guesses that were not in the answer
    $scope.data.guessPool = [];
    //checks if user guess is already in the pool (user has already made the guess before)
    var guessInPool = function (ch){
        for (var i in $scope.data.guessPool){
            if ($scope.data.guessPool[i] == ch){
                return true;
            }
        }
        return false;
    };

//    var guessInAnswer = function (ch){
//        for (var i in $scope.asnwer){
//            if ($scope.data.guessPool[i] == ch){
//                return true;
//            }
//        }
//        return false;
//    };



    $scope.data.tempGuess;
    $scope.submitGuess = function(char){
        underscorecount = 0;
        //TODO add validation
        //checks if entry is more than a char
        if (char.length != 1 || angular.isNumber(char)){
            console.log('invalid input');
            alert("Invalid input");
            return;
        }
        //check if user has already guessed that letter
        if (guessInPool(char)) {
            return;
        }

        $scope.guessInAns = false;

        //checks if guess in in answer
        //if not in answer, pushes guess to guessPool and reduces countdown
        for (var i in $scope.answer)
            if (char == $scope.answer[i]) {
            $scope.underscoreArray[i] = char;
            $scope.guessInAns = true;
        };
        if ($scope.guessInAns == false) {
            $scope.data.guessPool.push(char);
            $scope.countdown--;
        } else $scope.data.guesspool = false;
        //reset input
        $scope.data.tempGuess = "";


        //check if user won, alert and redirect if true
        for (var i in $scope.underscoreArray){
            if ($scope.underscoreArray[i] == '_')
                underscorecount++;
        }
        if (underscorecount == 0){
            alert("You won! Congrats");
            console.log("user won");
            $location.path('/initgame');
        }
        //check if user lost, alert and redirect if true
        if ($scope.countdown < 1){
            alert("Sorry, you lose!");
            console.log("player lost");
            $location.path('/initgame');
        }
    }

    //console.log("bodyCtrl loaded successfully");

    //init function to create dummy array.
    var init = function () {
        console.log("init function called");
        $scope.data.getKeyword();
        if ($scope.data.guessPool.length == 0){
            for(i in $scope.answer){
                $scope.underscoreArray.push('_');
            }
        }
    };
    init();
});