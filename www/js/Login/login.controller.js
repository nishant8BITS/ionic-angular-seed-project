(function() {
    'use strict';

    angular
        .module('user')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope','$ionicPopup','CONSTANT'];

    /* @ngInject */
    function LoginCtrl($scope, $ionicPopup, CONSTANT) {
        var vm = this;

        vm.doLogin = function(logInForm){

            var emailAdd  = logInForm.emailAdd.$modelValue,
                password  = logInForm.password.$modelValue;


            if(!CONSTANT.EMAIL_REGEX.test(emailAdd) || password.length < CONSTANT.PASSWORD_MIN_LENGTH){
              $ionicPopup.alert({
                    title: 'Log In Error', 
                    template: '<div>Invalid email or password. Please try again.</div>', 
                    okText: 'Okay',
                    okType: 'button-stable'
              });
              return false;

            } else{

              // TODO Call service and Passthe data 
              
            }

        };
    }
})();