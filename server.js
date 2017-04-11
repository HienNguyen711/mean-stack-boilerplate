'use strict';

const http = require('http');

http.createServer(function(req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World');
//   res.write('Hello hien');
//   res.end();
}).listen(3000);


console.log('Server running at http://localhost:3000/');