var clickCounter = 0;
function toggleDarkLight() {
	let body = document.querySelector("body");
	let buttons = document.querySelectorAll("button");
	let currentClass = body.className;
	let currentText = buttons[0].title;
	body.className = currentClass == "dark-theme" ? "light-theme" : "dark-theme";
	buttons[0].title = currentText == "Выключить свет" ? "Включить свет" : "Выключить свет";
	clickCounter++;
	if (clickCounter > 10) {
		clickCounter = 0;
	}
}