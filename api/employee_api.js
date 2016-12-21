var  mongoose  =  require('mongoose');
var  employee  = require('../schemas/employee');
var  fileUpload = require('express-fileupload');
var  cloudinary = require("../../cloudinary_config");


module.exports = function(app,express){

    var api = express.Router();
    //api.use('/:id' , function( req, res , next ){
    //  //todo:3 dec 2016 validater fucntion for employee
    //   var id = req.params.id;
    //
    //   if(id=='create-employee'){
    //       next();
    //   }
    //   else if(id=='list-employee'){
    //       next();
    //   }
    //   else if(id=='delete-employee'){
    //       next();
    //   }
    //   else if(id=='edit-employee'){
    //       next();
    //   }
    //   else if(id=='clear-employee'){
    //       console.log(id);
    //       next();
    //   }
    //   else if(id=='upload-employee-image'){
    //       next();
    //   }
    //   else  res.status(404).send("not found!");
    //
    //});
    api.post('/upload-employee-image',function(req,res){

        if(req.files!=undefined){

            console.log(req.files);

            cloudinary.uploader.upload( req.files[0].path , function(result){
                        console.log(req.files[0].path);
                        //console.log(result.error);
                    if( result.error != undefined ){
                          res.status(result.error.http_code).send(result.error);
                    }
                    else
                        res.status(201).send({message:result.public_id});

            });
        }
        else
          res.send(404).send({message:"image not found"});
    });

    api.post( '/create-employee' , function( req , res ){
        var emp  = new employee({
            name          :  req.body.name,
            date_of_birth :  req.body.date_of_birth,
            date_of_join  :  new Date( req.body.joinYear,req.body.joinMonth,req.body.joinDate),
            mail          :  req.body.mail,
            pan_num       :  req.body.pan_num,
            phone_number  :  req.body.phone_num,
            work_profile  :  req.body.profile,
            image         :  req.body.image
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


    api.post( '/delete-employee' , function(req , res){

        employee.find({_id : req.body._id })
                                        .remove()
                                            .exec(function(err){
                                                    if(err)
                                                        res.status(400).send(err);
                                                    else
                                                        res.status(200).json({message:'date removed successfully!!'});
                                                });

        });


    api.post( '/edit-employee' , function(req,res) {
            employee.findByIdAndUpdate( req.body.employee_id  ,
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
                },
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