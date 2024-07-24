// test_client.js
const WebSocket = require('ws');

const serverPort = 8081; // Make sure this matches the port in server.js
const serverUrl = `ws://localhost:${serverPort}`;

// Create a WebSocket connection to the server
const ws = new WebSocket(serverUrl);

ws.on('open', () => {
  console.log('Connected to the server');

  // Send a test message to the server
  const testMessage = 'Hello, Server!';
  ws.send(testMessage);
  console.log('Sent message:', testMessage);

  // Close the connection after a short delay
  setTimeout(() => {
    ws.close();
    console.log('Closing connection');
  }, 2000);
});

ws.on('message', (message) => {
  console.log('Received message from server:', message);
});

ws.on('close', () => {
  console.log('Disconnected from the server');
});

ws.on('error', (error) => {
  console.error('WebSocket error:', error);
});
