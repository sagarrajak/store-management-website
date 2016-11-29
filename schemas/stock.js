/**
 * Created by SAGAR on 10/16/2016.
 */
var   mongoose = require('mongoose');
var   product_obj = require('./product');
var   checkin = require('./checkin');

var stock = mongoose.Schema({

    quality    :  {  type  : Number , require : true    } ,
    checkin    :  {  type  : checkin.schema  ,          } ,
    seller     :  {                                     } ,
    product    :  {                                     }

});
