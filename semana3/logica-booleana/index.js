    const bool1 = true
    const bool2 = false
    const bool3 = !bool2
    
    let resultado = bool1 && bool2 && bool3
    console.log("a. ", resultado)
    //a. false

    resultado = (bool2 || bool1) && !bool3
    console.log("b. ", resultado)
    //b. false

    resultado = !resultado && (bool1 || bool1)
    console.log("c. ", resultado)
    //c. true
    
    resultado = (resultado && (!bool1 || bool2)) && !bool3
    console.log("d. ", resultado)
    //d. false
    
    console.log("e. ", typeof resultado)
    // boolean

let array
console.log('I. ', array)
//I. Undefined

array = null
console.log('II. ', array)
//II. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
//III. 11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
//IV. 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
//V. 19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
//VI. 3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
//VIII. 1


/*
a. O que é `array` e como se declara em `JS`?
Array é uma maneira de guradar e acessar mais de uma informação. São declaradas através 
de let nomeDaArray = []

b. Qual o index inicial de um `array`?
0

c. Como se determinar o tamanho do `array`?

nomeDaArray.length

d. Indique todas as mensagens impressas no console.
String, Number, Null ou Undefined
*/

let temperatura = 77
kelvin = (temperatura - 32) *5/9 + 273.15
console.log("O valor de 77°F em K é: ", kelvin, "K")

let temperatura2 = 80
fahrenheit = (temperatura2) *9/5 + 32
console.log("O valor de 80°C em Fahrenheit é: ", fahrenheit, "°F")

let temperatura3 = 30
kelvin = temperatura3 + 273.15
fahrenheit = (temperatura3)*9/5 + 32
console.log("O valor de 30°C em Fahrenheit é: ", fahrenheit, "°F")
console.log("O valor de 30°C em Kelvin é: ", kelvin, "K")

let temperatura4 = Number(prompt("Digite a temperatura em Celcius"))
kelvin = temperatura4 + 273.15
fahrenheit = (temperatura4)*9/5 + 32
console.log("O valor de ",temperatura4,"°C ", "em Fahrenheit é: ", fahrenheit, "°F")
console.log("O valor de ",temperatura4,"°C ", "em Kelvin é: ", kelvin, "K")

const nome = prompt("Olá! Qual o seu nome?")
console.log("Resposta: " + nome)

const cor = prompt("Qual sua cor favorita?")
console.log("Resposta: " + cor)

const ling = prompt("Qual linguagem de programação você gostaria de aprender?")
console.log("Resposta: " + ling)

const turma = prompt("Qual turma no Future4 você faz parte?")
console.log("Resposta: " + turma)

const estado = prompt("Qual estado você mora")
console.log("Resposta: " + estado)

const salarioMInimo = 1045
let consumo = 280
let desconto = 0.15

let valorConta = (consumo* 0.05) * 0.85
console.log("O valor a ser pago é: " , valorConta, " Reais") 