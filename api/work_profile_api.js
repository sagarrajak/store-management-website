/**
 * Created by SAGAR on 11/30/2016.
 */
var mongoose = require('mongoose');
var work_profile = require('../schemas/work_profile');

module.exports = function(app,express){

    var api = express.Router();

    api.post('/',function(req , res){

         new work_profile({
             name       :     req.body.name,
             hr_of_work :     req.body.hr_of_work,
             salary     :     req.body.salary,
             right      :     req.body.right
         })
         .save(function(err){
               if(err)
                  res.send(err);
               else
                  res.send(200).json({message:"new work profile created successfully"});
         });
    });

    api.delete('/:id', function(req,res){
        work_profile
            .find({_id:req.params.id})
            .exec(function(err,emp){
            if(err)
                res.send(err);
            else
                res.status(200).json(emp);
        });
    });

    api.put('/:id',function(req,res){
        //todo edit exsiting work profile
    });

    api.get('/',function(req,res){
        work_profile
            .find({})
            .exec(function(err,work_profile){
                 if(err)
                    res.send(err);
                 else
                    res.send(work_profile);
            });
    });


    return api;
}



