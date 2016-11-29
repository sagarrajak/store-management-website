/**
 * Created by SAGAR on 10/16/2016.
 */
var    mongoose      =   require('mongoose');
var    product_type_obj  =   require('./product_type');
var    product_brand_obj = require('./product_brand');
var    product       =   mongoose.Schema({

   name     :  {   type  :  String , require : true } ,
   brand    :  {   type  :  product_brand_obj.schema  , require : true  } ,
   type     :  {   type  :  product_type_obj.schema , require : true } ,
   detail   :  {   type  :  String  },
   price    :  {   type  : Number , require :true }

});
module.exports = {

     model  : mongoose.model( 'product' ,  product),
     schema : product

};



