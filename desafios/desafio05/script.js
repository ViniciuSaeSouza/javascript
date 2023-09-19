let number = document.querySelector("input#inputNum");
let board = document.querySelector("select#board");
let info = document.querySelector("div#info");
let values = [];

//Escuta para quando apertar 'Enter' acionar o botão "Adicionar"
number.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    document.getElementById("addBtn").click();
  }
});

//Verifica se o número(n) está entre 1 e 100
function numberCheck(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

//Verifica se o número(n) já está dentro do array values(v)
function boardCheck(n, v) {
  if (v.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

//Adiciona o número ao elemento 'board' e ao array 'values' se passar nos testes numberCheck() e boardCheck()
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


