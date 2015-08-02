(function() {
    'use strict';

    angular
        .module('user')
        .controller('SignUpCtrl', SignUpCtrl);

    SignUpCtrl.$inject = ['$scope', '$ionicPopup', 'CONSTANT'];

    /* @ngInject */
    function SignUpCtrl($scope, $ionicPopup, CONSTANT) {
        var vm = this;

        vm.signup = function(signUpForm){

            var emailAdd  = signUpForm.emailAdd.$modelValue,
                password  = signUpForm.password.$modelValue, 
                firstName = signUpForm.firstName.$modelValue,
                lastName  = signUpForm.lastName.$modelValue;


            if(!CONSTANT.EMAIL_REGEX.test(emailAdd)){
              $ionicPopup.alert({
                    title: 'Sign Up Error', 
                    template: '<div>Your Email Format is invalid</div>', 
                    okText: 'Okay',
                    okType: 'button-stable'
              });
              return false;

            }else if(password.length < CONSTANT.PASSWORD_MIN_LENGTH){
              $ionicPopup.alert({
                    title: 'Sign Up Error', 
                    template: '<div>Your Password must be at least 5 chaaracters.</div>', 
                    okText: 'Okay',
                    okType: 'button-stable'
              });
              return false;

            }else{

              // TODO Call service and Passthe data 
              
            }

        };
    }
})();
