let num = [8 , 9 , 95]  
num[3] = 4
num.push(5)
num.sort()
console.log(num)
console.log(`O Número de elementos é: ${num.length}`)
let index = number.indexOf(2)

/*for (let pos=0;pos<num.length;pos++) {
    console.log(`Este é o elemento ${pos} e tem o valor: ${num[pos]}`)
}*/

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
if (num.indexOf == -1) {
    console.log('Valor não encontrado no vetor!')
}else {
    console.log(`O Valor digitado está na posição: ${index}`)
}