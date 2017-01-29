/**
 * Created by SAGAR on 10/16/2016.
 */
var    mongoose      =   require('mongoose');

require('./product_type');
require('./product_brand');
require('./retailer');

var ObjectId = mongoose.Schema.Types.ObjectId;
var    product =  mongoose.Schema({

   name     :  {    type  :  String , require : true } ,
   brand    :  {    type  :  ObjectId  , ref : 'brand'  },
   type     :  [{   type  :  ObjectId  ,  ref : 'product_type'   }],
   detail   :  {    type  :  String  },
   price    :  {    type  :  Number , require :true },
   image    :  {    type  :  String   },
   retailer :  [{   type  :  ObjectId , ref : 'retailer' }]

});

module.exports = mongoose.model( 'product' ,  product );






