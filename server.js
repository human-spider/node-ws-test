const WebSocket = require('ws');

const port = parseInt(process.argv[2]) || 8080;
const wss = new WebSocket.Server({ port });

wss.on('connection', (ws) => {
  console.log('A new client connected');

  ws.on('message', (message) => {
    const decodedMessage = message.toString('utf-8');
    console.log('Received message:', decodedMessage);
    ws.send('Hello, Client!');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});