'use strict';

const express = require('express');
const http  = require('http');
const fs = require('fs');
const db = require('./db.js');
const bodyParser = require('body-parser');
const app = express();

// Include body parser for JSON fun
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set port
app.set('port', process.env.PORT || 3000);

// Create tables
db.createTables();

// Routing
fs.readdirSync(__dirname + '/routes/').forEach(function(file) {
  const routePath = __dirname + '/routes/' + file,
    routes = require(routePath);
  app.use('/api', routes);
});

// Sample route
app.get('/', function(req, res){
  res.send("Hello world");
});

// Server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
