var clickCounter = 0;
function toggleDarkLight() {
	let body = document.getElementById("body");
	let button = document.getElementById("button");
	let currentClass = body.className;
	let currentText = button.title;
	body.className = currentClass == "dark-theme" ? "light-theme" : "dark-theme";
	button.title = currentText == "Выключить свет" ? "Включить свет" : "Выключить свет";
	clickCounter++;
	if (clickCounter > 10) {
		clickCounter = 0;
	}
}