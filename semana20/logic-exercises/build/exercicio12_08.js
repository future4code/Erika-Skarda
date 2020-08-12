function somaTarget(array, target) {
    let numero1 = "";
    let numero2 = "";
    let soma = 0;
    const resposta = {
        resposta: soma
    };
    for (let i = 0; i <= (soma + target || array.length); i++) {
        let j = i + 1;
        soma = array[i] + array[j];
        if (soma == target) {
            return (array[i], "e", array[j]);
        }
        else {
            soma = 0;
        }
    }
    return resposta;
}
console.log(somaTarget([0, 1, 2, 4, 3], 3));
//# sourceMappingURL=exercicio12_08.js.map