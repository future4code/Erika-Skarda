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

      alert("O usuário - cartas:  " + primeiraCarta.texto + " e "+ segundaCarta.texto + "\n" + "A carta revelada do computador é "+ primeiraPC.texto)
         
      let soma = primeiraCarta.valor + segundaCarta.valor
      let arrayCarta = [primeiraCarta.texto, segundaCarta.texto]
      let arrayCartaValor = [primeiraCarta.valor, segundaCarta.valor]
   
         if(confirm("Deseja comprar mais uma carta?"))  {

            while(soma <= 21) { 

            let proxCarta = comprarCarta()
            soma = proxCarta.valor + soma
            arrayCartaValor.push(proxCarta.valor)
            arrayCarta.push(proxCarta.texto)

            alert("Suas cartas são: " + arrayCarta + ". A carta revelada do computador é " + 
            primeiraPC.texto + "\n")
            console.log("Suas cartas são: " + arrayCarta + ". As cartas do computador são: " + primeiraPC.texto + " e " + segundaPC.texto) 

           } 
               if(soma === (primeiraPC.valor + segundaPC.valor)) {
                  alert("Suas cartas são: " + arrayCarta + ". Sua pontuação é: " + soma + "\n" + "As cartas do computador são: " + (primeiraPC.texto + " e " + segundaPC.texto)
                  + " . A pontuação do computador é: " + (primeiraPC.valor + segundaPC.valor) +"\n"+ " Empate!!!")            
               
               } else if(soma > (primeiraPC.valor + segundaPC.valor) && soma <= 21) {
                  alert("Suas cartas são: " + arrayCarta + ". Sua pontuação é: " + soma + "\n" + "As cartas do computador são: " + (primeiraPC.texto + " e " + segundaPC.texto)
                  + " . A pontuação do computador é: " + (primeiraPC.valor + segundaPC.valor) + "\n" +" Usuário venceu!!!")  

               } else {
                  alert("Suas cartas são: " + arrayCarta + ". Sua pontuação é: " + soma + "\n" + "As cartas do computador são: " + (primeiraPC.texto + " e " + segundaPC.texto)
                  + " . A pontuação do computador é: " + (primeiraPC.valor + segundaPC.valor) + "\n" + " Computador venceu!!!")  
               }

            
            alert("FIM DE JOGO!!!")

         } else { 
             
            let somaPC = primeiraPC.valor + segundaPC.valor
            let arrayPCValor = [primeiraPC.valor, segundaPC.valor]
            let arrayPC = [primeiraPC.texto, segundaPC.texto]
            
            while(somaPC <= 21) {

               let proxCartaPC = comprarCarta()
               somaPC = proxCartaPC.valor + somaPC
               arrayPCValor.push(proxCartaPC.valor)
               arrayPC.push(proxCartaPC.texto)

            }
                  if(soma === somaPC) {
                  alert("Suas cartas são: " + arrayCarta + ". Sua pontuação é: " + soma
                   + "\n" + "As cartas do computador são: " + arrayPC + " . A pontuação do computador é: " + somaPC + "\n" + " Empate!!!") 
         
               } else if((soma < somaPC) && somaPC <= 21){
                  alert("Suas cartas são: " + arrayCarta + ". Sua pontuação é: " + soma
                  + "\n" + "As cartas do computador são: " + arrayPC + " . A pontuação do computador é: " + somaPC +"\n"+ " O computador venceu!!! ") 
                     
               } else {
                  alert("Suas cartas são: " + arrayCarta + ". Sua pontuação é: " + soma
                   + "\n" + "As cartas do computador são: " + arrayPC + " . A pontuação do computador é: " + somaPC +"\n"+ " O usuário venceu!!!") 
   
               }
   
                  alert("FIM DE JOGO!!!")
            
         } 
      
   }

} else {

      console.log("Jogo acabou")
   
   }

