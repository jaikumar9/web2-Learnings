import express from 'express';
import {WebSocketServer} from 'ws';

const app = express();
const port = 3002;

 const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

const wss = new WebSocketServer({server});

wss.on('connection', (ws) => 
    ws.on('message', (data) => {
        console.log( " This is the message send by the client - %s", data);
        
        ws.send("thank you for your message");

    })) ;
   
    // return {app, server, wss};

