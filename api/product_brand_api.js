var mongoose = require('mongoose');
var brand = require('../schemas/product_brand');
var cloudinary = require('../cloudinary_config');
module.exports = function(app,express){

    var api = express.Router();

    api.post('/image/',function(req,res){
        if (req.files != undefined){
            cloudinary.uploader.upload( req.files[0].path , function (result){
                if ( result.error != undefined ){
                    console.log(result.error);
                    res.json(result);
                }
                else  res.status(200).json({message: result.public_id});
            });
        }
        else res.status(400).send({message: "image not found"});
    });

    api.delete('/image/:id',function(){
        Product
            .find( { _id : req.params.id })
            .select('image')
            .exec(function(err,pro){
                cloudinary.uploader.destroy( pro[0]['image'] ,function(result){
                    if( result.error != undefined )
                        res.json(result);
                    else
                        res.status(200).json({message:"Image deleted successfully"})
                });
            });
    });
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
                        .json({message:"brand removed successfully"});
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
            .findOne({ _id : req.params.id })
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

