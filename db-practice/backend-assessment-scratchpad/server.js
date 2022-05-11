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
    db.query('INSERT INTO patient (name) VALUES ($1)', ['first last'], (err, result) => {
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

//find all patient
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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})