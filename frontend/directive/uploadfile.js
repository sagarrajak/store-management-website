/**
 * Created by SAGAR on 12/17/2016.
 */
angular.module('myApp')
    .directive('sagUpload',function(employeeFac){
      return {
          restrict : 'E' ,
          scope : {saveFileFun: '&'},
          templateUrl : 'templates/upload.file.html',
          link : function ($scope,ele,attr){

              var inputFile =  $(ele[0].querySelector('#fileInput'));
              var buttonInput = $(ele[0].querySelector('#uploadButton'));
              var inputLabel = $(ele[0].querySelector('#textInput'));


              buttonInput.bind('click',function(){
                    inputFile.click();
              });
              inputLabel.bind('click',function(){
                    inputFile.click();
              });
              inputFile.on('change',function(e){
                 var file = e.target.files;
                  if(file[0]){
                      employeeFac.setImage(file[0]);
                      $scope.filename = file[0].name;
                      $scope.employeeImage = file[0];
                   }
                  $scope.$apply();
              });

          }
      };
    });