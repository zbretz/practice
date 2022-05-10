const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: null,
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})