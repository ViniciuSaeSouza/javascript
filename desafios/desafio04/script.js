function calc(){
    let num = document.querySelector('input#num')
    let disp = document.querySelector('div#disp')
    for (c = 1; c <= 10; c++ ) {
        let res = num.value * c
        disp.innerHTML = `${num.value} X ${c} = ${res}`
    }

}