/**
 * Created by SAGAR on 10/16/2016.
 */

var     mongoose  =  require('mongoose');
var     employee  = require('../schemas/employee');

module.exports = function(app,express){


    var api = express.Router();

    api.use('/:id' , function( req, res , next ){

      //todo:3 dec 2016 validater fucntion for employee

       var id = req.params.id;

       if(id=='add-employee'){

           next();
       }
       else if(id=='list-employee'){


           next();
       }
       else if(id=='delete-employee'){


           next();
       }
       else if(id=='edit-employee'){


           next();
       }
       else if(id=='clear-employee'){


           next();
       }
       else  res.status(404).send("not found!");



    });


    api.post( '/add-employee' , function( req , res ){


        var emp  = new employee({

            name          :  req.body.name,
            age           :  req.body.ageNum,
            date_of_birth :  new Date( req.body.birthYear , req.body.birthMonth , req.body.birthDate ),
            date_of_join  :  new Date( req.body.joinYear,req.body.joinMonth,req.body.joinDate),
            mail          :  req.body.mail,
            pan_num       :  req.body.panNum,
            phone_number  :  req.body.phoneNum,
            work_profile  :  req.body.profile


        });

        emp.save(function(err){

            if(err)
                res.status(400).send(err);
            else
                res.json({message:'new employee is added'});

        });


    });


    api.get( '/list-employee' ,  function( req , res ){

        employee.find({}).exec(function(err,emp){

            if(err)
               res.status(400).send(err);
            else
               res.json(emp);

        });

    });


    api.get( '/delete-employee' , function(req , res){

        employee.find({_id : req.query['id'] }).remove().exec(function(err){

            if(err)
                res.status(400).send(err);
            else
                res.status(200).json({message:'date removed successfully!!'});

        });

    });


    api.post( '/edit-employee' , function(req,res) {
            employee.findByIdAndUpdate( req.body.id  ,
                {
                    $set :{

                            name          :  req.body.name,
                            age           :  req.body.ageNum ,
                            date_of_birth :  new Date(  req.body.birthYear , req.body.birthMonth , req.body.birthDate ),
                            date_of_join  :  new Date(  req.body.joinYear  , req.body.joinMonth  , req.body.joinDate ),
                            mail          :  req.body.mail,
                            pan_num       :  req.body.panNum,
                            phone_number  :  req.body.phoneNum,
                            work_profile  :  req.body.profile

                         }
                }
                ,

                function(err){
                   if(err)
                      res.status(400).send(err);
                   else
                      res.status(200).json({message :'Query executed successfully!!'});
                }

        )
    });



    api.get('/clear-employee',function(req,res){

       employee.find({})
           .remove()
                .exec( function(err){
            if(err)
                res.status(400).send(err);
            else
                res.status(200).json({message:"data cleared successfully"});
       });

    });


    return api;
}