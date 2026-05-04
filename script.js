let history = JSON.parse(localStorage.getItem("calcHistory")) || [];

window.onload = function(){
  updateHistory();
};

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

  // Save to localStorage
  localStorage.setItem("calcHistory", JSON.stringify(history));

  history.slice().reverse().forEach((item,index) => {
    let li = document.createElement("li");
    li.textContent = item;

    // delete button
    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.style.marginLeft = "10px";

    btn.onclick = () => {
      history.splice(history.length - 1 - index, 1);
      updateHistory();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function clearHistory(){
  history = [];
  localStorage.removeItem("calcHistory");
  updateHistory();
}

document.addEventListener("keydown", function(e) {
    if (!isNaN(e.key) || "+-*/().".includes(e.key)) {
      e.preventDefault();
        append(e.key);
    }

    if (e.key === "Enter") calculate();

    if (e.key === "Backspace") deleteLast();
});
updateHistory();
