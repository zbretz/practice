// following this tutorial: https://blog.logrocket.com/how-to-implement-websockets-in-react-native/
const express = require("express");
const app = express();
const http = require("http");
const WebSocket = require("ws");
const server = http.createServer(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const wss = new WebSocket.Server({ server });

// const CLIENTS=[];
const CLIENTS={};

app.post("/:id", (req, res) => {
  console.log('Got body:', req.body.msg_txt);
  if (req.params.id){
    if (CLIENTS[req.params.id]){
      //pass along ws message
      CLIENTS[req.params.id].send(req.body.msg_txt)
      //response to app server
      res.send('client exists!')
    } else {
      res.send('no exist!')
    }
    // res.send(req.params.id)

  }
  res.send("Hello World!");
});

wss.on("connection", function connection(ws) {
  // CLIENTS.push(ws)


  ws.on("message", function incoming(message, isBinary) {

    message = JSON.parse(message)

    if (message.source === 'client'){
      //if client connects
      CLIENTS[message.id] = ws
    } else {
      //if message incoming from server
    }
    console.log(message, 'num of clients: ', Object.keys(CLIENTS).length)

  });
});

server.listen(8080, () => {
  console.log("Listening to port 8080");
});
