var clickCounter = 0;
function toggleDarkLight() {
	let body = document.querySelector("body");
	var buttons = document.querySelectorAll("button");
	let currentClass = body.className;
	let currentText = buttons[0].title;
	body.className = currentClass == "dark-theme" ? "light-theme" : "dark-theme";
	buttons[0].title = currentText == "Выключить свет" ? "Включить свет" : "Выключить свет";
	clickCounter++;
	if (clickCounter > 4) {
		buttons[0].disabled = true;
		clickCounter = 0;
	}
}

var upButton = document.querySelector('.up-button');
window.onscroll = function () {
	if (window.pageYOffset > 1200) {
		upButton.classList.add('shown');
		// window.scrollTo(координата - Х, координата - Y);
	} else {
		upButton.classList.remove('shown');
	}
}
upButton.onclick = function () {
	window.scrollTo(0, 0);
};



