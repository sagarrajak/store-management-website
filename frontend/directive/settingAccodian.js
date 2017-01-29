/**
 * Created by SAGAR on 12/26/2016.
 */
angular
    .module("myApp")
        .directive("sagAccordion",function(){
            return{
                scope : {title : '@'},
                restrict : "E",
                transclude : true,
                controller : function($scope){
                    $scope.Ahide = false;
                    $scope.hideElement = function(){
                        $scope.Ahide = !$scope.Ahide;
                    }
                },
                templateUrl : "templates/accordion.html",
                link : function(scope,ele,attr){}
            }
        });