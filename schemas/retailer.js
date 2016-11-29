/**
 * Created by SAGAR on 10/16/2016.
 */
var   mongoose = module.exports('mongoose');

var retailer =  mongoose.Schema({

    name : { type : String , require: true },
    phone_num : {type : Number , require : true },
    mail :  {type : Number , require : true }

});

module.exports = {
     schema : retailer ,
     model  : Mongoose.model( 'retailer' ,  retailer )
};




