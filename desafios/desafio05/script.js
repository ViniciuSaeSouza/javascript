let number = document.querySelector("input#inputNum");
let board = document.querySelector("select#board");
let info = document.querySelector("div#info");
let values = [];

function numberCheck(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function boardCheck(n, v){
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function addToBoard() {
    if (numberCheck(number.value) && boardCheck(number.value, values)) {
        window.alert('teste')
    } else {
        window.alert('Número fora do limite ou já presente na lista!')
    }
}



/*function addToBoard() {
    if (values.indexOf(number.value) == -1 && number.value > 1 || number.value < 100) {
      boardValue = document.createElement("option");
      //boardValue.value =
      boardValue.text += `${number.value} adicionado`;
      board.appendChild(boardValue);
      values.push(number.value)
      }else{
      window.alert("Número já adicionado ou fora do limite!")
      
    }
  }
*/  