var mongoose = require('mongoose');
var Employee   =   new mongoose.Schema({

    name : {           type:String , required:true},
    age : {            type:Number , required:true},
    date_of_birth : {  type:Date , required:true},
    date_of_join : {   type:Date , required:true},
    mail : {          type : String , required:true },
    phone_number : {   type:Number , required:true }

});

module.exports =  mongoose.model( 'employee' , Employee );