/**
 * Created by SAGAR on 12/13/2016.
 */
angular.module("myApp")
    .controller('dialogController' , function( $scope , $mdDialog , $mdToast , $log , Upload , employeeFac , employeeProvider , toastDialogServices  ){


        $scope.Employee = {};
        $scope.test = "working";
        $scope.filename =  employeeFac.getImage()=== undefined ? "Upload image" : employeeFac.getImage().name;
        $scope.workProfile = [ 'salesman' , 'guard' , 'cashier' , 'manager' ];


        $scope.hide =  function(){
            $mdDialog.hide();
        };

        $scope.cancel = function(){
            $mdDialog.cancel();
        };

        function  reload() {
            $scope.$parent.loadEmployee();
        }

        $scope.submit = function(event,querySelctor){
            //todo : form error validation check
                if( employeeFac.getImage() == undefined ){
                    $scope.showToast( "supply image!" ,  $(angular.element(document.getElementById('#popUpContainer')) ) );
                    return
                }
                employeeProvider
                    .uploadImages( employeeFac.getImage() )
                         .then(
                                function(res){
                                       $scope.Employee.image = res.data.message;
                                       employeeProvider.createEmployee($scope.Employee)
                                           .then(
                                               function(suc){
                                                      toastDialogServices.alertDialog( "Success ", event  ,"Employee successfully created", "Ok" , querySelctor );
                                                 },function(err){
                                                      toastDialogServices.alertDialog( "Error " + err.status ,  event  , err.data.message , "Ok" , querySelctor );
                                                  });
                                },
                                function(err){
                                    toastDialogServices.alertDialog( "Error " + err.status ,  event  , err.data.message , "Ok" , querySelctor );
                                },
                                function(evt){
                                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                    //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                                }
                         );

                employeeFac.setImage(undefined);
                $scope.closeDialog();
        }

        $scope.closeDialog = function(){
            $mdDialog.hide();
        }

        $scope.temEmployeeObj={};

        // function to create new employee
         $scope.showDialog = function(ev,str,emp){

             $scope.temEmployeeObj = emp;

             console.log($scope.temEmployeeObj);

             switch (str) {

               case "delete":

                  var tex = "After deleting u can't retrieve the date any more"
                  ok = "Delete",
                  cancel = "Cancel",
                  title = "Would you like to delete this employee??";

                  toastDialogServices
                        .confirmDialog(ev,title,tex,ok,cancel)
                                    .then(
                                             function(success){
                                                employeeProvider.deleteEmployee(emp._id)
                                                    .then(
                                                        function(sucess){
                                                            toastDialogServices.alertDialog( "Success" , event  , "Employee Deleted successfully" , "OK" , 'popUpContainer' );
                                                        },function(failed){

                                                        });
                                             },
                                             function(failed){

                                             }
                                    );

                        break;

              case "edit" :

                      $mdDialog.show({
                                  controller: 'dialogController' ,
                                  templateUrl: 'templates/editEmployee.dialog.html',
                                  parent: angular.element(document.body),
                                  targetEvent: ev,
                                  clickOutsideToClose: true,
                                  fullscreen: true

                              })
                              .then(
                                      function () {
                                          $log.log('diloag shown');
                                      },
                                      function () {
                                          $log.log('diloag failed');
                                      }
                              );
                   break;

                case  "details" :

                    $mdDialog.show({
                            controller: function($scope,emp,$mdDialog){
                                $scope.items = emp;
                                $scope.dialogTitle = "Details";
                                $scope.closeDialog = function(){
                                    $mdDialog.hide();
                                }
                            },
                            templateUrl:'templates/details.employee.dialog.html',
                            parent : angular.equals(document.body),
                            targetEvent : ev ,
                            clickOutsideToClose : true,
                            fullscreen : true,
                            locals :{
                               emp : emp
                            }
                        }).then(function(){
                            $log.log('Dialog worked');
                        },function(){
                            $log.log('Dialog failed')
                        });


                    break;
          }
        };
    })
    .factory("employeeFac",function(){
        var file
        return {
                setImage  : function (image) {
                     file = image;
                },
                getImage : function(){
                     return file;
                }
        }
    });

