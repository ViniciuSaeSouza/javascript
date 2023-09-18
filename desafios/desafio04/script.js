function calc() {
  let num = document.querySelector("input#num");
  let disp = document.querySelector("div#disp");
  disp.innerHTML = "";
  if (num.value.length == "0") {
    window.alert("Favor digitar um número!");
  } else {
    for (c = 1; c <= 10; c++) {
      let res = num.value * c;
      disp.innerHTML += `<br> ${num.value} X ${c} = ${res} <br>`;
    }
  }
}
