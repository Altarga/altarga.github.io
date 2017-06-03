var myImage = document.querySelector('img')

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/sergal.png') {
		myImage.setAttribute ('src' , 'images/sergal2.png');
	} else {
		myImage.setAttribute ('src' , 'images/sergal.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name' , myName);
	myHeading.innerHTML = 'What do you want to transport, ' + myName + ' ? ';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'What do you want to transport, ' + storedName + ' ? ';
}

myButton.onclick = function() {
	setUserName();
}