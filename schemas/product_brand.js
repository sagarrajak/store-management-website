/**
 * Created by SAGAR on 11/29/2016.
 */
var mongoose = require('mongoose');
var product_brand = mongoose.Schema({
     brand   : { type : String , require : true },
     details : { type : String },
     image   : { type : String }
});
module.exports = mongoose.model( 'brand' , product_brand );
