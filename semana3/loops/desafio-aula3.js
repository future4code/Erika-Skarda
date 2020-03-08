/* DESAFIO 1 -->
0
00
0000000
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
*/
//DESAFIO 2

console.log("Vamos jogar!")
let numeroEscolhido = Number(prompt("Digite um número"))
let numeroChutado = Number(prompt("Digite um número"))
let tentativas = 1


while(numeroChutado !== numeroEscolhido) {
     if(numeroChutado > numeroEscolhido) {
        console.log("O número chutado foi: " + numeroChutado)
        console.log("Errrrrrrrou, é maior")
        tentativas += 1
        numeroChutado = Number(prompt("Digite um número"))
    } else {
        console.log("O número chutado foi: " + numeroChutado)
        console.log("Errrrrrrrou, é menor")
        tentativas += 1
        numeroChutado = Number(prompt("Digite um número"))
    }
    
}
console.log("Acertou!!" + "O número de tentativas foi: " + tentativas)


//DESAFIO 3
let numeroEscolhido1= Math.floor((Math.random() * 10) + 1);
console.log("Vamos jogar!")
let numeroChutado = Number(prompt("Digite um número"))
let tentativas = 1


while(numeroChutado !== numeroEscolhido1) {
     if(numeroChutado > numeroEscolhido1) {
        console.log("O número chutado foi: " + numeroChutado)
        console.log("Errrrrrrrou, é maior")
        tentativas += 1
        numeroChutado = Number(prompt("Digite um número"))
    } else {
        console.log("O número chutado foi: " + numeroChutado)
        console.log("Errrrrrrrou, é menor")
        tentativas += 1
        numeroChutado = Number(prompt("Digite um número"))
    }
    
}
console.log("Acertou!!" + "O número de tentativas foi: " + tentativas)

/* Fazer a alteração foi bem tranquila, graças a propiedadede Math.random() * n) +1)
Usei o valor de 10 para facilitar verificação. Acredito que se tiver uma lista de todos,
tentativas, facilitaria.