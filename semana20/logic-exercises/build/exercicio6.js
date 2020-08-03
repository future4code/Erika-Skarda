function reverteString(stringQualquer) {
    return stringQualquer.split('')
        .reverse()
        .join('');
}
console.log(reverteString("Erika"));
function reverte(palavra) {
    let palavraRevertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraRevertida = palavraRevertida + palavra[i];
    }
    return palavraRevertida;
}
//# sourceMappingURL=exercicio6.js.map