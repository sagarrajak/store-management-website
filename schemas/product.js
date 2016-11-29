/**
 * Created by SAGAR on 10/16/2016.
 */
var    mongoose      =   require('mongoose');
var    product_type_obj  =   require('./type_product');
var    product_brand_obj = require('./product_brand');
var    product       =   mongoose.Schema({

   name     :  {   type  :  String , require : true } ,
   brand    :  {   type  :  product_brand_obj.schema  , require : true  } ,
   type     :  {   type  :  product_type_obj.schema , require : true } ,
   detail   :  {   type : String }

});

module.exports = {

     model  : mongoose.model( 'product' ,  product),
     schema : product

};



