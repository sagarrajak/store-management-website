var mongoose = require( 'mongoose' );
var right = require( './right' );

var profile = new mongoose.Schema({

     name :       {      type : String , required:true   },
     hr_of_work : {      type : Number                   },
     salary_up :  {      type : Number , require: true   },
     salary_low : {      type : Number , require : true  },
     right :      {      type : right.schema , require : true }

});

module.exports = mongoose.model('profile' , profile );


