'use strict';

// Fix navbar on scroll
addEventListener('scroll', fixNavbar);

// Toggle dropdownMenu
navbarToggle.addEventListener('click', dropdownMenu);

// WordSlide
function init() {
	onWordSlide();
}
setTimeout(init, 2000);
