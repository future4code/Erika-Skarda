import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
<script type="module" src="nossoJogo.js"></script>
console.log("Bem vindo ao jogo de Blackjack!")


if(confirm("Quer iniciar uma nova rodada?")) {
 const primeiraCarta = comprarCarta();
 const segundaCarta = comprarCarta();
 const primeiraPC = comprarCarta();
 const segundaPC = comprarCarta();

console.log("O usuário - cartas:  " + primeiraCarta.texto + segundaCarta.texto + " -" + "pontuação " + (primeiraCarta.valor + segundaCarta.valor))
console.log("O computador - cartas:  " + primeiraPC.texto + segundaPC.texto + " -" + "pontuação " + (primeiraPC.valor + segundaPC.valor))	
   if((primeiraCarta.valor + segundaCarta.valor) === (primeiraPC.valor + segundaPC.valor) ) {
      console.log("Empate")

   } else if ((primeiraCarta.valor + segundaCarta.valor) > (primeiraPC.valor + segundaPC.valor) ) {
      console.log("Usuário venceu!")

   } else {
      console.log("Computador venceu!")
   }
} else {

   console.log("Jogo acabou")
 
}
