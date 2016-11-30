/**
 * Created by SAGAR on 11/30/2016.
 */
var mongoose = require('mongoose');
var stock  = require('../schemas/stock');
module.exports =  function(app,express){
    var api = express.Router();
    api.post('/add-retailer',function(req , res ){

    });
    api.get('/delete-retailer', function(req,res){

    });
    api.get('/modify-retailer', function(req,res){

    });
    api.get('/list-retailer',function(req,res){

    });
   return api;
};
