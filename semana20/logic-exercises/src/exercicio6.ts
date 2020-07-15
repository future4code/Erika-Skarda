function reverteString(stringQualquer:string) : any {
    return stringQualquer.split('')
        .reverse()
        .join('')
}

console.log(reverteString("Erika"))

function reverte(palavra:string)  : any {
    let palavraRevertida = ""

    for(let i = palavra.length - 1; i >= 0; i--) {

        palavraRevertida = palavraRevertida + palavra[i]

    }
    return palavraRevertida
}