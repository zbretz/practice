const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/../client/public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`CommonApp listening at http://localhost:${port}`)
})