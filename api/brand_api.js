var mongoose = require('mongoose');
var brand = require('../schemas/product_brand');

module.exports = function(app,express){
    var api = express.Router();
    api.post('add-brand',function(req,res){

    });
    api.get('delete-brand' , function(req,res){

    });
    api.get('list-brand',function(req,res){

    });
    api.post('modify-brand',function(req,res){

    });
    return api;

}

