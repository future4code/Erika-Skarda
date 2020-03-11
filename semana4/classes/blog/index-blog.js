/*const arrayPares = []
let qtdPares

let seEPar = (num) => {

    for(i = 0; i <= num; i ++) {

        if(i % 2 === 0) {
            arrayPares.push(i)
        }
    }
    
    return console.log(arrayPares)
}

seEPar(10)

let pares = (numero) => {
    
    let num = 0
    for(i = 0; i <= numero; i ++) {

        if(i % 2 === 0) {
            num =+ i
            console.log(num) 
        }  
    }    
}
pares(10) */

/*
const novoTexto = document.getElementById("container")
novoTexto.innetHTML += "<p>Primeiro</p>"
novoTexto.innetHTML += "<p>Segundo</p>"
novoTexto.innetHTML += "<p>Terceiro</p>"
novoTexto.innetHTML += "<p>PQuarto</p>"
novoTexto.innetHTML += "<p>Quinto</p>"

*/
const novoTexto = document.getElementById("container")
function adiciona(qtd) {
    for(let i=0; i < qtd; i++) {
        novoTexto.innerHTML += "<p>Primeiro</p>"
    }
}
adiciona(1)

let cliquesNoBotao = 0
function alterarQuantidadeDeCliques () {
    cliquesNoBotao += 1
    const paragrafo = document.getElementsByTagName("p")[0]
    paragrafo.innerHTML = "Quantidade de Cliques: " + cliquesNoBotao
}






