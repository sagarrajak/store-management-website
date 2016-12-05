/**
 * Created by SAGAR on 7/23/2016.
 */
var app = angular.module('myApp' , [] );

app.controller('myCon', ['$scope',function($scope){
        $scope.hideSideNav=1;
}]);

app.directive('uibutton',function(){
    return{
          restrict:'A',
          link:function($scope,ele,attr){
          ele.bind('click', function(){
                 if($scope.hideSideNav)
                       angular.element($('#sidenav')).removeClass('sag-sidenav-hide').addClass('sag-sidenav-show'), $scope.hideSideNav=0;
                 else
                       angular.element($('#sidenav')).removeClass('sag-sidenav-show').addClass('sag-sidenav-hide'), $scope.hideSideNav=1;
          });
        }
    }
});


app.directive('navbarButtom', function(){
       return{
          restrict:"A",
          link:function($scope,ele,attr){
              ele.bind('click', function(){
                  angular.element($("#navbartop")).children("div").each(function(){
                      angular.element($(this)).css({"background":"#901925"});
                  });
                  ele.css({"background":"black"});
              });
          }
       }
});
