// TODO: Create an express server
var express = require('express');
const path = require('path');
const axios = require('axios');

var app = express();
var port = 3000;
var db = require('./db');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/get', (req, res) => {
   db.query('SELECT * FROM pokemon', (err,table) => {
     if(err) {
       console.log(err);
       res.end();
     } else {
      //  console.log('table from get req:', table);
       res.json(table);
     }
   })
});

app.listen(port, () => {
  console.log('listening on port 3000')
});