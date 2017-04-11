'use strict';

const config = require('./config');
const mongoose = require('mongoose');

module.exports = function() {
  const db = mongoose.connect(config.db);//connect to mongodb

  return db;
};