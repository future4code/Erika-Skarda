/* EXERCÍCIO 1 --> 
Declarou a sum como 0, e i como 0 também e até 14 (i < 15), haverá somas de todos os valores e guardadods na variável sum.
let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
connsole.log(sum)
*/

/* EXERCÍCIO 2 -->
a. O código .push, adiciona elemento(s), sempre no final do array. 
b. (4) [10, 15, 25, 30] 
c. 3 -(4) [10, 15, 25, 30] e 4- [12]

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    const novaLista = []
    const numero = 5
    for(const item of lista){
      if(item%numero === 0) {
        novaLista.push(item)
      }
    }
    console.log(novaLista)


*/

// EXERCÍCIO 3 -->
//a. 
const arrayOriginal = [90, 730, 130, 40, 60, 1, 70, 100, 90, 103, 110, 55]
let maior = arrayOriginal[0]
let menor = arrayOriginal[0]

for(let i = 0; i < arrayOriginal.length; i ++) {
    const elemento = arrayOriginal[i]

        if(maior < elemento) {
            maior = elemento
        } else if(menor > elemento) {
            menor = elemento 
        
        }    
}
    console.log("O maior número é " + maior + " e o menor é " + menor)

//b.     
const novoArray = []
const valor = 10

for(const num of arrayOriginal) {
    novoArray.push(num/valor)
}
console.log(novoArray)

//c. 
const arrayPares = []

for(let num of arrayOriginal) {
    if(num%2 === 0) {
        arrayPares.push(num)
    }
}
console.log(arrayPares)

//d.
let index = 0
const indexArray = []

for(let i = 0; i < arrayOriginal.length; i++) {
  index = arrayOriginal[i]
   indexArray.push("O elemento do índex " + i + " é "+ index)
  
}
console.log(indexArray)
