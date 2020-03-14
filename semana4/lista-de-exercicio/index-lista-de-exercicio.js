/* Exercícios de interpretação de código */

/* 1. A função conversorDeMoeda recebe um argumento (valorEmDolar), depois tem a constante
que mostra uma caixa de diálogo onde o usuário digita o valor da cotação e altera seu tipo para tipo number.
O return é responsável pelo retono da função que é concatenação da strin "R$" como o valor digitado * argumento.
A constante "meuDinheiro recebe a função anterior com o argumento (100). O valor impresso depende que qual a cotação 
o usuário inserir, hoje no caso é 4,71. Então imprimria R$471

function conversorDeMoeda(valorEmDolar) { 
    const cotacao = Number(prompt("Informe a cotação"));

    return "R$" + (cotacao * valorEmDolar)
}

const meuDinheiro = conversorDeMoeda(100);
console.log(meuDinheiro)
*/

/* 2. a função investeDinheiro recebe dois argumentos: (tipoDeInvestimento, valor) , dentro dela é declarado a variável
alorAposInvestimento, aplica-se a condicional switch onde de acordo com o tipo de investimento, vai determinar a o valor apos investimento,
caso alguem invocar a função com um tipo que a condicional não declarou, teremos um alert. 
console.log(novoMontante); -> imprimirá o valor da operação: 1.1 * 150
console.log(segundoMontante);-> imprimirá undefined


function investeDinheiro(tipoDeInvestimento, valor) {
    let valorAposInvestimento;

    switch(tipoDeInvestimento) {
        case "Poupança":
            valorAposInvestimento = valor * 1.03;
            break;

        case "Renda Fixa":
            valorAposInvestimento = valor * 1.05;
            break;

        case "CDB":
            valorAposInvestimento = valor * 1.06;
            break;
        
        case "Ações":
            valorAposInvestimento = valor * 1.1;
            break;

        default:
            alert("Tipo de investmento informado incorreto!");
            break;            
    }

    return valorAposInvestimento;
}

const novoMontante = investeDinheiro("Ações", 150);
const segundoMontante = investeDinheiro("Tesouro Direto", 200);

console.log(novoMontante);
console.log(segundoMontante);

*/

/* 3. O loop for faz uma varredura pelo array numeros e de acordo com a condicional insere ele no array1 para
intens pares, no array2 para itens não pares(ímpar). 
console.log("Quantidade totalde números", numeros.length) -> imprime a frase e a quantidade de itens no array mumeros
console.log(array1.length) -> imprime a quantidade do array1
console.log(array2.length) -> imprime a quantidade do array1

const numeros = [25, 12, 55, 64, 121, 44, 11, 84, 51, 48, 14, 73, 111, 283];
const array1 = [];
const array2 = [];

for(let numero of numeros) {

    if(numero % 2 === 0) {
        array1.push(numero);
    } else {
        array2.push(numero);
    }
}

console.log("Quantidade totalde números", numeros.length)
console.log(array1.length)
console.log(array2.length)

*/

/* 4. Foi declaro o array numeros e 2 variáveis numero1 e numero2. Abriu-se um for que varredura no array, 
caso esse numero (do array) seja menor que infinito(numero1), numero1 recebe esse valor. E um outro if caso o numero(do array)
seja maio quezero numero2 receberá este numero.

console imprimirá numero1 e numero2 */

//----------------------------------------- FIM--------------------------------------------------------------------------------------

//Exercícios de Lógica de Programação

/*1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

-> WHILE : 

    let x = 0;
    while(x < 10) {
        x ++
    }
-> FOR :

    const  array = [1, 2, 3]

    for(let i = 0; i <= array.lenght; i++) {
        const numero = numeros[i]
        console.log(numero)
    }
-> FOR / OF :

      const  array = [1, 2, 3]

    for(let numero of array) {
        console.log(numero)
    }

/* 2.

a) False
b) True
c) True
d) True
e) False
*/
/*
 3.
 function numerosPares(numero){
    const quantidadeDeNumerosPares = numero
    let i = 0
    while(i < quantidadeDeNumerosPares){
        console.log( i * 2 )
        i++
    }
}
console.log(numerosPares(5))
*/

/* 4. 

let triangulo = (a, b, c) => {

    if(a === b && b === c) {

        return "Triângulo Equiilátero";

    } else if (a === b || b === c || a === c) {

        return "Triângulo Isósceles";

    } else {

        return "Triângulo Escaleno"
    }
}

console.log(triangulo(10, 10, 1));

*/
/* 5. 

let operacao = (a, b) => {

    if(a === b) {
        console.log ("Iguais");

    } else if(a > b) {

        console.log ("O primeiro valor é maior");
        console.log ("A diferença entre eles é " + (a - b));
        if(a % b === 0) {
            console.log(a + " é divisível por " + b )
        } else {
            console.log(a + " não é divisível por " + b )
        }
    } else {

       console.log ("O segundo valor é maior");
       console.log ("A diferença entre eles é " + (b - a));

       if(b % a === 0) {
        console.log(b + " é divisível por " + a )

       } else {
        console.log(b + " não é divisível por " + a )

       }

    }

}

console.log(operacao(10, 5));

*/

// --------------------------------------------FIM-------------------------------------------------------

// Exercícios de Funções

