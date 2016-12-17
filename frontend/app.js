 angular.module( 'myApp' , [ "ngMaterial" , 'ui.router' , 'moment-picker' , 'ngFileUpload' ] )
    .controller( 'myCon' , function($scope , $mdSidenav , $log   , employeeProvider  ){

           $scope.openMenu = function(){
                 $mdSidenav('left').open();
           }


           $scope.tabs = [
            {
               name : "Employee"
            } ,
            {
               name : "Admin" ,

            },
            {
               name : "Retailer"
            }
        ];
           $scope.menuEmployee = [
               {
                   name : "Delete",
                   fun  :  "delete"
               },
               {
                   name : "Details",
                   fun  :  "edit"
               },
               {
                   name :  "Message",
                   fun  :  "message"
               }
           ];
           $scope.sideNav=[
               {
                  name : "Employee/admin" ,
                  state : "home"
               },
               {
                   name : "About" ,
                   state : "home"
               },
               {
                   name : "Checkin" ,
                   state : "home"
               },
               {
                   name : "Checkout" ,
                   state : "home"
               },
               {
                   name : "Dashboard" ,
                   state : "home"
               },
               {
                   name : "Product" ,
                   state : "home"
               },
               {
                   name : "Brand" ,
                   state : "home"
               },
               {
                   name :  "Manage store" ,
                   state : "home"
               },
               {
                   name : "Logout" ,
                   state : "home"
               }
           ];

            var promise = employeeProvider.getEmployee();
            promise.then(
                function(payload){
                    $scope.employee = payload.data;
                },
                function(err){
                    $log.error('failed',err.data);
                }
            );

    })
     .directive('sagToolbar',function(){
         return{
             restrict : 'E' ,
             templateUrl: 'templates/toolbar.html'
         }
     })
     .directive('sagNavbar',function(){
        return{
           restrict : 'E' ,
           templateUrl : 'templates/sidenav.html',
           link :function(scope,ele,attr){
           }
        }
     })
     .factory("employeeServices",function($http){
         return{
                 getlist : function(){ return $http.get('/api/list-employee'); }
              }
      })
     .config(function( $stateProvider , $urlRouterProvider ){
            $urlRouterProvider.otherwise('/login');
            $stateProvider.state( "home" , {
                url : "/home",
                templateUrl : "templates/employee.html"
           });
     });
