var mongoose  = require('mongoose');
var  right    =  require('../schemas/right');
module.exports = function(app,express){

    var api = express.Router();
    api.post('/',function(req,res){
        var right  = new right({
            name : req.body.name ,
            details : req.body.details

        }).save(function (err){
                if(err)
                    res.json(err);
                else
                    res.status(200).json({message :"New right added"});
        });
    });

    api.delete('/:id', function(req,res){
        right
            .find({_id:req.params.id})
            .remove()
            .exec(function(err){
                if(err)
                    res.send(err);
                else
                    res.send(200).json({message:"Right deleted successfully"});
            });
    });

    api.put('/:id', function(req,res){
        // todo modify existing right
    });

    api.get('/',function(req,res){

        right
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


