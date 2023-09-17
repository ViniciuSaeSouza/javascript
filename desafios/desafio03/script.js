function contar() {
  let start = document.querySelector("input#start");
  let end = document.querySelector("input#end");
  let step = document.querySelector("input#step");
  let res = document.querySelector("div#res");
  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    step.value.length == 0
  ){
    window.alert ("Verifique os dados e tente novamente!");
  }
   else {
    res.innerHTML = "Contando: ";
    if (step.value <= 0) {
        res.innerHTML = 'Passo vazio! Considerando passo = 1 <br>'
        step.value = 1
    }
    if (start.value < end.value) {
      for (
        c = Number(start.value);
        c <= Number(end.value);
        c += Number(step.value)
      ) {
        res.innerHTML += `${c} // `;
        console.log(c);
      }
    } else {
      for (
        c = Number(start.value);
        c >= Number(end.value);
        c -= Number(step.value)
      ) {
        res.innerHTML += `${c} // `;
        console.log(c);
      }
    }
    res.innerHTML += '\🏁'
  }
}
