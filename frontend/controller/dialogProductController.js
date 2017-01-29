/**
 * Created by SAGAR on 12/21/2016.
 */
angular.module("myApp")
    .controller( "productDialogController",function($scope,toastDialogServices,$mdToast,$mdDialog,productProvider){

        $scope.product = {};
        $scope.createProduct= function(){}
        $scope.deleteProduct= function(){}
        $scope.detailsProduct= function(){
                $mdDialog.show(



                );
        },

        $scope.menuCall = function(eve,con,str){
                switch(str){
                    case  'edit' :
                         break;
                    case  'delete':
                        break;
                    case  'add' :
                        break;
                    case 'details':
                        break;
                }
        }

    });