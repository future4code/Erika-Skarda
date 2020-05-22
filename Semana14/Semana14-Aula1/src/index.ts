// Exercício 1:

function calculo(numero1:number, numero2:number): any {
    let maiorNumero;
    
    const resultados : {
        soma: number,
        subtracao: number,
        multiplicacao: number,
        maior:any
    } =
    {
        soma: numero1 + numero2,
        subtracao: numero1 - numero2,
        multiplicacao: numero1 * numero2,
        maior: (numero1 > numero2 ? maiorNumero=numero1 : maiorNumero=numero2)
    }
    return `A soma é: ${resultados.soma} , a subtração é:  ${resultados.subtracao} , multiplicação é :  ${resultados.multiplicacao} e o maior é o ${maiorNumero} `
}

console.log(calculo(1,2))