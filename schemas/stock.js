/**
 * Created by SAGAR on 10/16/2016.
 */
var   mongoose     =  require('mongoose');
var   product      =  require('./product');
var   retailer     =  require('./retailer');

var  ObjectId  =  mongoose.Schema.Types.ObjectId;

var stock = mongoose.Schema({

    quantity    :  {  type  : Number  , require : true   },
    seller      :  {  type  :  ObjectId , ref  : 'retailer' },
    product     :  {  type  :  ObjectId , ref  : 'product' },
    buyed_price :  {  type  : Number , require : true },
    exp_date    :  {  type  : Date , require : true }

});

module.exports = mongoose.model('stock' , stock );

