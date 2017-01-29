/**
 * Created by SAGAR on 1/20/2017.
 */
var mongoose = require('mongoose');
var employee = require('../../schemas/employee');

module.exports = function(app,express){

    var api = express.Router();

   // router to sort employee by name
    api.get('/name/:id' , function (req,res){
        employee
            .find({})
            .sort({'name':req.params.id})
            .exec(function(err,out){
                if(err)
                    res.send(err);
                else
                    res.status(200).send(out);
            });
    });

   // router to sort employee by age
    api.get('/age/:id', function (req,res){
        employee
            .find({})
            .sort({'date_of_birth':req.params.id})
            .exec(function(err,out){
                if(err)
                    res.send(err);
                else
                    res.status(200).send(out);
            });
    });

    // router to sort employee by  date of join
    api.get('/date-of-join/:id', function (req,res) {
        employee
            .find({})
            .sort({'date_of_join':req.params.id})
            .exec(function(err,out){
                if(err)
                    res.send(err);
                else
                    res.status(200).send(out);
            });
    });

   // function to sort employee by salary
    api.get('/salary/:id', function (req,res){



    });

   return api;
}
