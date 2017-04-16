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