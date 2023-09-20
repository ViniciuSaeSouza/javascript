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
    info.innerHTML = "";
  } else {
    window.alert("Número fora do limite ou já presente na lista!");
  }
  number.value = "";
  number.focus();
}

function calcInfo() {
  if (values.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let total = values.length;
    let highest = values[0];
    let lowest = values[0];
    let sum = 0;
    let average = 0;
    for (let pos in values) {
      sum += values[pos];
      if (values[pos] > highest) highest = values[pos];
      if (values[pos] < lowest) lowest = values[pos];
    }
    average = sum / total;
    info.innerHTML = "";
    info.innerHTML += `<p>Temos ${total} números cadastrados</p>`;
    info.innerHTML += `<p>O maior valor informado foi ${highest}</p>`;
    info.innerHTML += `<p>O menor valor informado foi ${lowest}</p>`;
    info.innerHTML += `<p>Somando todos os valores, temos: ${sum}</p>`;
    info.innerHTML += `<p>A médias dos valores digitados é: ${average}</p>`;

  }
}
