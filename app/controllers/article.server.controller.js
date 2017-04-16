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