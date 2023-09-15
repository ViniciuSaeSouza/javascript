let num = [3 , 1 ,2]  
num[3] = 4
num.push(5)
num.sort()
console.log(num)
console.log(`O Número de elementos é: ${num.length}`)

for (let pos=0;pos<num.length;pos++) {
    console.log(`Este é o elemento ${pos} e tem o valor: ${num[pos]}`)
}