function fatorial(numero) {
    let fatorial = 1;
    if (numero == 1 || numero == 0) {
        fatorial = 1;
    }
    else if (numero > 1) {
        for (let i = 1; i <= numero; i++) {
            fatorial = i * fatorial;
        }
    }
    console.log(`O Fatorial de ${numero} é ${fatorial}`);
}
fatorial(3);
//# sourceMappingURL=exercise7.js.map