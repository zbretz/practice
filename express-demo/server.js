// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81
// https://www.codementor.io/@manashkumarchakrobortty/authentication-and-authorization-in-node-js-19brdvhsyw

const express = require('express')
const app = express()
const port = 3001
const db = require('./db');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/jwt', (request, response) => {
  // let token1 = request.header('Authorization');
  const token = jsonwebtoken.sign('abc', '123');
  console.log(token)
  response.header("auth-token", token).json({token:token})
})


const salt = bcrypt.genSaltSync(10)
const pass = '123'
const hashed = bcrypt.hashSync(pass, salt);

const model = {'zb': {pass: hashed}}

const authenticated = (name, pass) => {
  return bcrypt.compareSync(pass, model[name].pass)
}

app.post('/test',(req, res) => {
  console.log(req.body)
  console.log(authenticate(req.body.credentials.name, req.body.credentials.password))
  res.send(req.body);
});


app.use(jwt({ secret: '123', algorithms: ['HS256'] }));
const foods = [
  { id: 1, description: 'burritos' },
  { id: 2, description: 'quesadillas' },
  { id: 3, description: 'churos' }
];

app.get('/foods', (req, res) => {
  console.log(req.user)
  // console.log(jsonwebtoken.verify(,'123'))
  console.log('JHVJHVJHV', req.headers.authorization)

  res.json(foods);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
