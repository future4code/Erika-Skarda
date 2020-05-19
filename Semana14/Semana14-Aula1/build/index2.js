function calculo(array) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const resultado = {
        qtdDeNumeros: array.length,
        qtdImpares: (array.filter(numero => numero % 2 !== 0).length),
        somaTotal: (array.reduce(reducer))
    };
    return console.log(`A quantidade de números é: ${resultado.qtdDeNumeros}
     e quantidade de ímpares é : ${resultado.qtdImpares} e o total é: ${resultado.somaTotal}`);
}
calculo([1, 2, 3, 4]);
//# sourceMappingURL=index2.js.map