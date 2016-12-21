 angular.module( 'myApp' , [ "ngMaterial" , 'ui.router' , 'moment-picker' , 'ngFileUpload' ] )
    .controller( 'myCon' , function($scope , $mdSidenav , $log   , employeeProvider  ){

           $scope.openMenu = function(){
                 $mdSidenav('left').open();
           }

           $scope.myConTitle = "Employee";
           $scope.tabsEmployee = [
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
           $scope.tabProduct = [
                  {name : 'Product'},
                  {name : 'Category'}
              ];
           $scope.menuEmployee = [
               {
                   name : "Delete",
                   fun  :  "delete"
               },
               {
                   name : "Details",
                   fun  :  "details"
               },
               {
                   name :  "Edit details",
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
                  state : "home",
                  Title : "Employee"
               },
               {
                   name : "About" ,
                   state : "about" ,
                   Title : "About"
               },
               {
                   name : "Checkin" ,
                   state : "home",
                   Title : "Checkin"
               },
               {
                   name : "Checkout" ,
                   state : "home" ,
                   Title : "Checkout"
               },
               {
                   name : "Dashboard" ,
                   state : "home",
                   Title :"Dashboard"
               },
               {
                   name : "Product" ,
                   state : "product",
                   Title : "Product"
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

           $scope.loadEmployee = function(){
                employeeProvider.
                        getEmployee()
                         .then(
                                    function (payload) {
                                        $scope.employee = payload.data;
                                    },
                                    function (err) {
                                        $log.error('failed', err.data);
                                    }
                              );
             }

    })
     .directive('sagToolbar',function(){
         return{
             restrict : 'E' ,
             controller : function($scope){
             },
             templateUrl: 'templates/toolbar.html'
         }
     })
     .directive('sagNavbar',function(){
        return{
            restrict : 'E' ,
            controller : function($scope){
                 $scope.setToolbar = function(title){
                     $scope.myConTitle=title;
                }
            },
            templateUrl : 'templates/sidenav.html',
        }
     })
     .config(function( $stateProvider , $urlRouterProvider ){

            $urlRouterProvider.otherwise('/login');
            $stateProvider
                .state( "home" , {
                     url : "/home",
                     templateUrl : "templates/employee.html",
                     controller  : function($scope){

                     }
                })
                .state( "product",{
                     url:"/product",
                     templateUrl : "templates/product.html",
                     controller  : function($scope){

                     }
                })
                .state("about",{
                    url: "/about",
                    templateUrl : "templates/about.store.html",
                    controller : function(){

                    }
                });

     });
