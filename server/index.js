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


// mysql stuff... can abstract out later
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


// Server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
