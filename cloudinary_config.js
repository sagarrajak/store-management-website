/**
 * Created by SAGAR on 12/17/2016.
 */
var cloudinary = module.require('cloudinary');
cloudinary.config({
    cloud_name : "yourclodinaryname",
    api_key :"your_api_key",
    api_secret :"your_api_secreat_key"
});
module.exports = cloudinary;
