/**
 * Created by SAGAR on 12/17/2016.
 */
angular
    .module("myApp")
          .factory( "employeeProvider" , function( $http , $httpParamSerializerJQLike , Upload  ){
                 return{
                        getEmployee   : function(){
                             return $http.get('/api/list-employee');
                        },
                        deleteEmployee : function(){

                        },
                        modifyEmployee : function(){

                        },
                        createEmployee : function(){

                        },
                        uploadImages : function(file,name){

                            Upload.upload({
                                url:'/api/upload-employee-image',
                                data:{file:file,username:name}
                            }).then(
                                function(res){
                                    console.log('Success ' + res.config.data.file.name + 'uploaded. Response: ' + res.data);
                                },
                                function(err){
                                    console.log('Error status: ' + err.status);
                                },
                                function(evt){
                                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                                    console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                                }
                            );
                        }
                 };
          });
