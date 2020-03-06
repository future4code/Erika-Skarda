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
console.log("Bem vindo ao jogo de Blackjack!")


if(confirm("Quer iniciar uma nova rodada?")) {
   const primeiraCarta = comprarCarta();
   const segundaCarta = comprarCarta();
   const primeiraPC = comprarCarta();
   const segundaPC = comprarCarta();
   
   if(primeiraCarta.text === "A" && segundaCarta === "A") {
      const primeiraCarta = comprarCarta();
      const segundaCarta = comprarCarta();

   } else {
      console.log("O usuário - cartas:  " + primeiraCarta.texto + " "+ segundaCarta.texto + " A carta revelada do computador é "+ primeiraPC.texto + "\n")
         if(confirm("Deseja comprar mais uma carta?")) {
            let soma = (primeiraCarta.valor + segundaCarta.valor)
            for(let i = 0; i > 21; i++) {
               let tentativas = comprarCarta()
               soma = tentativas.valor + soma
               console.log("Suas cartas são: " + (primeiraCarta.valor + segundaCarta.valor + tentativas.valor))
            }
            
           // console.log("Suas cartas são: " + primeiraCarta.texto + " "+ segundaCarta.texto + " A carta revelada do computador é "+ primeiraPC.texto + "\n" + "Sua pontuação é: "  +  primeiraCarta.valor + segundaCarta.valor + tentativas.valor)
         } else { 
            
            if((primeiraCarta.valor + segundaCarta.valor) === (primeiraPC.valor + segundaPC.valor) ) {
               console.log("Empate")
      
               } else if ((primeiraCarta.valor + segundaCarta.valor) > (primeiraPC.valor + segundaPC.valor) ) {
                  console.log("Usuário venceu!")
                  
               } else {
                  console.log("Computador venceu!")
               }
         } 
   }
} else {

      console.log("Jogo acabou")
   
   }


