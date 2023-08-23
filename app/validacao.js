function verificarSeValorValido(chute){

    const numero = +chute

    if(seChuteForInvalido(numero)){

        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (seNumeroForMaiorOuMenorQueValorPermitido(numero)){

        elementoChute.innerHTML += `<div>Valor inválido informe um número entre 
        ${menorValor} e ${maiorValor}</div>`
        return
    }

    if( numero === numeroSecreto){

        document.body.innerHTML =`
        
            <h2> Parabéns você acertou <h2>
            <h3>O número secreto é ${numeroSecreto}
            <div><button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button></div>
            
        `
    } else if ( numero > numeroSecreto){

        elementoChute.innerHTML+=`
        <div>O número secreto é menor 
        <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {

        elementoChute.innerHTML+=`
        <div>O número secreto é maior 
        <i class="fa-solid fa-arrow-up"></i></div>
        `
    }



    function seChuteForInvalido() {
        return Number.isNaN(numero)
    }

    function seNumeroForMaiorOuMenorQueValorPermitido(numero){
       
        return numero > maiorValor || numero < menorValor 

    }

    document.body.addEventListener('click', e => {

        if (e.target.id=='jogar-novamente'){

            window.location.reload()
        }

        
    })
}