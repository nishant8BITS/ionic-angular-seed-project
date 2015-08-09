(function() {
    'use strict';

    angular
        .module('hotels',[])
        .controller('HotelsQuotesCtrl', HotelsQuotesCtrl);

    HotelsQuotesCtrl.$inject = ['$scope','$ionicPlatform', '$ionicPopup', '$cordovaLocalNotification'];

    /* @ngInject */
    function HotelsQuotesCtrl($scope,$ionicPlatform, $ionicPopup, $cordovaLocalNotification) {
        var vm = this;

        vm.checkInDate = new Date();
        vm.checkOutDate = new Date();
        vm.location = '';
        vm.place = '';
        vm.budgetCheked = true;
        $scope.priceSlider = {
		    min: 100,
		    max: 180,
		    ceil: 500,
		    floor: 0
		};

		$scope.translate = function(value){
		    return '₹' + value;
		}

		vm.roomsBookingInfo = [
			{
				"adults": 1,
				"child" : 0
			},
			{
				"adults": 2,
				"child" : 0
			},
			{
				"adults": 6,
				"child" : 1
			}
		];

		vm.addRoom = function(){
			if(vm.roomsBookingInfo.length <= 6){
					vm.roomsBookingInfo.push({
					"adults": 1,
					"child" : 0
				});
			}
		}

		vm.removeRoom = function(){
			var len = vm.roomsBookingInfo.length;
			if(len>1 && len<=6){
				vm.roomsBookingInfo.splice(len-1, 1);
			}
		}

		vm.checkIndatePickerCallback = function (val) {
		    if(typeof(val)==='undefined'){      
		        console.log('Date not selected');
		    }else{
		        vm.checkInDate = val;
		    }
		};

		vm.checkOutdatePickerCallback = function(val){
		    if(typeof(val)==='undefined'){      
		        console.log('Date not selected');
		    }else{
		        vm.checkOutDate = val;
		    }
		};
        
		$ionicPlatform.ready(function() {

			//$cordovaLocalNotification.add({message: "hi nish"});
		});
    }
})();