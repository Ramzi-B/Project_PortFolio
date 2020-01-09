'use strict';

// Dropdown menu
var navbarToggle = document.querySelector('.navbar-trigger');
var navbarDropdown = document.querySelector('.navbar-dropdown');
// var dropdownItem = doccument.querySelector('.navbar-dropdown a');

function dropdownMenu() {
    if (navbarDropdown.classList.contains('navbar-dropdown')) {
        navbarDropdown.classList.toggle('navbar-dropdown');
    } else {
        navbarDropdown.classList.add('navbar-dropdown');
    }

    navbarDropdown.animate({
        opacity: [1, 0],
        transform: ['translateX(-100%)', 'translateX(0)'],
    }, {
        duration: 600,
        ease: 'cubic-bezier(0.42, 0, 0.58, 1)',
    });
}
