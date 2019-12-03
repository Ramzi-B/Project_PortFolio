(function(){
    'use strict';

    // Navigation
    var navItem = document.querySelectorAll('.navbar .navbar-dropdown a');

    for (var i = 0; i < navItem.length; i++) {
    	navItem[i].addEventListener('click', function() {
    		for (var i = 0; i < navItem.length; i++) {
    			// navbarDropdown.classList.add('navbar-dropdown');
    			navItem[i].className = '';
    		}

    		this.className = 'active';
    	});
    }

    // fix Navbar top
    var navbarTop, yPos;

    function yScroll() {
    	navbarTop = document.querySelector('.navbar-top');
    	yPos = window.pageYOffset;

    	if (yPos >= 50) {
    		navbarTop.style.padding = '0em 1em';
    		navbarTop.style.background = '#1c293a';
    	} else {
    		navbarTop.style.padding = '2em 1em';
    		navbarTop.style.background = '';
    	}
    }

    addEventListener('scroll', yScroll);
})();
