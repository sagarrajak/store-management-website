/**
 * Created by SAGAR on 7/11/2016.
 */
var User = require('./user');
var Config = require('../config');
var superSereatkey = Config.secreatkey;
var jsonwebtoken = require('jsonwebtoken');
var createToken = function(user){
  return jsonwebtoken.sign({
    id : user.id,
    name : user.name,
    username:user.username
  },superSereatkey);
};
module.exports = function(app,express){
    var api = express.Router();
    api.post('/signup', function(req,res){
       var user = new User({
          name :req.body.name,
          username:req.body.username,
          password:req.body.password
       });
       user.save(function(err){
        if(err){
            res.send(err);
            return;
        }
       });
       res.json({message:'user is been created'});
    });
    api.get('/users',function(req,res){
        User.find({}, function(err,user){
            if(err){
                res.send(err);
                return;
            }
            res.send(user);
        });
    });
    api.post('/login',function(req,res){
    User.findOne({username:req.body.username}).select('password').exec(function(err,user){
       if(!user) return res.json({
           success:false,
           message:"user does not exsist"
       });
       else if(err) throw  err;
       else if(user){
          var validate = user.comparePassword(req.body.password);
           if(!validate)
              res.send({
                  success:false,
                  message:'invalid password!'
              });
           else{
               var token = createToken(user);
               res.json({
                 success:true,
                 message:'login suceess',
                 token : token
               })
           }
       }
     });
    });
   api.use(function(req,res,next){
    var token = req.body.token||req.param('token')||req.header['x-access-token'];
     if(token){
          jsonwebtoken.verify(token,superSereatkey,function(err, decoded){
           if(err)
               res.status(403).send({success:false,message : 'failed to authenticate'});
           else
              res.decoded = decoded;
              next();
        });
     }
    else res.status(403).send({success:false,message:'token not provided'});
   });
   api.get('/', function(req,res){
      res.json({message:'welcome'});
   });
 return api;
}



