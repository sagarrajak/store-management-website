/**
 * Created by SAGAR on 12/4/2016.
 */
angular.module('myApp')
        .directive( "navbar" , function(){
            return {
                restrict :  'E' ,
                templateUrl : 'navbarTemplateUrl.html'
            }
        });
