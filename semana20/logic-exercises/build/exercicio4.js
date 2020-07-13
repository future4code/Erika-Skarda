function exercicio4(string) {
    const stringSplitada = string.split("-");
    for (let i = 0; i < stringSplitada.length; i++) {
        if (typeof (stringSplitada[i]) === "number") {
            return true;
        }
        else {
            return false;
        }
    }
    return;
}
function exercicio_4(palavra) {
    const stringSplitada = palavra.split("");
    let regex = /[0-9]/;
    const arrayDeNumeros = [];
    for (let i = 0; i < stringSplitada.length; i++) {
        if (regex.test(stringSplitada[i])) {
            arrayDeNumeros.push(stringSplitada[i]);
        }
    }
    if (arrayDeNumeros.length === stringSplitada.length) {
        return true;
    }
    else {
        return false;
    }
}
console.log(exercicio_4("9899"));
//# sourceMappingURL=exercicio4.js.map