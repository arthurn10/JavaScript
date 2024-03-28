function carregar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var hora = 17

    msg.innerHTML = `Agora são ${hora} horas` 

    if (hora < 12) {
        img.src = 'foto/manha.jpg'
        document.body.style.background = '#FFFF90'
    } else if (hora <= 18) {
        img.src= 'foto/tarde.jpg'
        document.body.style.background = '#932E10'
    } else {
        img.src = 'foto/noite.jpg'
        document.body.style.background = '#2C5171'
    }
}