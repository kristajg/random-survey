'use strict';

var express = require('express');
var http  = require('http');
var mysql = require('mysql');
var db = require('./db.js');
var bodyParser = require('body-parser');
var app = express();

// Include body parser for JSON fun
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set port
app.set('port', process.env.PORT || 3000);

// Create tables
db.createTables();

// mysql connectiong... can abstract out later to middleware for routes
var connection = mysql.createConnection({
  host:     'localhost',
  port:     '3306',
  user:     'root',
  password:   '',
  database:   'randomsurvey'
});   
connection.connect();


// Routing
app.get('/', function(req, res){
  res.send("Hello world");
});

app.get('/users', function(req, res){
  connection.query('SELECT * FROM user', function(err, results){
    if(err) throw err;
    res.json(results);
  });
});

app.post('/user/:email', function(req, res){
  console.log('req.body ', req.body);


  var userQuery = 'SELECT * FROM user WHERE email=\''+req.params.email+'\'';

  connection.query(userQuery, function(err, result){
    if(err) throw err;
    res.json(result);
  });
});

app.get('/questions', function(req, res) {
  connection.query('SELECT * FROM survey', function(err, results){
    if (err) throw err;
    res.json(results);
  });
});


// Server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
