/**
 * Created by SAGAR on 11/30/2016.
 */
var mongoose = require('mongoose');
var work_profile = require('../schemas/work_profile');
module.exports = function(app,express){
    var api = express.Router();
    api.use('/:id', function(req,res,next){
        if(id=='create-work-profile'){
            next();
        }
        else if(id=='delete-work-profile'){
            next();
        }
        else if(id=='modify-work-profile'){
            next();
        }
        else if(id=='list-work-profile'){
            next()
        }
        else
            res.status(404).send("not found!");
    });

    api.post('/create-work-profile',function(req , res){

         new work_profile({
             name       :     req.body.name  ,
             hr_of_work :     req.body.hr_of_work  ,
             salary     :     req.body.salary  ,
             right      :     req.body.right
         })
         .save(function(err){
               if(err)
                  res.staus(400).send(err);
               else
                  res.send(400).json({message:"crated successfully"});
         });
    });
    api.get('/delete-work-profile', function(req,res){

        work_profile.find({}).exec(function(err,emp){

            if(err)
                res.status(400).send(err);
            else
                res.json(emp);

        });

    });
    api.get('/modify-work-profile', function(req,res){


    });
    api.get('/list-work-profile',function(req,res){

    });
    return api;
}



