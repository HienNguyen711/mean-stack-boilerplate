'use strict';
const users = require('../../app/controllers/users.server.controller');

module.exports = function(app) {
  app.route('/users').post(users.create);
};


module.exports = function(app) {
  app.route('/users')
    .post(users.create)
    .get(users.list);
};


//middleware require login from user --- authentication 
exports.requiresLogin = function(req, res, next) {
  if(!req.isAuthenticated()){
    return res.status(401).send({
       message: 'User is not logged in'
    })
  };
  next();//go to the next middleware


};