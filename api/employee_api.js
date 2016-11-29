/**
 * Created by SAGAR on 10/16/2016.
 */

var     mongoose  =  require('mongoose');
var     employee = require('../schemas/employee');
module.exports = function(app,express){
    var api = express.Router();
    api.post('/add-employee' , function(req,res){
        var   emp  = new employee({
            name          :  req.body.name,
            age           :  req.body.age,
            date_of_birth :  new Date(req.body.birthDate),
            date_of_join  :  new Date(req.body.joinDate),
            mail          :  req.body.mail,
            phone_number  :  req.body.phoneNumber
        });
        emp.save(function(err){
            if(err)
                res.send(err);
            else
                res.json({message:'new employee is added'});
        })
    });
    api.get('/list-employee', function( req , res ){

        employee.find({}).exec(function(err,emp){

            if(err)
               res.send(err);
            else
               res.send(emp);

        })
    });
    api.get('/delete-employee',function(req , res){
        employee.find({_id : req.query['id'] }).remove().exec(function(err,scucess){
            if(err)
                res.send(err);
            else
                res.send('date removed successfully!!');
        });
    });
    api.post( '/edit-employee' , function(req,res) {

            employee.findOneAndUpdate( {_id:req.query['id']} ,
                {
                    $set :{
                        name          :  req.body.name,
                        age           :  req.body.age,
                        date_of_birth :  new Date(req.body.birthDate),
                        date_of_join  :  new Date(req.body.joinDate),
                        mail          :  req.body.mail,
                        phone_number  :  req.body.phoneNumber
                    }
                },function(err){
                   if(err)
                     res.send(err);
                   else
                     res.send('Query excicuted sucesfully!!');
                }
        )
    });
    return api;
}