(function() {
    'use strict';

    angular
        .module('user',[])
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope'];

    /* @ngInject */
    function HomeCtrl($scope) {
        var vm = this;
    }
})();