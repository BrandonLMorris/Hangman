/**
 * Created by bmorris on 6/24/14.
 */
//central javascript file

//main app module created
    //ngRoute dependence for view capabilities
var app = angular.module("hangmanApp", ['ngRoute', 'hangmanControllers']);

//config function to set routes
app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/initgame', {
        templateUrl: 'partials/initgame.html',
        controller: 'gameInitCtrl'
    }).
        when('/gamebody', {
            templateUrl: 'partials/gamebody.html',
            controller: 'bodyCtrl'
        }).
    otherwise({
            redirectTo: '/initgame'
        })
}]);