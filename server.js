'use strict';


const express = require('express');
const app = express();
var server = require('http').Server(app);//create http server 
var io = require('socket.io')(server);//init socket.io 
app.use(function(req, res, next){//use it with middleware
  
  res.io = io;
  next();
});


const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

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




const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');

const db = configureMongoose();
const app = configureExpress();
app.listen(3000);

module.exports = app;
console.log('Server running at http://localhost:3000/');