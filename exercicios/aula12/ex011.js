//Para verificar o console através do Node.Exec -> F8

var idade = 79

if (idade < 16) {
    console.log('Não pode votar!')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opcional!')
    } else {
        console.log('Voto obrigatório!')
    }
