angular.module('loginApp', []).controller('loginController', function($scope) {
    $scope.login = function() {
      if ($scope.loginForm.$valid) {
        // Perform login logic here
        console.log('Logged in successfully!');
        $scope.resetForm();
      }
    };

    $scope.resetForm = function() {
      $scope.user.email = '';
      $scope.user.password = '';
      $scope.loginForm.$setPristine();
      $scope.loginForm.$setUntouched();
    };
  });