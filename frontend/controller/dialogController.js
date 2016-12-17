/**
 * Created by SAGAR on 12/13/2016.
 */
angular.module("myApp")
    .controller('dialogController' , function( $scope , $mdDialog , $mdToast , $log , Upload , employeeFac , employeeProvider ){

        $scope.Employee = {};
        $scope.filename =  employeeFac.getImage()=== undefined ? "Upload image" : employeeFac.getImage().name;
        $scope.workProfile = [ 'salesman' , 'guard' , 'cashier' , 'manager' ];
        $scope.hide =  function(){
            $mdDialog.hide();
        };

        $scope.cancel = function(){
            $mdDialog.cancel();
        };

        $scope.submit = function(){

            $scope.Employee.image =  employeeFac.getImage();
            if(employeeFac.getImage() == undefined){
                $scope.showToast("supply image!" ,  $(angular.element(document.getElementById('#popUpContainer')) ) );
                console.log($(angular.element(document.getElementById('#popUpContainer')) ));
                return
            }
            employeeProvider.uploadImages( employeeFac.getImage() , "sagar" );
            employeeFac.setImage(undefined);
            $scope.closeDialog();

        }

        $scope.showToast = function(message , parent ){
            $mdToast.show(

                 $mdToast
                     .simple()
                      .action('OK')
                      .highlightAction(true)
                       .textContent(message)
                        .position('top left')
                          .hideDelay(3000)
                            .parent(parent)
            );
        };

        $scope.closeDialog = function(){
            $mdDialog.hide();
        }

        // function to create new employee
         $scope.showDialog = function( ev , str ){
            console.log(str);

            switch (str) {

              case "delete":

                       // Dialog for deleting data form template :
                          var confirm =  $mdDialog.confirm()
                              .title('Would you like to delete this employee')
                              .textContent("After deleting u can't retrieve the date any more")
                              .targetEvent(ev)
                              .ok("Delete")
                              .hasBackdrop(false)
                              .cancel("Cancel");
                          $mdDialog
                              .show(confirm)
                              .then(
                                  function(){
                                      $scope.dilaog.status = "Dialog success";
                                      $log.log('Dialog shown');
                                  },
                                  function(){
                                      $log.log('Dialog shown');
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
                              fullscreen: false
                          })
                          .then(function () {
                                  $log.log('diloag shown');
                              },
                              function () {
                                  $log.log('diloag failed');
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

