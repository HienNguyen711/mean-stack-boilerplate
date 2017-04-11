'use strict';

// const http = require('http');

// http.createServer(function(req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//   res.end('Hello World');
// //   res.write('Hello hien');
// //   res.end();
// }).listen(3000);


// console.log('Server running at http://localhost:3000/');


// const connect = require('connect');
// const app = connect();

// function logger(req, res, next) {
//   console.log(req.method, req.url);
//   next();
// };


// function helloWorld(req, res, next) {
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// };
// app.use(logger);
// app.use('/helloworld',helloWorld);

// app.listen(3000); 
// console.log('Server running at http://localhost:3000/');
const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.listen(3000);
console.log('Server running at http://localhost:3000/');

module.exports = app;


// exports.render = function(req, res) {
//   res.status(200).send('Hello World');
// };


// app.get('/', (req, res) => {
//   res.status(200).send('This is a GET request');
// });