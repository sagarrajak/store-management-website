/**
 * Created by SAGAR on 10/18/2016.
 */
var mongoose    =  require('mongoose');
var Product     =  require('../schemas/product');
var cloudinary = require("../../cloudinary_config");


module.exports  =  function(app,express){
    var api = express.Router();
    api.post('/image/', function (req,res){
        if (req.files != undefined){
            cloudinary.uploader.upload( req.files[0].path , function (result){
                if ( result.error != undefined ){
                       console.log(result.error);
                       res.json(result);
                }
                else  res.status(200).json({message: result.public_id});
            });
        }
        else
            res.status(400).send({message: "image not found"});

    }).delete('/image/:id', function(req, res){
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
    }).post('/',function(req,res){
        var product = new Product({
            name   :     req.body.name,
            brand  :     req.body.brand,
            type   :     req.body.type,
            detail :     req.body.detail,
            price  :     req.body.price,
            image  :     req.body.image ,
            retailer :   req.body.retailer
        }).save(function (err){
            if (err)
                res.json({failed: err});
            else
                res.status(200).json({ message  : "successfully  created product."});
        });
    }).delete('/:id', function (req,res) {
        Product.find({_id: req.params.id })
            .remove()
            .exec(function (err) {
                if (err)
                    res.json({failed: err});
                else
                    res.status(200).json({ message  : "successfully deleted product..." });
            });
    }).put('/:id' , function(req,res) {
        Product.findByIdAndUpdate( req.params.id ,{
            $set: {
                name   : req.body.name,
                brand  : req.body.brand,
                type   : req.body.type,
                detail : req.body.detail,
                price  : req.body.price,
                image  : req.body.image
            }
        },function(err){
            if (err)
                res.json({failed: err});
            else
                res.status(200).json({ message  : "Product modified successfully!!"})
        });

    }).get('/',function(req,res){
        Product.
            find({})
            .exec(function (err, emp) {
                if (err)
                    res.json(emp);
                else
                    res.status(200).json(emp);
            });
    });
    return api;
}
