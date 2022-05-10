const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'scratchpad',
    password: null,
    port: 5432,
})

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

const create_table = () => {
    pool.query(
        `CREATE TABLE patient(
            ID int NOT NULL,
            name varchar(64) NOT NULL,
            PRIMARY KEY (ID)
        )`)
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.error(e)
        })
}

create_table()