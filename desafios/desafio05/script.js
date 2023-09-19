let number = document.querySelector("input#inputNum");
let board = document.querySelector("select#board");
let info = document.querySelector("div#info");
let values = [];

number.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    document.getElementById("addBtn").click();
  }
});

function numberCheck(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function boardCheck(n, v) {
  if (v.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function addToBoard() {
  if (numberCheck(number.value) && !boardCheck(number.value, values)) {
    values.push(Number(number.value));
    boardValue = document.createElement("option");
    boardValue.text = `${number.value} adicionado`;
    board.appendChild(boardValue);
    
  } else {
    window.alert("Número fora do limite ou já presente na lista!");
  }
}


