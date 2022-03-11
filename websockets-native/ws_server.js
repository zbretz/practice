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
    console.log(message)

    if (message.source === 'client'){
      //if client connects
      CLIENTS[message.id] = ws
    } else {
      //if message incoming from server

    }

    // let this_user_id = message.toString().slice(message.toString().length-2, message.toString().length-1)
    // let other_user_id = message.toString().slice(message.toString().length-1)

    // CLIENTS[this_user_id] = ws
    // // console.log(ws)
    // console.log('this_user_id: ', this_user_id)
    // console.log('other_user_id: ', other_user_id)
    // console.log('message: ', message.toString(), isBinary);

    // wss.clients.forEach(function each(client) {
    //   if (client.readyState === WebSocket.OPEN) {
    //     client.send(message.toString());
    //   }

    // let recipient = CLIENTS[other_user_id]
    // if (recipient && recipient.readyState === WebSocket.OPEN) {
    //   recipient.send(message.toString());
    // }

    // console.log('# of clients: ', Object.entries(CLIENTS).length)
    // console.log('client user ids: ', Object.keys(CLIENTS).map((k)=>{return k}))

  });
});

server.listen(8080, () => {
  console.log("Listening to port 8080");
});
