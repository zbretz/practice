const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'scratchpad',
    password: null,
    port: 5432,
})

const create_tables = async () => {

    await pool.query(
        `CREATE TABLE address(
            ID SERIAL,
            street VARCHAR(128) NOT NULL,
            city VARCHAR(64) NOT NULL,
            state VARCHAR(32) NOT NULL,
            ZIP VARCHAR(32) NOT NULL,
            PRIMARY KEY (ID)
        )`)
    //     .then(res => {
    //         console.log(res);
    //     })
    //     .catch(e => {
    //         console.error(e)
    //     })

    await pool.query(
        `CREATE TABLE patient(
            ID SERIAL,
            name VARCHAR(64) NOT NULL,
            address_id INT NOT NULL,
            note TEXT,
            PRIMARY KEY (ID),
            FOREIGN KEY(address_id) REFERENCES address(ID)
        )`)

    await pool.query(
        `CREATE TABLE doctor(
            ID SERIAL,
            name VARCHAR(64) NOT NULL,
            address_id INT NOT NULL,
            phone_number VARCHAR NOT NULL,
            specialty VARCHAR(64),
            PRIMARY KEY (ID),
            FOREIGN KEY(address_id) REFERENCES address(ID)
)`)

    await pool.query(
        `CREATE TABLE doctor_unavailability(
            ID SERIAL,
            doctor_id INT NOT NULL,
            date DATE,
            time TIME,
            PRIMARY KEY (ID),
            FOREIGN KEY(doctor_id) REFERENCES doctor(ID)
)`)

    await pool.query(
        `CREATE TABLE facility(
            ID SERIAL,
            address_id INT NOT NULL,
            open_at TIME,
            close_at TIME,
            PRIMARY KEY (ID),
            FOREIGN KEY(address_id) REFERENCES address(ID)
        )`)

    await pool.query(
        `CREATE TABLE appointment(
            ID SERIAL,
            patient_id int NOT NULL,
            doctor_id INT NOT NULL,
            facility_id INT NOT NULL,
            date DATE,
            time TIME,
            visit_completed BOOLEAN DEFAULT FALSE,
            doctor_notes TEXT,
            PRIMARY KEY (ID),
            FOREIGN KEY(patient_id) REFERENCES patient(ID),
            FOREIGN KEY(doctor_id) REFERENCES doctor(ID),
            FOREIGN KEY(facility_id) REFERENCES facility(ID)
        )`)

    await pool.query(
        `CREATE TABLE facility_doctor_schedule(
            ID SERIAL,
            doctor_id INT NOT NULL,
            facility_id INT NOT NULL,
            date DATE,
            PRIMARY KEY (ID),
            FOREIGN KEY(doctor_id) REFERENCES doctor(ID),
            FOREIGN KEY(facility_id) REFERENCES facility(ID)
        )`)

}

create_tables()


// 'CREATE TABLE address(
//     ID SERIAL,
//     street VARCHAR(128) NOT NULL,
//     city VARCHAR(64) NOT NULL,
//     state VARCHAR(32) NOT NULL,
//     ZIP VARCHAR(32) NOT NULL,
// )'

// `CREATE TABLE patient(
//     ID SERIAL,
//     name VARCHAR(64) NOT NULL,
//     address_id INT NOT NULL,
//     phone_number VARCHAR NOT NULL,
//     note TEXT,
//     PRIMARY KEY (ID)
//     FOREIGN KEY(address_id) REFERENCES address(ID)
// )`

// `CREATE TABLE doctor(
//     ID SERIAL,
//     name VARCHAR(64) NOT NULL,
//     address_id INT NOT NULL,
//     phone_number VARCHAR NOT NULL,
//     specialty VARCHAR(64),
//     PRIMARY KEY (ID)
//     FOREIGN KEY(address_id) REFERENCES address(ID)
// )`

// `CREATE TABLE doctor_unavailability(
//     ID SERIAL,
//     doctor_id INT NOT NULL,
//     date DATE,
//     time TIME,
//     PRIMARY KEY (ID)
//     FOREIGN KEY(doctor_id) REFERENCES doctor(ID)
// )`


// `CREATE TABLE facility(
//     ID SERIAL,
//     address_id INT NOT NULL,
//     open_at TIME,
//     close_at TIME,
//     PRIMARY KEY (ID),
//     FOREIGN KEY(address_id) REFERENCES address(ID)
// )`

// `CREATE TABLE appointment(
//     ID SERIAL,
//     patient_id int NOT NULL,
//     doctor_id INT NOT NULL,
//     facility_id INT NOT NULL,
//     date DATE,
//     time TIME,
//     visit_completed BOOLEAN DEFAULT FALSE,
//     doctor_notes TEXT,
//     PRIMARY KEY (ID),
//     FOREIGN KEY(patient_id) REFERENCES patient(ID),
//     FOREIGN KEY(doctor_id) REFERENCES doctor(ID)
//     FOREIGN KEY(facility_id) REFERENCES facility(ID)
// )`

// `CREATE TABLE facility_doctor_schedule(
//     ID SERIAL,
//     doctor_id INT NOT NULL,
//     facility_id INT NOT NULL,
//     date DATE,
//     PRIMARY KEY (ID),
//     FOREIGN KEY(doctor_id) REFERENCES doctor(ID)
//     FOREIGN KEY(facility_id) REFERENCES facility(ID)
// )`