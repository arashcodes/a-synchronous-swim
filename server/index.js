const messages = require('../server/js/messageQueue.js');

// console.log(`Message received: ${message}
// messages.enqueue(message)
const keypressHandler = require('./js/keypressHandler');
keypressHandler.initialize(message => {
  console.log(`Message received: ${message}`)
   return messages.enqueue(message)
});

const httpHandler = require('./js/httpHandler');


const http = require('http');
const server = http.createServer(httpHandler.router);

const port = 3000;
const ip = '127.0.0.1';
server.listen(port, ip);

console.log('Server is running in the terminal!');
console.log(`Listening on http://${ip}:${port}`);
