/**
 * Created by SAGAR on 12/20/2016.
 */

angular
    .module("myApp")
         .factory(  "toastDialogServices" , function( $mdDialog,$mdToast){
             return{
                    confirmDialog  :  function( event, title , textContent , ok , cancel ){
                        return  $mdDialog.show(
                            $mdDialog.confirm({
                                title : title,
                                targetEvent : event,
                                textContent : textContent,
                                ok : ok,
                                cancel : cancel
                            })
                        );
                    },
                    alertDialog : function(title,ev,textContent,ok,querySelctor){
                        $mdDialog.show(
                            $mdDialog.alert({
                                parent : angular.element(document.querySelector('#'+querySelctor)),
                                clickOutsideToClose : true,
                                title : title,
                                ok : ok,
                                textContent : textContent,
                                targetEvent : ev
                            })
                        );
                    },
                    promptDialog   :  function(){},
                    custumDialog   :  function(){},
                    showToast : function(message,position,parent){
                        $mdToast.show(
                            $mdToast
                                .simple({
                                    action : 'OK',
                                    textContent : message ,
                                    position     : position,
                                    hideDelay    :  3000,
                                    hightlightAction : true,
                                    parent : parent
                                })
                        );
                    }
             }
         });