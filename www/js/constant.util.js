(function() {
    'use strict';

    angular
        .module('core', [])

        /*
         * Constant File Used through out Application
         */
        .constant('CONSTANT', (function(){

        	var emailRegEx = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

        	return {
        		EMAIL_REGEX : emailRegEx,
        		PASSWORD_MIN_LENGTH : 5
        	}
        })());
})();

