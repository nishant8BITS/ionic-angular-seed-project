(function() {
    'use strict';

    angular
        .module('user')
        .controller('SignUpCtrl', SignUpCtrl);

    SignUpCtrl.$inject = ['$scope'];

    /* @ngInject */
    function SignUpCtrl($scope) {
        var vm = this;

        vm.signup = function(regForm){

        }
    }
})();
