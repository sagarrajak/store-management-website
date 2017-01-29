/**
 * Created by SAGAR on 1/14/2017.
 */
var mongoose = require('mongoose');
var product_type = require('../schemas/product_type');

module.exports = function(app,express){

    var api = express.Router();

    api.post('/',function(req,res){
        new product_type({
            product_type  : req.body.product_type,
            details : req.body.details
        }).save(
            function(err){
                if(err)
                    res.json(err);
                else
                    res
                        .status(200)
                        .json({message:"new brand added successfully"});
            });
    });

    api.delete('/:id',function(req,res){

       product_type.find({_id :req.parsms.id })
            .remove()
            .exec(function(err){
                if(err)
                    res.json(err);
                else
                    res
                        .status(200)
                        .json({message:"employee removed successfully"});
            });

    });

    api.get('/',function(req,res){

        product_type.find({})
            .exec(function(err,emp){
                if(err)
                    res.json(res);
                else
                    res
                        .status(200)
                        .json(emp);

            });
    });

    api.put('/:id',function(req,res){



        // todo modify exsisting object


    });

    return api;
}

