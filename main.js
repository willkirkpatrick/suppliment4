
var app = angular.module("contactApp", ["ngRoute"]);

app.controller("HomeController", ["$scope", "$location", "$routeParams", "ContactFactory", function($scope, $location, $routeParams, ContactFactory) {
    
    
    $scope.addContact = function() {
        $scope.newContact = {name: $scope.name, email: $scope.email, phone: $scope.phone};
        $scope.name = "";
        $scope.email = "";
        $scope.phone = "";
        $scope.contacts = ContactFactory.addContact($scope.newContact);
    }
    
    $scope.singleContact = function(name) {
        console.log(name);
        $location.path("single/" + name);
        
    }
}]);

app.controller("SingleContactController", ["$scope", "$location", "$routeParams", function($scope, $location, $routeParams) {
    $scope.name = $routeParams.param;
    console.log("inside single view");
    
}]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "homepage.html",
        controller: "HomeController"
    })
    .when("/single/:param", {
        templateUrl: "singleview.html",
        controller: "SingleContactController"
    })
}]);