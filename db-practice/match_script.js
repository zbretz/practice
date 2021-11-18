const { Client } = require('pg')

const client = new Client({
  user: 'zach',
  host: 'localhost',
  database: 'snome_testing',
  password: 'password',
  port: 5432,
})
client.connect()

const text = 'INSERT INTO snome_like(snome_user_id, snome_id) VALUES($1, $2)'
const values = ['1', '2']

const create_like = (text, values) => {

  client
  .query(text, values)
  .then(res => console.log(res.rows))
  .catch(e => console.error(e.stack))

}

const check_for_match = () => {

}

const create_match = () => {

}

create_like(text, values)