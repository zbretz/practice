// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81
// https://www.codementor.io/@manashkumarchakrobortty/authentication-and-authorization-in-node-js-19brdvhsyw

const express = require('express')
const app = express()
const port = 3000
const db = require('./db');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');

app.use(cors());

app.get('/jwt', (request, response) => {
  // let token1 = request.header('Authorization');
  const token = jsonwebtoken.sign('abc', '123');
  console.log(token)
  response.header("auth-token", token).json({token:token})
  // response.json({token:token2})
  // response.send({token:token2})
})

app.use(jwt({ secret: '123', algorithms: ['HS256'] }));
const foods = [
  { id: 1, description: 'burritos' },
  { id: 2, description: 'quesadillas' },
  { id: 3, description: 'churos' }
];

app.get('/foods', (req, res) => {
  res.json(foods);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
