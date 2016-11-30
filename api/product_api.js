/**
 * Created by SAGAR on 10/18/2016.
 */
var mongoose    = require('mongoose');
var product     = require('../schemas/product');
module.exports  = function(app,express){
    var api = express.Router();
    api.post('/add-product',function(req , res ){

    });
    api.get('/delete-product', function(req,res){


    });
    api.get('/modify-product', function(req,res){

    });
    api.get('/list-product',function(req,res){

    });
    return api;
}
