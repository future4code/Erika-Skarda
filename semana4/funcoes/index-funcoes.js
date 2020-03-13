/* EXERCÍCIO 1 -->

a. []
b. (6) [0, 1, 0, 1, 2, 3] 
c. Array(12)
0: 0
1: 1
2: 0
3: 1
4: 2
5: 3
6: 0
7: 1
8: 2
9: 3
10: 4
11: 5  

const minhaFuncao = (quantidade) => {
    const array = []
    for(let i = 0; i < quantidade; i+=2) {
            for(let j = 0; j < i; j++) {
                array.push(j)
            }
    }
    return array
}
*/

/* EXERCÍCIO 2 -->

a. 0 2
b. Não porque retornar-se a posição. 
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];
    
    const funcao = (lista, nome) => {
      for (let i = 0; i < lista.length; i++) {
        if (lista[i] === nome) {
          return i;
        }
      }
    };
    
    console.log(funcao(arrayDeNomes, "Darvas"));
    console.log(funcao(arrayDeNomes, "João"));
    console.log(funcao(arrayDeNomes, "Paula"));
*/

/*EXERCÍCIO 3  -->
O código passa de um em um no array, cada item é somado com valor de resultadoA e resultado da variável resultadoA recebe esse valor,
a variável resultadoB recebe o valor da array e o multiplica por ela, isso é feito até chegar nu último valor. Que são dois valores,
resultadoA e resultadoB, inseridos no array declado como vazio e por fim retorna-se nele.
Como melhoria, acredito que fecharia o escopo do "for" antes do "return arrayFinal" para que 
a cada iteração, o valor entre no array e depois disso ser retornado.

function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
      
        arrayFinal.push(resultadoA);
        arrayFinal.push(resultadoB);
        
      }
    return arrayFinal;
  }

 console.log(metodo([1,2]))
 */

/* EXERCÍCIO 4 -->
a.*/
let anoHumanos = (idade) => {

    let idadeDoCachorro = idade * 7;
    return idadeDoCachorro
}
console.log("A idade do cachorro é: " + (anoHumanos(2)))

//b. 

function parametros (nome, idade, endereco, estudante) {

    if(estudante === true) {
        return console.log("Eu sou " + nome + ", tenho " + idade + " anos," + " moro em " + endereco + " e sou estudante")
    } else {
        return console.log("Eu sou " + nome + ", tenho " + idade + " anos," + " moro em " + endereco + " e não sou estudante")
    }
    
}
parametros("Ana", 10, "RJ", false)

// EXERCÍCIO 5 -->

function anoRomano (ano) {

    let seculo
    if (ano >= 1000 && ano <= 1100) {
        seculo = "XI"
    } else if (ano >= 1101 && ano <= 1200)  {
        seculo = "XII"

    } else if (ano >= 1201 && ano <= 1300)  {
        seculo = "XIII"

    } else if (ano >= 1301 && ano <= 1400)  {
        seculo = "XIV"
    
    } else if (ano >= 1401 && ano <= 1500)  {
        seculo = "XV"
        
    } else if (ano >= 1501 && ano <= 1600)  {
        seculo = "XVI"
        
    } else if (ano >= 1601 && ano <= 1700)  {
        seculo = "XVII"
        
    } else if (ano >= 1701 && ano <= 1800)  {
        seculo = "XVIII"
        
    } else if (ano >= 1801 && ano <= 1900)  {
        seculo = "XIX"
        
    } else if (ano >= 1901 && ano <= 2000)  {
        seculo = "XX"

    } else if (ano >= 2001 && ano <= 3000)  {
    seculo = "XXI"

    }                         
    return (console.log("O ano " + ano + " pertence ao século " + seculo))
}

anoRomano(2000)

// EXERCÍCIO 6 -->

//a.
const arrayExemplo = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
function quantidadeArray(array) {

    return console.log("O tamanho do array é " + array.length)
    
}
quantidadeArray(arrayExemplo)

//b. 
let verifica = function(num) {
    let mensagem
    if(num%2 === 0 ){
        
        mensagem = true  
    } else {
    
        mensagem = false
    }
    return console.log(mensagem)
}

verifica(2)

//c.
const arrayPares = []
let qtdPares

let seEPar = (array) => {

    for(let num of array) {

        if(num % 2 === 0) {
            arrayPares.push(num)
        }
    }
    qtdPares = arrayPares.length
    return console.log("Esse array possui " + qtdPares + "  números pares")
}
seEPar(arrayExemplo)

//d. 

let par = (array) => {
    
    for(let num of array) {
        if (verifica(num) === true) {
            arrayPares.push(num)
        }
    }
    qtdPares = arrayPares.length // recebr 6
    return console.log("Esse array possui " + qtdPares + "  números pares")
}
par(arrayExemplo)
