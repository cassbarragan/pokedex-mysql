// TODO: Create an express server
const express = require('express');
const server = express();
const PORT = 3001;
const path = require('path');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const controller = require('./controller');
const db = require('./db/index');

server.use(bodyparser.json());
server.use(express.static(path.join(__dirname, '../client/dist')));
// server.get('/api/all', (req, res) => {
//   res.send('hello')
// })
server.get('/api/allPoke', controller.handlegetAll)
server.get('/api/alltype', controller.handlegetType)
server.post('/api/filter', controller.handleFilter)
server.put('/api/pokemon/:id', controller.handleEdit)
server.delete('/api/pokemon/:id', controller.handleDelete)

server.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Listening to ' + PORT);
  }
})
