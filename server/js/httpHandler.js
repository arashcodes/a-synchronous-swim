const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messages = require('./messageQueue');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);
  if (req.method === 'GET') {
    // let commands = ['up', 'down', 'right', 'left'];
    //  let randomCommand = commands[Math.floor(Math.random() * commands.length)];
    //  res.write(randomCommand);
    res.end(messages.dequeue());
    }
    res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
