'use strict';
//requires
const app = require('../../server.js');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');//call the user model
const Article = mongoose.model('Article');//call the article model 

let user, article;

describe('Article Model Unit Tests:', () => {
    //before 
  beforeEach((done) => {
    user = new User({
      firstName: 'Full',
      lastName: 'Name',
      displayName: 'Full Name',
      email: 'test@test.com',
      username: 'username',
      password: 'password'
    });

    user.save(() => {
      article = new Article({
        title: 'Article Title',
        content: 'Article Content',
        user: user
      });

      done();
    });
  });

  describe('Testing the save method', () => {
    it('Should be able to save without problems', () => {
      article.save((err) => {
        should.not.exist(err);//no error 
      });
    });

    it('Should not be able to save an article without a title', () => {
      article.title = '';

      article.save((err) => {
        should.exist(err);
      });
    });
  });

  afterEach((done) => {
    Article.remove(() => {
      User.remove(() => {
        done();//finish the test 
      });
    });
  });
});