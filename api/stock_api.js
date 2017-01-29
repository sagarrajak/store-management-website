/**
 * Created by SAGAR on 11/30/2016.
 */
var mongoose = require('mongoose');
var stock  = require('../schemas/stock');
module.exports =  function(app,express){

    var api = express.Router();
    api.post('/',function(req,res){

        new stock({

            quantity    : req.body.quantity ,
            seller      : req.body.seller ,
            product     : req.body.product ,
            buyed_price : req.body.buyed_price ,
            exp_date    : req.body.exp_date ,
            details     : req.body.details ,
            buyed_date  : req.body.buyed_date

        }).save(function(err){
                if(err)
                  res.send(err);
                else
                  res.status(200).json({message:"stock added"});
        });

    });
    api.get('/', function(req,res){
        stock
            .find({})
            .exec(function(err,stock){
                    if(err)
                        res.send(err);
                    else
                        res.status(200).json(stock);
            });
    });
    api.put('/:id', function(req,res){
        //todo
    });
    api.delete('/:id',function(req,res){
        stock.find({_id : req.params.id})
            .remove()
            .exec(function(err){
                if (err)
                    res.send(err);
                else
                    res.status(200).json({message: 'date removed successfully!!'});
            });
    });
   return api;
};
