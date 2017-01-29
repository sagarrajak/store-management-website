var mongoose = require('mongoose');
var brand = require('../schemas/product_brand');

module.exports = function(app,express){

    var api = express.Router();
    api.post('/',function(req,res){
        new brand({
            brand   : req.body.brand ,
            details : req.body.details ,
            image   : req.body.image
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
        brand.find({_id :req.parsms.id })
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
        brand.find({})
            .exec(function(err,emp){
                if(err)
                    res.json(res);
                else
                    res
                        .status(200)
                        .json(emp);
            });
    });

    api.get('/:id',function(req,res){

        brand
            .find({ _id : req.params.id })
              .exec(
                  function(err,out){
                    if(err)
                       res.send(err);
                    else
                         res
                            .status(200)
                                .json(out);

            });

    });

    api.put('/:id',function(req,res){

        //todo: modify brand;

    });

    return api;
}

