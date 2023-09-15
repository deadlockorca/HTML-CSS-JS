var app = angular.module('myApp',[]);
//add module to controller
app.controller('myController', function($scope){
    //Dung fullname tai HTML
    //Fullname firstname lastname la thuco tinh cua module
    $scope.fullname = function({
        return $scope.firstName + " " +$scope.lastName;
    })
})