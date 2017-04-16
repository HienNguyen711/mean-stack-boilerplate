'use strict';
const mongoose = require('mongoose');
const Article = mongoose.model('Article');//article model

//handle error in mongoose
function getErrorMessage (err) {
    if(err.errors){
        for(let errName in err.errors){
            if(err.errors[errName].message) {
                return err.errors[errName].message;
            } else {
                return 'Unknown server error';
            }
        }
    }


};

//create new article
exports.create = function(req, res) {
    //instance of article model
    const article = new Article(req.body);
    article.creator = req.user;

    article.save((err) => {
        if(err){
            return res.status(400).send({
                message:getErrorMessage(err);
            });
        } else {
            res.status(200).json(article);
        }
    });
};

//list artitcles
exports.list = function(req, res) {
    Article.find().sort('-created').populate('creator','firstName lastName fullName').exec((err, articles) => {
        if(err){
            return res.status(400).send({
        message: getErrorMessage(err)
      });
        } else {
            res.status(200).json(articles);
        }
    });
};

//find one article by article id --- middleware read 
exports.articleByID = function(req, res, next, id) {
    Article.findById(id).populate('creator', 'firstName lastName fullName').exec((err,article) => {
        if (err) return next(err);
    if (!article) return next(new Error('Failed to load article ' + id));

    req.article = article;
    next();
  });


};

//update one article by getting article in the middleware above
exports.update = function(req, res) {
    const article = req.article;
    article.title = req.body.title;
  article.content = req.body.content;
  article.location = req.body.location;

  article.save((err)=> {
      if (err) {
      return res.status(400).send({
        message: getErrorMessage(err)
      });
    } else {
      res.status(200).json(article);
    }
  
  });


}

//delete one article
exports.delete = function(req, res) {
    const article = req.article;
    article.remove((err) =>{
        if(err){
            return res.status(400).send({
        message: getErrorMessage(err)
      });
        } else {
             res.status(200).json(article);
        }
    })
}


