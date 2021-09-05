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
  const q = `SELECT * FROM pokemon
  INNER JOIN images ON images.id = pokemon.imageNum
  INNER JOIN types ON types.id = pokemon.typeNum
  ORDER BY pokemon.id;`
   db.query(q, (err, table) => {
     if(err) {
       console.log(err);
       res.end();
     } else {
       res.status(200).json(table);
     }
   })
});

app.listen(port, () => {
  console.log('listening on port 3000')
});



// SELECT * FROM pokemon
//  INNER JOIN images ON images.id = pokemon.imageNum
//  INNER JOIN types ON types.id = pokemon.typeNum
//  ORDER BY exam.date