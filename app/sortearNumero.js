const menorValor =1
const maiorValor =100
const numeroSecreto = geraNumeroSecreto()

function geraNumeroSecreto() {
    return parseInt(Math.random() * maiorValor + 1)
}
console.log('Número Secreto é: ', numeroSecreto)

const elementoMenoValor = document.getElementById('menor-valor')
elementoMenoValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor