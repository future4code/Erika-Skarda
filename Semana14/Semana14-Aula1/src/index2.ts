// Exercício 2

// const arr: number[] = [];
// 				  //ou
// const arr: Array<number> = [];


function calculo(array:number[]) {
   
    const reducer = (accumulator:number,currentValue:number) => accumulator + currentValue

    const resultado : {

        qtdDeNumeros:number,
        qtdImpares:number,
        somaTotal:number
    } = {
        qtdDeNumeros: array.length,
        qtdImpares: (

        array.filter(numero => numero % 2 !== 0).length

        ),
         
        somaTotal: (
          array.reduce(reducer)
        
      )
    }

    return console.log(`A quantidade de números é: ${resultado.qtdDeNumeros}
     e quantidade de ímpares é : ${resultado.qtdImpares} e o total é: ${resultado.somaTotal}`)
}
calculo([1,2,3,4])