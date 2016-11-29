/**
 * Created by SAGAR on 7/11/2016.
 */

var mongoose  = require('mongoose');
var schema =  mongoose.Schema;
var bcrypt =  require('bcryptjs');
var  SALT_WORK_FACTOR =10;


var UseSchema = new schema({
   name:String,
   username:{type:String, require:true,index:{unique:true}},
   password:{type:String,require:true,select:false},
});


UseSchema.pre('save',function(next){
 var user = this;
 if(!user.isModified('password')) return next();
 bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
    if(err) return next(err);
    bcrypt.hash(user.password,salt,function(err,hash){
       if(err) return next(err);
       user.password  = hash;
       next();
    });
 });
});



UseSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password,this.password );
}


module.exports = mongoose.model('User',UseSchema);
