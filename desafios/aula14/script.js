

function load() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('#img')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    
    if (hora >= 0 && hora < 12 ) {
        //Bom dia
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = ('#fbe4d2')
        
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = ('#b1b29f')
    } else {
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = ('#53545b')
    }
}