var mongoose   =   require('mongoose');
var work_profile = require('./work_profile')
//Schema = Mongoose.Schema;

var employee   =   new mongoose.Schema(  {

    name           : {  type : String , require : true },
    age            : {  type : Number , require : true },
    date_of_birth  : {  type : Date ,   require : true },
    date_of_join   : {  type : Date ,   default : Date.now },
    mail           : {  type : String , required:true },
    pan_num        : {  type : String  },
    phone_number   : [{type : Number , required:true }],
    work_profile   : {  type : mongoose.Schema.Types.ObjectId , ref : 'work_profile' }

});

module.exports =  mongoose.model('employee' , employee );

