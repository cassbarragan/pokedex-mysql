// TODO: Establish connection to mysql database
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password123',
  database:'pokedex'
})

db.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('connected!!')
  }
})

module.exports= db;