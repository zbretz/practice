const express = require('express')
const app = express()
const port = 3000
const db = require('./db')


app.get('/', (request, response) => {
  response.send(db.user1.first)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
