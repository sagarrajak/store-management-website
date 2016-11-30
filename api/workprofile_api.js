/**
 * Created by SAGAR on 11/30/2016.
 */
var mongoose = require('mongoose');
var work_profile = require('../schema/work_profile');
module.exports = function(app,express){
    var api = express.Router();
    api.post('/add-work-profile',function(req , res ){

    });
    api.get('/delete-work-profile', function(req,res){

    });
    api.get('/modify-work-profile', function(req,res){

    });
    api.get('/list-work-profile',function(req,res){

    });
    return api;
}



