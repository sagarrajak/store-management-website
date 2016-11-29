var mongoose = required( 'mongoose' );
var profile = new mongoose.Schema({
     name : {           type:String , required:true  },
     hr_of_work : {     type:Number                  },
     salery_up : {      type:number , require: true  },
     salery_low : {     type:number , require : true },
});
module.exports = mongose.model( 'profile' , profile );
