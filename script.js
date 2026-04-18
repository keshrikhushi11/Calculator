const display = document.getElementById("display");
function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value;
    if (expression.trim() === "") return;
    let result = Function('"use strict"; return (' + expression + ')')();
    display.value = result;
  } catch(error) {
    display.value = "Error";
  }
}
function deleteLast(){
  display.value = display.value.slice(0, -1);
}
