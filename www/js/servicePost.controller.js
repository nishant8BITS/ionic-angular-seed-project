(function() {
    'use strict';

    angular
        .module('service',[])
        .controller('DetailedCtrl', DetailedCtrl);

    DetailedCtrl.$inject = ['$scope'];

    /* @ngInject */
    function DetailedCtrl($scope) {
        var vm = this;
    }
})();