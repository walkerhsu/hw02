var express = require('express');
var app = express();


app.get('/', function (req, res) {
    console.log(req.url);
    res.sendFile( __dirname + '/' + 'index.html');
});

app.get('/todo', function (req, res) {
    console.log(req.url);
    res.sendFile( __dirname + '/src/todo/' + 'todo.html');
});

app.get('/stores', function (req, res) {
    console.log(req.url);
    res.sendFile( __dirname + '/src/stores/' + 'stores.html');
});

app.get('/*', function (req, res) {
    console.log(req.url);
    res.sendFile( __dirname + '/' + req.url);
});
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});