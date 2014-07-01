/**
 * Created by bmorris on 6/24/14.
 */
//controller to start the hangman game
    //Keyword dependency for keyword functionality

hangmanControllers.controller("gameInitCtrl", function($scope, $location, Keyword){
    $scope.data = {};

    //properties to display
    $scope.data.reeting = "Hello, welcome to Hangman!";
    $scope.data.instructions= "To start, pick a word and type it into the box. Then hit 'submit'";


    //Keyword getter and setter functions
    $scope.setKeyword = function (word) {
        Keyword.keyword = word;
        $location.path('/gamebody');
    };
    $scope.getKeyword = function(){
        return Keyword.keyword;
    };

    console.log("gameInitCtrl loaded");
});