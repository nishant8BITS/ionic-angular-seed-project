(function() {
    'use strict';

    angular
        .module('cabs')
        .controller('CabsQuotesCtrl', CabsQuotesCtrl);

    CabsQuotesCtrl.$inject = ['$scope'];

    /* @ngInject */
    function Controller(dependencies) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
        }
    }
})();