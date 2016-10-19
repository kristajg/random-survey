'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db.js');
const connection = db.mysqlConnect();

router.get('/questions', function(req, res) {
  connection.query('SELECT * FROM survey', function(err, results){
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
