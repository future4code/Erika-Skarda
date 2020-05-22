function calculo(numero1, numero2) {
    let maiorNumero;
    const resultados = {
        soma: numero1 + numero2,
        subtracao: numero1 - numero2,
        multiplicacao: numero1 * numero2,
        maior: (numero1 > numero2 ? maiorNumero = numero1 : maiorNumero = numero2)
    };
    return `A soma é: ${resultados.soma} , a subtração é:  ${resultados.subtracao} , multiplicação é :  ${resultados.multiplicacao} e o maior é o ${maiorNumero} `;
}
console.log(calculo(1, 2));
//# sourceMappingURL=index.js.map