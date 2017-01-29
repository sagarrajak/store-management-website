var mongoose = require( 'mongoose' );
var right = require( './right' );
var ObjectId = mongoose.Schema.Types.ObjectId;
var profile = new mongoose.Schema({
     name       :       {    type : String , required:true },
     hr_of_work :       {    type : Number                 },
     salary     :       {    type : Number , require: true    },
     right      :       [{   type : ObjectId  , ref : 'right' }]
});
module.exports = mongoose.model('profile' , profile );



