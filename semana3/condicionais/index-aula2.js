
/* EXERCÍCIO 1 --> O usuário digita um número, esse número é convertido de string para number,
depois é aplicado a condicional if + else, onde se o resto da divisão do númedo digitado for 0,
ou seja, se esse número for par a mensagem impressa no console será "Passou no teste", 
caso o resto dessa divisão seja diferente de 0 a mensagem será "Não passou no teste"
 */

 /* EXERCÍCIO 2 --> 
 a. O uso do switch e case como condicional para várias alternativas. 
 b. O preço da fruta  maça  é  R$  5
 c. 3.5 porque não tem como entrar como o usuário entrar com a quantidade.
 d. O console apresenta´ra o preço do default*/

 /* EXERCÍCIO 3 -->
 Sim, haverá erro "mensagem não está definida". A variávem mensagem está no escopo do primeiro "IF"
 se colocarmos o console.log(mensagem) dentro do escopo pai (primeiro "IF") funcionaria perfeitamente.
 */

//EXERCÍCIO 4 a. -->
const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o segundo número")
const numero3 = prompt("Digite o terceiro número.")
 /*
if(numero1 < 0 || numero2 < 0) {
  
  console.log("Você escolheu número negativo, tente outra vez")
} else if (numero1 > 0 && numero2 > 0) {

  if (numero1 === numero2) {
   console.log("Você escolheu números iguais")
  } else if (numero1 > numero2) {
   console.log("Seu primeiro número é maior", numero1, numero2)
  } else {
    console.log("Seu segundo número é maior", numero2,numero1)

  } } */

//EXERCÍCIO 4 b. -->

if (numero1 === numero2 && numero2 === numero3) {
  console.log("Escolheu 3 números iguais")
} else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3 ) {
  console.log ("Escolha 3 números distintos")
 } else {
   if (numero1 > numero2 && numero2 > numero3) {
   console.log(numero1, numero2, numero3)
   //321 usuário digita

    } else if (numero1 > numero3 && numero3 > numero2) {
      console.log(numero1, numero3, numero2)
    //312 usuário digita

    } else if (numero1 < numero2 && numero1 > numero3) {
      console.log(numero2, numero1, numero3)
      //231 usuário digita

    } else if(numero1 < numero2 && numero1 > numero3) {
      console.log(numero2, numero3, numero1)
      //213 usuário digita
    } else if (numero3 > numero2 && numero2 > numero1) {
      console.log(numero3, numero2, numero1)
      //123 usuário digita

    } else if (numero2 > numero3 && numero3 > numero1) {
      console.log(numero2, numero3, numero1)
      //132 usuário digita
    } }

//EXERCÍCIO 4 c. -->

if (numero1 === numero2 && numero2 === numero3) {
  console.log("Escolheu 3 números iguais")
} else if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3 ) {
  console.log ("Escolha 3 números distintos")
 } else {
   if (numero1 > numero2 && numero2 > numero3) {
   console.log(numero1, numero2, numero3)
   //321 usuário digita

    } else if (numero1 > numero3 && numero3 > numero2) {
      console.log(numero1, numero3, numero2)
    //312 usuário digita

    } else if (numero1 < numero2 && numero1 > numero3) {
      console.log(numero2, numero1, numero3)
      //231 usuário digita

    } else if(numero1 < numero2 && numero1 > numero3) {
      console.log(numero2, numero3, numero1)
      //213 usuário digita
    } else if (numero3 > numero2 && numero2 > numero1) {
      console.log(numero3, numero2, numero1)
      //123 usuário digita

    } else if (numero2 > numero3 && numero3 > numero1) {
      console.log(numero2, numero3, numero1)
      //132 usuário digita
    } }

    //EXERCÍCIO 5 -->

    let animal = prompt("Possui osso? (s/n)")
      if(animal === "n") {
        console.log ("Invertebrado")
         } else {
            console.log("Vetebrado")
            let pelos = prompt("Tem pêlos? (s/n)")
            let racional = prompt("É racional? (s/n)")
              if(pelos === "s" && racional === "s" ) {
                console.log("Humano")  
              } else if (pelos === "s" && racional ==="n") {
                  console.log("Mamífero não humano")     
              } else if (pelos === "n" && racional ==="n") {
                let pena = prompt("Tem penas?(s/n)")
                if(pena === "s") {
                  console.log("Ave")
                } else {
                  let terrestre = prompt("Animal terrestre?(s/n)")
                    if(terrestre === "n") {
                      console.log("Peixe")
                    } else {
                      let anfibio = prompt("Passa a vida em ambientes aquaticos?(s/n)")
                      if (anfibio === "s") {
                      console.log("Anfíbio")
                    } else {
                      console.log("Réptil")
                    }
                    
                  }
                }
              }
                      
          }

   
  

    

    