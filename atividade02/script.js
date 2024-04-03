function verificar() {
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    var ano = data.getFullYear()
    var tano = document.getElementById ('txtano')
    var res = document.getElementById('res')

    if(tano.value.length == 0 || Number (tano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(tano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id' , 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src' , 'criança.png')
            } else if (idade >= 11 && idade <= 17 ){
                //jovem
                img.setAttribute('src' , 'jovem.png')
            } else if (idade >= 18 && idade <= 50){
                //adulto
                img.setAttribute('src' , 'adulto.png')
            } else {
                //idoso
                img.setAttribute('src' , 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //criança mulher
                img.setAttribute('src' , 'criançam.png')
            } else if (idade >= 11 && idade <= 17 ){
                //jovem mulher
                img.setAttribute('src' , 'jovemm.png')
            } else if (idade >= 18 && idade <= 50){
                //adulta mulher
                img.setAttribute('src' , 'mulher.png')
            } else {
                //idosa mulher
                img.setAttribute('src' , 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =  `Você é ${genero} de ${idade} anos` 
        res.appendChild (img)
    }




}