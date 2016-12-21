/**
 * Created by SAGAR on 10/16/2016.
 */
var   mongoose = require('mongoose');

var retailer =  mongoose.Schema({

    name : { type : String , require: true },
    phone_num : { type : Number , require : true },
    mail :  { type : Number , require : true },
    adress : { type : String  }

});
module.exports = mongoose.model( 'retailer' ,  retailer );





