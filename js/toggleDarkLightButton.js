function toggleDarkLight() {
    var body = document.getElementById("body");
    var button = document.getElementById("button");
    var currentClass = body.className;
    var currentText = button.textContent;
    body.className = currentClass == "dark-theme" ? "light-theme" : "dark-theme";
    button.textContent = currentText == "Выключить свет" ? "Включить свет" : "Выключить свет";
  }