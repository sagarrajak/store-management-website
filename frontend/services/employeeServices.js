/**
 * Created by SAGAR on 12/17/2016.
 */
angular
    .module("myApp")
          .factory( "employeeProvider" , function( $http , $httpParamSerializerJQLike , Upload  ){
                 return{
                        getEmployee   : function(){
                             return $http.get('/api/employee/list-employee');
                        },
                        deleteEmployee : function(id){
                             console.log(id);
                              var data ={
                                  _id : id
                              }
                              var config = {
                                'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
                              };
                             return $http.post('/api/employee/delete-employee',data,config);
                        },
                        modifyEmployee : function(){

                        },
                        createEmployee : function(employee){
                                var  data = {
                                    name          :  employee.name,
                                    date_of_birth :  new Date(1994,09,05),
                                    date_of_join  :  new Date(2007,08,20),
                                    mail          :  employee.mail,
                                    pan_num       :  employee.panNum,
                                    phone_num     :  employee.phoneNum,
                                    image         :  employee.image
                                };
                                var config = {
                                    'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
                                };
                             return $http.post( '/api/employee/create-employee' , data , config);
                        },
                        uploadImages : function(file){

                          return  Upload.upload({
                                        url:'/api/employee/upload-employee-image',
                                        data:{file:file,username:name}
                                    });
                        }
                 };
          });
