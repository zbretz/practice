const express = require('express')
const app = express()
const port = 3000
const db = require('./db')
const jwt = require("jsonwebtoken");


app.get('/', (request, response) => {
  let token1 = request.header('Authorization');
  console.log(token1)
  const token2 = jwt.sign('abc', '123');

  response.header("auth-token", token2).send(db.user1.first)
})

app.get('/test', (request, response) => {
  let token1 = request.header('Authorization');
  console.log(token1)
  response.send(token1)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