// 1. 
/* 
 
    let array = [1, 2, 6, 4, 33];
    let segundoMaior = 0;
    let segundoMenor = 0;

    array.sort(function(a, b) {

        return a - b

    });
        segundoMenor = array[(array.length - 2)]
        console.log(segundoMenor)

        segundoMaior = array[1]
        console.log(segundoMaior)
       // return  "Segundo maior é " + segundoMaior  + " e o segundo menor é " + segundoMenor;
*/

/* 2. 


    let oi = function(mensagem) {

        alert(mensagem);
    }

    oi("Hello Future4");
*/    
//------------------------------------------------FIM-----------------------------------------------------------
 
//Exercícios de Objetos

/* 1. Objetos são estruturas que nos permite definir um determinado elemento (objeto), através de chaves e nelas
 contendo os valores, com array nos permite agrupar um grupo de elemenytos que pode ser objetos ou elementos únicos.
 */

/* 2. 

let retangulo = function (lado1, lado2) {
    let largura = lado1;
    let altura= lado2;

    let perimetro = (2 * (lado1 + lado2));
    let area = lado1 * lado2;

    return console.log( "Largura: " + largura + " Altura: " + altura + " Perímetro: " + perimetro + " Área: " + area);

}
retangulo(20, 10);
*/

/* 3. 

let filme = {

    nome: "Get Out",
    ano: 2018,
    diretor: "Jordan Peele",
    ator: "Daniel Kaluuya",
    atriz: "Allison Williams"
}

console.log ("Venha assistir ao filme" + filme.nome +", de " + filme['ano'] + ", dirigido por " + filme.diretor + 
" e estrelado por " + filme.ator + " e " + filme['atriz'])
*/

/* 4. 

class pessoa {
    constructor(nome, email, idade, endereco) {

        this.nome = nome
        this.idade = idade
        this.email = email
        this.endereco = endereco
    }
}

function anonimizarPessoa() {
    const anonimo = new pessoa ("Anônimo", pessoa.idade, pessoa.email, pessoa.endereco)
    return anonimo
}


*/

//-----------------------------FIM--------------------------

//Exercícios de Funções de array

// 1. a)

let arrayPessoas = [

	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

    const adulto = arrayPessoas.filter((x, index, array) => {
        return (x.idade >= 20)  
    });
    
    console.log(adulto)

// 1. b) 

    const crianca = arrayPessoas.filter((x, index, array) => {
        return (x.idade < 20)   
    });

    console.log(crianca)
    

// 2. a)

    const array = [1, 2, 3, 4, 5, 6]
    const dobrar = array.map((numero, index, array) => {
        return numero * 2
    });

console.log(dobrar);

// 2. b)

    const triplicar = array.map((numero, index, array) => {
        return numero * 3
    })

    console.log(triplicar);

// 2. c)

    const verificar = array.map((numero, index, array) => {

        if (numero % 2 === 0) {
            return `${numero} é par `
      
        } else {
            return `${numero} é ímpar`
        }
    });
    console.log(verificar);

// 3. a)

    const pessoas = [
        { nome: "Paula", idade: 12, altura: 1.8},
        { nome: "João", idade: 20, altura: 1.3},
        { nome: "Pedro", idade: 15, altura: 1.9},
        { nome: "Luciano", idade: 22, altura: 1.8},
        { nome: "Artur", idade: 10, altura: 1.2},
        { nome: "Soter", idade: 70, altura: 1.9}
    ]

    const podeEntrar = pessoas.filter((pode, index, array) => {
        return ((pode.idade >=14 && pode.idade < 60) && pode.altura >= 1.5)
    
    });

    console.log(podeEntrar);

//3. b)

    const NpodeEntrar = pessoas.filter((pode, index, array) => {
        return ((pode.idade >=14 && pode.idade < 60) && pode.altura >= 1.5)
    
    });

    console.log(NpodeEntrar);

    //4. a)
    const consultas = [

    { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    
    ]

    const marcadas = consultas.map((marcada) => {
        if(marcada.cancelada === false && marcada.genero === "feminino" ) {

            return (`Olá, Sra ${marcada.nome}. Estamos enviando esta mensagem para
            lembrá-la  da sua consulta no dia ${marcada.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`)

        } else if(marcada.cancelada === false && marcada.genero === "masculino" )

            return (`Olá, Sr ${marcada.nome}. Estamos enviando esta mensagem para
            lembrá-lo  da sua consulta no dia ${marcada.dataDaConsulta}. Por favor, acuse
            o recebimento deste e-mail.`)

    });
    console.log(marcadas)

//4. b)

    const Nmarcadas = consultas.map((marcada) => {
        if(marcada.cancelada === true && marcada.genero === "feminino" ) {

            return (`Olá, Sra ${marcada.nome}. Infelizmente, sua consulta marcada
            para o dia ${marcada.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
            contato conosco para remarcá-la`)

        } else if( marcada.cancelada === true && marcada.genero === "masculino" )  {

            return (`Olá, Srr ${marcada.nome}. Infelizmente, sua consulta marcada
            para o dia ${marcada.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
            contato conosco para remarcá-la`)
        }
    });
    console.log(Nmarcadas);

// 5. 

    const contas = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

    const atualizarSaldo = arr => {
        arr.forEach (conta => {
            conta.compras.forEach(compra => {
                contas.saldoTotal -= compra;
            })
            
        });
    };
    
    console.log(atualizarSaldo(contas))