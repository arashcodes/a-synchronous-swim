const fs = require('fs');
const path = require('path');
const url = require('url');
const qs = require('querystring');
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
    res.end(messages.dequeue());
    } else if (req.method === 'POST') {

      console.log(qs.decode(req))

    }
    res.end();
  next(); // invoke next() at the end of a request to help with testing!
};
