var mongoose = required( 'mongoose' );
var right = require( './right' );

var profile = new mongoose.Schema({

     name :       {      type : String , required:true   },
     hr_of_work : {      type : Number                   },
     salary_up :  {      type : number , require: true   },
     salary_low : {      type : number , require : true  },
     right :      {      type : right.schema , require : true }

});

module.exports = {

       schema : profile ,
       modal  : mongoose.modal('profile' , profile )

};
