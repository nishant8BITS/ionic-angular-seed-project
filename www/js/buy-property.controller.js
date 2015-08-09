(function() {
    'use strict';

    angular
        .module('service')
        .controller('BuyPropertyCtlr', BuyPropertyCtlr);

    BuyPropertyCtlr.$inject = ['$scope'];

    /* @ngInject */
    function BuyPropertyCtlr($scope) {
        var vm = this;

        $scope.priceSlider = {
		    min: 100,
		    max: 180,
		    ceil: 500,
		    floor: 0
		};

		$scope.translate = function(value){
		    return '₹' + value;
		}
    }
})();