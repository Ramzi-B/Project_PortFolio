'use strict';

// Navigation
var navItem = document.querySelectorAll('.navbar .navbar-dropdown a');

for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', function() {
        for (var i = 0; i < navItem.length; i++) {
            navItem[i].className = '';
        }
        this.className = 'active';
    });
}

// fix Navbar top
var navbarTop, yPos;

function fixNavbar() {
    navbarTop = document.querySelector('.navbar-top');
    yPos = window.pageYOffset;

    if (yPos >= 50) {
        navbarTop.style.padding = '0em 1em';
        navbarTop.style.background = 'var(--bkg-header)';
        navbarTop.style.borderBottom = '1px solid rgba(255,255,255, 0.2)';
        navbarTop.style.boxShadow = '0 0 4px 2px rgba(0,0,0, 0.6)';
    } else {
        navbarTop.style.padding = '2em 1em';
        navbarTop.style.background = '';
        navbarTop.style.borderBottom = '';
        navbarTop.style.boxShadow = '';
    }
}
