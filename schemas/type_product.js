/**
 * Created by SAGAR on 10/18/2016.
 */
var mongoose = require('mongoose');

var type = mongoose.Schema({
    product_type : { type : String , require : true }
});
module.exports = {
    model  :   mongoose.model( 'product_type' , type  ),
    schema :   type
};