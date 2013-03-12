// Redirects
function redirectPage2() {
	window.location = "../html/page2.html"
}

function redirectPage3() {
	window.location = "../html/page3.html"
}

function redirectPageAbout() {
	window.location = "../html/about.html"
}

function redirectPageGuidance() {
	window.location = "../html/guidance.html"
}

function redirectPageSettings() {
	window.location = "../html/settings.html"
}

// Create new stuff for selects
function createNewCategory() {
	// Android Dialog wär hier gut!
	navigator.notification.alert(
		'Pam you did it!', 
		omg, 
		'Yo Nigga', 
		'Hell Yeah');
	localStorage.lastname='Smith';
	alert(localStorage.lastname);
}

function omg() {
	alert('Funktion ausgeführt');
}