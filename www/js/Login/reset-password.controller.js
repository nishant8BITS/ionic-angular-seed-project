(function() {
    'use strict';

    angular
        .module('user')
        .controller('ResetPwdCtrl', ResetPwdCtrl);

    ResetPwdCtrl.$inject = ['$scope','$ionicPopup', 'CONSTANT'];

    /* @ngInject */
    function ResetPwdCtrl($scope, $ionicPopup, CONSTANT) {
        var vm = this;

        vm.resetPwd = function(resetPwdForm){

            var emailAdd  = resetPwdForm.emailAdd.$modelValue;

            if(!CONSTANT.EMAIL_REGEX.test(emailAdd)){
              $ionicPopup.alert({
                    title: 'Reset Error', 
                    template: '<div>No acount exists for' + emailAdd + 
                    		  '.Maybe you signed up using a different/incorrect e-mail addrress.</div>', 
                    okText: 'Okay',
                    okType: 'button-stable'
              });
              return false;

            } else{

              // TODO Call service and Passthe data 
              
            }
        }
    }
})();