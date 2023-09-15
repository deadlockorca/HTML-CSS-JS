var app = angular.module('myApp', []);

app.controller('UserController', function($scope, $http) {
  $scope.users = [];

  $scope.addUser = function() {
    var newUser = {
      name: $scope.userName,
      email: $scope.userEmail,
      password: $scope.userPassword,
      phone: $scope.userPhone
    };

    $scope.users.push(newUser);

    // Lưu danh sách người dùng vào tệp JSON
    $http.post('/api/users', $scope.users)
      .then(function(response) {
        // Xử lý sau khi lưu thành công
      }, function(error) {
        // Xử lý lỗi
      });
  };
});

app.controller('ProductController', function($scope, $http) {
  $scope.products = [];

  $scope.addProduct = function() {
    var newProduct = {
      name: $scope.productName,
      description: $scope.productDescription,
      price: $scope.productPrice
    };

    $scope.products.push(newProduct);

    // Lưu danh sách sản phẩm vào tệp JSON
    $http.post('/api/products', $scope.products)
      .then(function(response) {
        // Xử lý sau khi lưu thành công
      }, function(error) {
        // Xử lý lỗi
      });
  };
});
