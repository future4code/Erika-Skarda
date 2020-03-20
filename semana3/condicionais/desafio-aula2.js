// EXERCICIO 5 - DESENHO

//https://drive.google.com/file/d/1VBzG1aE-JCBYU_tXrDFseX699xuwjhhb/view?usp=sharing


// DESAFIO

let nome = prompt("Qual seu nome completo?")
const tipoDeJogo = prompt("Qual tipo de jogo? IN indica internacional; e DO indica doméstico;(IN/DO)")
const etapa = prompt("Qual etapa? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final (SF/DT/FI)")
const categoria = prompt("Qual categoria? (1, 2, 3, 4)")
const qtd = Number(prompt("Quantos ingressos?"))
const dolar = 4.1


console.log("---Dados da compra---")
console.log("Nome do cliente: ", nome)

// DOMÉSTICO
if (tipoDeJogo === "DO" && etapa === "SF" && categoria === "1")  {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria: 1")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 1.320,00 ")
    console.log("Valor total: ", qtd * 1320)

} else if (tipoDeJogo === "DO" && etapa === "SF" && categoria === "2")  {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria: 2")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 880,00 ")
    console.log("Valor total: ", qtd * 880)

} else if (tipoDeJogo === "DO" && etapa === "SF" && categoria === "3")  {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria: 3")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 550,00 ")
    console.log("Valor total: ", qtd * 550)

} else if (tipoDeJogo === "DO" && etapa === "SF" && categoria === "4") {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria: 4")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 220,00 ")
    console.log("Valor total: ", qtd * 220)

} else if (tipoDeJogo === "DO" && etapa === "DT" && categoria === "1") {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Decisão do 3° lugar")
    console.log("Categoria: 1")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 660,00 ")
    console.log("Valor total: ", qtd * 660)

} else if (tipoDeJogo === "DO" && etapa === "DT" && categoria === "2") {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Decisão do 3° lugar")
    console.log("Categoria: 2")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 440,00 ")
    console.log("Valor total: ", qtd * 440)

} else if (tipoDeJogo === "DO" && etapa === "DT" && categoria === "3") {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Decisão do 3° lugar")
    console.log("Categoria: 3")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 330,00 ")
    console.log("Valor total: ", qtd * 330)

} else if (tipoDeJogo === "DO" && etapa === "DT" && categoria === "4") {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Decisão do 3° lugar")
    console.log("Categoria: 4")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 170,00 ")
    console.log("Valor total: ", qtd * 170)    

} else if (tipoDeJogo === "DO" && etapa === "FI" && categoria === "1") {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 1")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 1.980,00 ")
    console.log("Valor total: ", qtd * 1980)    

} else if (tipoDeJogo === "DO" && etapa === "FI" && categoria === "2") {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 2")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 1.320,00 ")
    console.log("Valor total: ", qtd * 1320)    

} else if (tipoDeJogo === "DO" && etapa === "FI" && categoria === "3") {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 3")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 880,00 ")
    console.log("Valor total: ", qtd * 880)   

} else if (tipoDeJogo === "DO" && etapa === "FI" && categoria === "4") {
    console.log ("Tipo de jogo: Nacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 3")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 330,00 ")
    console.log("Valor total: ", qtd * 330)   
}

// INTERNACIONAL

if (tipoDeJogo === "IN" && etapa === "SF" && categoria === "1")  {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria: 1")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 1.320,00 ")
    console.log("Valor total: ", qtd * 1320 * dolar)

} else if (tipoDeJogo === "IN" && etapa === "SF" && categoria === "2")  {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria: 2")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 880,00 ")
    console.log("Valor total: ", qtd * 880 * dolar)

} else if (tipoDeJogo === "IN" && etapa === "SF" && categoria === "3")  {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria: 3")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 550,00 ")
    console.log("Valor total: ", qtd * 550 *dolar)

} else if (tipoDeJogo === "IN" && etapa === "SF" && categoria === "4") {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Semifinais")
    console.log("Categoria: 4")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 220,00 ")
    console.log("Valor total: ", qtd * 220 * dolar)

} else if (tipoDeJogo === "IN" && etapa === "DT" && categoria === "1") {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Decisão do 3° lugar")
    console.log("Categoria: 1")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 660,00 ")
    console.log("Valor total: ", qtd * 660 * dolar)

} else if (tipoDeJogo === "IN" && etapa === "DT" && categoria === "2") {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Decisão do 3° lugar")
    console.log("Categoria: 2")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 440,00 ")
    console.log("Valor total: ", qtd * 440 * dolar)

} else if (tipoDeJogo === "IN" && etapa === "DT" && categoria === "3") {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Decisão do 3° lugar")
    console.log("Categoria: 3")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 330,00 ")
    console.log("Valor total: ", qtd * 330 * dolar)

} else if (tipoDeJogo === "IN" && etapa === "DT" && categoria === "4") {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Decisão do 3° lugar")
    console.log("Categoria: 4")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 170,00 ")
    console.log("Valor total: ", qtd * 170 * dolar)    

} else if (tipoDeJogo === "IN" && etapa === "FI" && categoria === "1") {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 1")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 1.980,00 ")
    console.log("Valor total: ", qtd * 1980 * dolar)    

} else if (tipoDeJogo === "IN" && etapa === "FI" && categoria === "2") {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 2")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 1.320,00 ")
    console.log("Valor total: ", qtd * 1320 * dolar)    

} else if (tipoDeJogo === "IN" && etapa === "FI" && categoria === "3") {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 3")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 880,00 ")
    console.log("Valor total: ", qtd * 880 *dolar)   

} else if (tipoDeJogo === "IN" && etapa === "FI" && categoria === "4") {
    console.log ("Tipo de jogo: Internacional")
    console.log("Etapa do jogo: Final")
    console.log("Categoria: 4")
    console.log("Quantidade de ingressos: ", qtd, "ingressos")
    console.log("---Valores---")
    console.log("Valor do ingresso: R$ 330,00 ")
    console.log("Valor total: ", qtd * 330 * dolar)       
}   