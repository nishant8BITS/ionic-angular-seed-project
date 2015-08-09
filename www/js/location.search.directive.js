/**
    * @ngdoc directive
    * @name module.directive:directiveName
    * @restrict E
    * @description 
    * @element 
    * @example 
**/
angular.module('locationSearch', []).
directive('googlePlaces', function(){
    return {
        restrict:'E',
        replace:true,
        // transclude:true,
        scope: {
        	location:'=',
            place:'=',
            placeholder:'@',
            name:'@'
        },
        template: '<input type="text" id="google_places_ac" name="{{name}}" placeholder="{{placeholder}}">',
        link: function($scope, elm, attrs){
        	console.log(elm);
            var autocomplete = new google.maps.places.Autocomplete(elm[0], {});
            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                $scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
                $scope.place = place;
                $scope.$apply();
            });
        }
    }
});
    