var mongoose = require('mongoose');
var employee = require('../schemas/employee');
var fileUpload = require('express-fileupload');
var cloudinary = require("../../cloudinary_config");


module.exports = function(app,express){

    var api = express.Router();

    api.post('/upload-employee-image',function(req,res){

        if (req.files != undefined) {
            cloudinary.uploader.upload(req.files[0].path, function (result){
                if (result.error != undefined){
                    res.json(result);
                }
                else res.status(200).json({message: result.public_id});
            });
        }
        else
            res.status(404).send({message: "image not found"});

    });

    api.post('/delete-employee-image',function(req,res){
        employee
            .find( { _id : req.body.id })
            .select('image')
            .exec(function(err,emp){
                    cloudinary.uploader.destroy( emp[0]['image'] ,function(result){
                        if( result.error != undefined )
                            res.json(result);
                        else
                            res.status(200).json({message:"Image deleted successfully"})
                    });
            });

    });

    api.post('/create-employee',function (req,res){

        var emp = new employee({

                name: req.body.name,
                date_of_birth: req.body.date_of_birth,
                date_of_join: req.body.date_of_join,
                mail: req.body.mail,
                pan_num: req.body.pan_num,
                phone_number: req.body.phone_num,
                work_profile: req.body.profile,
                image: req.body.image

        });

        emp.save(function (err) {
            if (err)
                res.send(err);
            else
                res.json({message: 'new employee is added'});
        });
    });


    api.get('/list-employee',function (req, res){

        employee.find({}).exec(function(err,emp){
            if (err)
                res.json(err);
            else
                res.json(emp);
        });

    });


    api.post('/delete-employee',function (req, res){

        employee.find({_id: req.body._id})
            .remove()
            .exec(function (err){
                if (err)
                    res.status(400).send(err);
                else
                    res.status(200).json({message: 'date removed successfully!!'});
            });


    });

    api.delete('/:id',function(req,res){

        employee.find({_id : req.params.id})
            .remove()
            .exec(function (err,emp){
                //console.log(emp);
                if (err)
                    res.status(400).send(err);
                else
                    res.status(200).json({message: 'date removed successfully!!'});
            });

    });

    api.put('/:id' , function(req,res) {
        employee.findByIdAndUpdate( req.params.id ,
            {
                $set: {
                    name: req.body.name,
                    date_of_birth: req.body.date_of_birth,
                    date_of_join: req.body.date_of_join,
                    mail: req.body.mail,
                    pan_num: req.body.pan_num,
                    phone_number: req.body.phone_num,
                    work_profile: req.body.profile,
                    image: req.body.image
                }
            },
            function (err){
                if (err)
                    res.send(err);
                else
                    res.status(200).json({message: 'Query executed successfully!!'});
            }
        )
    });


    //api.get('/clear-employee', function (req, res) {
    //    employee.find({})
    //        .remove()
    //        .exec(function (err) {
    //            if (err)
    //                res.status(400).send(err);
    //            else
    //                res.status(200).json({message: "data cleared successfully"});
    //        });
    //});


    return api;
}