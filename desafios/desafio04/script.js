function calc() {
  let num = document.querySelector("input#num");
  let disp = document.querySelector("select#selTab");
  disp.innerHTML = "";
  if (num.value.length == "0") {
    window.alert("Favor digitar um número!");
  } else {
    for (c = 1; c <= 10; c++) {
      let res = num.value * c;
      item = document.createElement('option')
      item.text += ` ${num.value} X ${c} = ${res} `;
      disp.appendChild(item)
    }
  }
}
