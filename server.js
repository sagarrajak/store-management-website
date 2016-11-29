/**
 * Created by SAGAR on 7/11/2016.
 */
var expree = require('express');
var bodyParser = require('body-parser');
var morgen = require('morgan');
var config = require('./config');
var mongoose = require('mongoose');
var app = expree();

mongoose.connect(config.database, function(err){
 if(err)
  console.log('error');
 else
  console.log('connected to database');
});

app.use(bodyParser.urlencoded({extendex:true}));
app.use(bodyParser.json());
app.use(morgen('dev'));

app.use('/app', expree.static(__dirname));

//var api = require('./routes/signup')(app,expree);
//app.use( '/api' , api );


var api = require(  './api/employee_api' )(app,expree);
app.use( '/api' , api );


app.get('*',function(req,res){
       res.sendFile(__dirname+'/template/index.html');
});

app.listen( config.port , function(err){
   if(err){console.log(err);}
   else console.log('server is up and runing');
});

