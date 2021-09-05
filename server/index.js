// TODO: Create an express server
var express = require('express');
const path = require('path');
const axios = require('axios');

var app = express();
var port = 3000;
var db = require('./db');

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  // console.log('req.body', req.body)
  console.log('get request working');
  res.sendStatus(200).send(req.body);
});

app.listen(port, () => {
  console.log('listening on port 3000')
});