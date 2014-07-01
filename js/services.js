/**
 * Created by bmorris on 6/25/14.
 */
var hangmanServices = angular.module("hangmanServices", []);

hangmanServices.factory('Keyword', function(){
    return {
        keyword : ""
    };
});