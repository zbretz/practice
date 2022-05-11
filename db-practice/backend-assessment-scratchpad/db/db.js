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

const create_tables = () => {
    pool.query(
        `CREATE TABLE patient(
            ID SERIAL,
            name varchar(64) NOT NULL,
            PRIMARY KEY (ID)
        )`)
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.error(e)
        })

    // pool.query(
    //     `CREATE TABLE appointment(
    //         ID int SERIAL,
    //         patient int NOT NULL,
    //         PRIMARY KEY (ID),
    //         FOREIGN KEY(patient) REFERENCES patient(ID)
    //     )`)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(e => {
    //         console.error(e)
    //     })
}

create_tables()