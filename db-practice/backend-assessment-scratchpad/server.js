const express = require('express')
const port = 8000
var bodyParser = require('body-parser')

var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const db = require('./db')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// creates patient
app.post('/patient', (req, res, next) => {

    const { name, address_id, note } = req.body

    db.query('INSERT INTO patient (name, address_id, note) VALUES ($1, $2, $3)', [name, address_id, note], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

// creates doctor
app.post('/doctor', (req, res, next) => {

    const { name, address_id, phone_number, specialty } = req.body

    db.query('INSERT INTO doctor (name, address_id, phone_number, specialty) VALUES ($1, $2, $3, $4)', [name, address_id, phone_number, specialty], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

// creates facility
app.post('/facility', (req, res, next) => {

    const { address_id, open_at, close_at } = req.body

    db.query('INSERT INTO facility (address_id, open_at, close_at) VALUES ($1, $2, $3)', [address_id, open_at, close_at], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

// adds a doctor working day (via facility_doctor_schedule)
app.post('/facility_doctor_schedule', (req, res, next) => {

    const { doctor_id, facility_id, date } = req.body

    console.log(req.body)

    db.query('INSERT INTO facility_doctor_schedule (doctor_id, facility_id, date) VALUES ($1, $2, $3)', [Number(doctor_id), Number(facility_id), date], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

// creates address
app.post('/address', (req, res, next) => {

    const { street, city, state, zip_code } = req.body

    db.query('INSERT INTO address (street, city, state, zip_code) VALUES ($1, $2, $3, $4)', [street, city, state, zip_code], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

//find all patients
app.get('/patient/', (req, res, next) => {
    db.query('SELECT * FROM patient', null, (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

//find patient by id
app.get('/patient/:id', (req, res, next) => {
    db.query('SELECT * FROM patient WHERE id=$1', [req.params.id], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

//fetches doctor schedule (by doctor id)
app.get('/doctor_hours/:id', (req, res, next) => {
    db.query(`
        SELECT facility.open_at, facility.close_at, facility_doctor_schedule.date
        FROM facility_doctor_schedule
        INNER JOIN facility
        ON facility.id=facility_doctor_schedule.facility_id
        WHERE facility_doctor_schedule.doctor_id = $1 
        `, [req.params.id], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

//creates an appointment
app.post('/book_appointment/', (req, res, next) => {

    const { patient_id, doctor_id, facility_id, date, time } = req.body

    db.query(`
        INSERT into APPOINTMENT (patient_id, doctor_id, facility_id, date, time)
        values( $1, $2, $3, $4, $5)
        `, [patient_id, doctor_id, facility_id, date, time], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

// adjust a doctor's availability (via unavailability table)
app.post('/create_unavailability/', (req, res, next) => {

    const { doctor_id, date, time } = req.body

    db.query(`
        INSERT into doctor_unavailability (doctor_id, date, time)
        values( $1, $2, $3)
        `, [ doctor_id, date, time], (err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// SELECT facility.open_at, facility.close_at, facility_doctor_schedule.date
// FROM facility_doctor_schedule
// INNER JOIN facility
// ON facility.id=facility_doctor_schedule.id
// WHERE doctor_id = 1 

// SELECT facility.open_at, facility.close_at, facility_doctor_schedule.date
// FROM facility_doctor_schedule, facility
// WHERE facility.id = facility_doctor_schedule.facility_id
// AND facility_doctor_schedule.doctor_id = 1 