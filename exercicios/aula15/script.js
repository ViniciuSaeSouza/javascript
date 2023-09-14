function verificar() {
  var ano = new Date().getFullYear();
  var userAno = document.querySelector("input#txtano");
  var res = document.querySelector("div#res");
  var img = document.createElement('img')
  if (Number(userAno.value) <= 1900 || Number(userAno.value) > ano) {
    window.alert("[ERRO] verifique o ano e tente novamente.");
  } else {
    //var userSex = document.querySelector('input#masc');
    var age = ano - Number(userAno.value);
    var sex = "";
    if (document.querySelector("input#masc:checked")) {
      sex = "Masculino";
      if (age < 10 && age > 0) {
        //Criança
        img.setAttribute('src', 'imagens/kid-m.png')
      } else if (age < 30) {
        //jovem
        img.setAttribute('src', 'imagens/young-m.png')
      } else if (age < 60) {
        //adulto
        img.setAttribute('src', 'imagens/adult-m.png')
      } else {
        //idoso
        img.setAttribute('src', 'imagens/elder-m.png')
      }
    } else {
      sex = "Feminino";
      if (age < 10 && age > 0) {
        //Criança
        img.setAttribute('src', 'imagens/kid-f.png')
      } else if (age < 30) {
        //jovem
        img.setAttribute('src', 'imagens/young-f.png')
      } else if (age < 60) {
        //adulto
        img.setAttribute('src', 'imagens/adult-f.png')
      } else {
        //idosa
        img.setAttribute('src', 'imagens/elder-f.png')
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Sua idade é ${age} e seu Sexo é ${sex}`;
    res.appendChild(img)
  }
}
