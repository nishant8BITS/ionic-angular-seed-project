(function() {
    'use strict';

    angular
        .module('hotels',[])
        .controller('HotelsQuotesCtrl', HotelsQuotesCtrl);

    HotelsQuotesCtrl.$inject = ['$scope','$cordovaDatePicker', '$ionicPlatform'];

    /* @ngInject */
    function HotelsQuotesCtrl($scope,$cordovaDatePicker,$ionicPlatform) {
        var vm = this;

          var options = {
		    date: new Date(),
		    mode: 'date', // or 'time'
		    minDate: new Date() - 10000,
		    allowOldDates: true,
		    allowFutureDates: false,
		    doneButtonLabel: 'DONE',
		    doneButtonColor: '#F2F3F4',
		    cancelButtonLabel: 'CANCEL',
		    cancelButtonColor: '#000000'
		  };

		  console.log($cordovaDatePicker.show({}));

		$ionicPlatform.ready(function() {
			$cordovaDatePicker.show(options);
			$scope.showDatePicker1 = function(){
				$cordovaDatePicker.show(options).then(function(date){
			        alert(date);
			    });
			}
		});
    }
})();