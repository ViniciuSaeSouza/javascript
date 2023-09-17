    
function contar() {
    
  if (
    start.value.length == 0 ||
    end.value.length == 0 ||
    step.value.length == 0
  ) {
    window.alert = "Verifique os dados e tente novamente!";
  } else {
    let start = document.querySelector("input#start");
    let end = document.querySelector("input#end");
    let step = document.querySelector("input#step");
    let res = document.querySelector("div#res");
    res.innerHTML = "Contando: ";
    if (start < end) {
      for (
        c = Number(start.value);
        c <= Number(end.value);
        c += Number(step.value)
      ) {
        res.innerHTML += `${c}  `;
        console.log(c)
      }
    } else {
      for (
        c = Number(start.value);
        c >= Number(end.value);
        c -= Number(step.value)
      ) {
        res.innerHTML += `${c}  `;
        console.log(c)
      }
    }
  }
}

console.log(contar())

