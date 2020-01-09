'use strict';

// create array
var words = ['developpeur web', 'php', 'sql', 'javascript', 'back end', 'front end'],
    elm = document.getElementById('myWords'),
    index = 0;

function onWordNext() {
	index++;
	elm.style.opacity = 0;

	if (index > (words.length - 1)) {
		index = 0;
	}

	setTimeout('onWordSlide()', 1000);
}

function onWordSlide() {
	elm.innerHTML = words[index];
	elm.style.opacity = 1;

	setTimeout('onWordNext()', 2000);
}
