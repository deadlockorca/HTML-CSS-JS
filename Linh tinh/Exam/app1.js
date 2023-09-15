var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var users = [];
var products = [];

app.post('/api/users', function(req, res) {
  users = req.body;
  res.send('Danh sách người dùng đã được lưu');
});

app.post('/api/products', function(req, res) {
  products = req.body;
  res.send('Danh sách sản phẩm đã được lưu');
});

app.get('/api/users', function(req, res) {
  res.send(users);
});

app.get('/api/products', function(req, res) {
  res.send(products);
});

app.listen(3000, function() {
  console.log('Server đang chạy trên cổng 3000');
});
