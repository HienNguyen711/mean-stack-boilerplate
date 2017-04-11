'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;//schema from mongoose

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String
});

mongoose.model('User', UserSchema);