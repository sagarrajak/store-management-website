/**
 * Created by SAGAR on 10/18/2016.
 */

var     mongoose  =  require('mongoose');
var     product   =  require('../schemas/type_product');

module.exports    =  function( app , express ){

    var api = express.Router();

    // api to adding new product type
    api.post('/add' , function( req , res ){


    });

    // api for  deleting  previous product type
    api.delete('/delete' ,  function( req , res ){


    });

    return api;
}










