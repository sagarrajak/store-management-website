var mongoose   =   require('mongoose');
var work_profile = require('work_profile');

var employee   =   new mongoose.Schema({

    name           : {  type :String },
    age            : {  type :Number },
    date_of_birth  : {  type :Date },
    date_of_join   : {  type :Date , default : Date.now },
    mail           : {  type : String , required:true },
    pane_num       : {  type :string  },
    phone_number   : {  type : Number , required:true },
    work_profile   : {  type : work_profile.schema , require:true }

});

module.exports = {

   schema : employee ,
   model  : mongoose.model('employee' , employee )

};