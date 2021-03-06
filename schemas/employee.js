var mongoose   =   require('mongoose');
var work_profile = require('./work_profile')
//Schema = Mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var employee   =   new mongoose.Schema(  {

    name           : {  type : String , require : true },
    date_of_birth  : {  type : Date ,   require : true },
    date_of_join   : {  type : Date ,   default : Date.now },
    mail           : {  type : String , required:true },
    pan_num        : {  type : String  },
    phone_number   : {  type : Number , required:true },
    work_profile   : {  type : ObjectId , ref : 'work_profile' },
    image          : {  type : String  , require : true}

});

module.exports =  mongoose.model('employee' , employee );

