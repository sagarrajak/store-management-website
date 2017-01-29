/**
 * Created by SAGAR on 1/20/2017.
 */
var mongoose = require('mongoose');
require('../../schemas/product_type');
require('../../schemas/product_brand');
var    product  = require('../../schemas/product');


module.exports = function(app,express){

    var api = express.Router();

    //product with  id
    api.get( '/:id' , function(req,res){
        product
            .findOne({'_id':req.params.id})
            .populate('brand')
            .populate('retailer')
            .populate('type')
            .exec(
                function(err,out){
                    if(err)
                        res.send(err);
                    else
                        res
                           .status(200)
                              .send(out);
                }
            );
    });

    //all product with brand of id
    api.get( '/search-by-brand/:id' , function(req,res){
        product
            .find({'brand':req.params.id})
            .populate('brand')
            .populate('retailer')
            .populate('type')
            .exec(
                function(err,out){
                    if(err)
                        res.send(err);
                    else
                        res
                            .status(200)
                            .send(out);
                }
            );
    });

    //all product with all brand
    api.get( '/' , function(req,res){
        product
            .find()
            .populate('brand')
            .populate('retailer')
            .populate('type')
            .exec(
                function(err,out){
                    if(err)
                        res.send(err);
                    else
                        res
                            .status(200)
                            .send(out);
                }
            );
    });


    return api;
}