const db = require('./db/index');

let handlegetAll = (req, res) => {
  const queryStr = 'SELECT pokemon.id, name, type, img  FROM pokemon INNER JOIN types INNER JOIN images ON pokemon.typeNum=types.id AND pokemon.imageNum=images.id';
  db.query(queryStr, (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(result);
    }
  })

}

let handlegetType = (req, res) => {
  const queryStr = 'SELECT type from types';
  db.query(queryStr, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result)
    }
  })
}

let handleFilter = (req, res) => {
  const { type } = req.body
  // console.log(req.body);
  const queryStr = `SELECT name, img FROM pokemon INNER JOIN types INNER JOIN images ON pokemon.typeNum=types.id AND pokemon.imageNum=images.id WHERE type='${type}'`
  db.query(queryStr, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result)
    }
  })
}

let handleEdit = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  // console.log(req.body);
  const queryStr = `UPDATE pokemon SET name ='${name}' WHERE id=${id}`;
  db.query(queryStr, (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else (
      res.status(200).send(result)
    )
  })
}

let handleDelete = (req, res) => {
  const id = req.params.id;
  const queryStr = `DELETE pokemon, images FROM pokemon INNER JOIN images on pokemon.imageNum=images.id WHERE pokemon.id=${id}`;
  db.query(queryStr, (err, result) => {
    if (err) {
      res.status(400).send(err)
    } else (
      res.status(200).send(result)
    )
  })
}

module.exports.handlegetAll = handlegetAll;
module.exports.handlegetType = handlegetType;
module.exports.handleFilter = handleFilter;
module.exports.handleEdit = handleEdit;
module.exports.handleDelete = handleDelete;
