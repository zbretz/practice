const express = require('express')
const app = express()
const port = 8000

const db = require('./db')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/patient', (req, res, next) => {
    db.query('INSERT INTO patient (id, name) VALUES ($1, $2)', [1, 'first last'], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result)
    })
  })

app.get('/patient', (req, res, next) => {
    db.query('SELECT * FROM patient', null, (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result)
    })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})