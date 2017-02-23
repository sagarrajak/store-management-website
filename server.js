/**
 * Created by SAGAR on 12/22/2016.
 */
var mongoose = require('mongoose');
var express  = require('express');
var morgan = require('morgan');
var body_parser =  require('body-parser');
var multer = require('multer');
var config = require('./server-config');
var app = express();

mongoose.connect( config.db , function(err){
        if(err)
         console.log(err);
        else
         console.log("connected to data base");
});

app.use(body_parser.urlencoded());
app.use(body_parser.json());

var storage = multer.diskStorage({
   destination : function (req,file,cb){
         cb(null,__dirname+'/files' )
   },
   filename : function(req,files,cb){
         cb(null,files.originalname)  ;
   }
});

app.use(multer({storage:storage}).any());

//routes for chrud operation

var  product_brand = require('./api/product_brand_api')(app,express);
var  product_type = require('./api/product_type_api')(app,express);
var  right  = require('./api/right_api')(app,express);
var  work_profile = require('./api/work_profile_api')(app,express);
var  employee_api = require('./api/employee_api')(app,express);
var  product_api = require('./api/product_api')(app,express);
var  retailer = require('./api/retailer_api')(app,express);
var  stock = require('./api/stock_api')(app,express);
//routes for extras
var employee_routes =  require('./api/routes/employee_routes')(app,express);
var product_routes = require('./api/routes/product_routes')(app,express);


app.use('/api/employee',employee_api);
app.use('/api/product-brand',product_brand);
app.use('/api/product-type', product_type );
app.use('/api/work-profile',work_profile);
app.use('/api/product' , product_api );
app.use('/api/retailer' , retailer );
app.use('/api/right' , right );
app.use('/api/stock',stock);

app.use('/api/routes/employee',employee_routes);
app.use('/api/routes/product',product_routes);

app.use(express.static(__dirname+'/app/frontend'));
app.get('*',function(req,res){
   res.sendFile(__dirname+'/app/frontend/templates/index.html');
});
app.listen( 3000,"0.0.0.0",function(err){
    if(err)
      console.log(err);
    else
      console.log('server-started');
});