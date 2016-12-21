/**
 * Created by SAGAR on 10/18/2016.
 */
var mongoose    =  require('mongoose');
var Product     =  require('../schemas/product');
module.exports  =  function(app,express){

    var api = express.Router();
    api.use('/:id' , function( req, res , next ){
            //todo:3 dec 2016 validater fucntion for product
            var id = req.params.id;
            if(id=='add-product'){
                next();
            }
            else if(id=='list-product'){
                next();
            }
            else if(id=='delete-product'){
                next();
            }
            else if(id=='edit-product'){
                next();
            }
            else if(id=='clear-product'){
                next();
            }
            else if(id=='upload-employee-image'){
                next();
            }
            else
                res.status(404).send("not found!");

    });
    api.post('/add-product',function(req,res){

        var product = new Product({
            name   :  req.body.productName ,
            brand  :  req.body.productBrand ,
            type   :  req.body.productType,
            detail :  req.body.productDetails,
            peice  :  req.body.price
        })
            .save(function(err){
                if(err)
                   res.status(400).json({failed:err});
                else
                   res.json({success:"successfully  created product."});
            });


    }).post('/upload-employee-image' , function(){



    }).get('/delete-product', function(req,res){
        Product.find({ _id : req.body.product_id })
                        .remove()
                            .exec(function(err){
                                if(err)
                                 res.status(400).josn({failed:err});
                                else
                                 res.sned(200).json({success:"successfully deleted employee..."});
                            });

    }).post('/edit-product',function(req,res){
        Product.findByIdAndUpdate(req.body.product_id , {
            $set : {
                name  :  req.body.productName ,
                brand :  req.body.productBrand ,
                type  :  req.body.productType,
                detail : req.body.productDetails,
                peice  : req.body.price
            }
        } , function(err){
            if(err)
                res.status(400).json({failed:err});
            else
                res.status(200).json({success: "modified succesfully!!"})

        });
    }).get('/list-product',function(req,res){
            Product.
                find({})
                .exec(function(err,emp){
                    if(err)
                        res.status(400).json(emp);
                    else
                        response.json(emp);
                });
    });

    return api;
}
