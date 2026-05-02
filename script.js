let history = [];
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

    expression = expression
      .replace(/Math\.sin\(([^)]+)\)/g, 'Math.sin(($1) * Math.PI / 180)')
      .replace(/Math\.cos\(([^)]+)\)/g, 'Math.cos(($1) * Math.PI / 180)')
      .replace(/Math\.tan\(([^)]+)\)/g, 'Math.tan(($1) * Math.PI / 180)');

    let result = Function('"use strict"; return (' + expression + ')')();

    //SAVE HISTORY
    let record = display.value + " = " + result;
    history.push(record);

    updateHistory();

    display.value = result;

  } catch (error) {
    display.value = "Error";
  }
}
function deleteLast(){
  display.value = display.value.slice(0, -1);
}

function updateHistory() {
  let list = document.getElementById("historyList");
  list.innerHTML = "";

  history.slice().reverse().forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}