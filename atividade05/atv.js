
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


/* recebe apenas um elemento. Essa função verifica se "n" é um numero */
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

/* recebe dois parametros (1 numero e a lista) e verifica se o "n" ja foi digitado */
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

/* ! exclamação significa NÃO */
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {        
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert ('O valor é inválido')
    }

    num.value = ' '
    num.focus()
}


function finalizar() {
    if (valores.length == 0) {
        window.alert ('Adicione algum valor!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for (let pos in valores){
            soma += valores[pos]
            media = soma / total
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]   
        }
        res.innerHTML = ' '
        res.innerHTML += `<p>Foram adicionados ${total} números </p>`
        res.innerHTML += `<p>O maior número foi ${maior}</p>`
        res.innerHTML += `<p>O menor número foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é igual ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é igual ${media}</p>`
    }
}