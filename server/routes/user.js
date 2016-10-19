'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db.js');
const connection = db.mysqlConnect();

router.get('/users/all', function(req, res){
  connection.query('SELECT * FROM user', function(err, results){
    if(err) throw err;
    res.json(results);
  });
});

router.get('/user/:email', function(req, res){
  var userQuery = 'SELECT * FROM user WHERE email=\''+req.params.email+'\'';

  connection.query(userQuery, function(err, result){
    if(err) throw err;
    res.json(result);
  });
});

router.post('/user/', function(req, res){
  var userQuery = 'SELECT * FROM user WHERE email=\''+req.body.email+'\' AND password=\''+req.body.password+'\'';

  connection.query(userQuery, function(err, result){
    if(err) throw err;
    res.json(result);
  });
});

module.exports = router;
