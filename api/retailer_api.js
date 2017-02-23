/**
 * Created by SAGAR on 11/30/2016.
 */
var  mongoose =  require('mongoose');
var  retailer = require('../schemas/retailer');
var cloudinary = require("../cloudinary_config");

module.exports = function(app,express){

        var api = express.Router();


        api.post('/',function(req,res){
            new retailer({

                name : req.body.name,
                phone_num : req.body.phone_num ,
                mail : req.body.mail ,
                address : req.body.address ,
                image : req.body.image

            }).save(function(err){

                if(err)
                  res.send(err);
                else
                  res
                      .status(200)
                      .send({message:"Retailer added"});

            });
        });
        api.post('/image/',function(req,res){
              if( req.files != null ){
                        cloudinary.uploader.upload(req.files[0].path, function (result) {
                          if (result.error != undefined) {
                              res.json(result);
                          }
                          else res.status(200).json({message: result.public_id});
                  });
              }
              else
                   res.status(400).json({message:"Image not found!!"});
        });
        api.delete('/image/:id',function(req,res){
            console.log(req.params.id);
            retailer
                .find( { _id : req.params.id })
                .select('image')
                .exec(function(err,pro){

                    if(err)
                        res.send(err);

                    cloudinary.uploader.destroy( pro[0]['image'] ,function(result){
                        if( result.error != undefined )
                            res.json(result);
                        else
                            res.status(200).json({message:"Image deleted successfully"})
                    });

                });
        });
        api.delete('/:id', function(req,res){
                retailer
                    .find({_id:req.params.id})
                    .remove()
                    .exec(function(err){
                        if(err)
                            res.send(err);
                        else
                            res
                                .status(200)
                                .json({message :"Retailer  deleted successfully"});
                    });
        });
        api.put('/:id',function(req,res){
              //todo add new retailer
        });
        api.get('/',function(req,res){
            retailer
                .find({})
                .exec(function(err,emp){
                    if(err)
                        res.send(err);
                    else
                        res.status(200).json(emp);
                });
        });

        return api;
};



