function fatorial(numero:number) : void {
    let fatorial = 1

    if(numero == 1 || numero == 0) {

        fatorial = 1  

    } else if(numero > 1) {
        
        for(let i = 1; i <= numero; i++) {
            fatorial = i * fatorial
            
        }
        
    }
    console.log( `O Fatorial de ${numero} é ${fatorial}`)
}
//fatorial(3)

function x(numero:number):any {
   // console.log(Math.round(numero))

    const valor = (Math.trunc(numero))
    const valorPo = Number.isInteger(numero)
    console.log(valorPo)
    
    if(valor !== numero && (numero >= 0) ) {

        return console.log(numero, "não é natural")
    } else {

        return console.log(numero, "é natural")
    }

}

//x(10.10)

const qtd = (numero:number):number => {
    const numS = numero.toString()

    return numS.length
}
//console.log(qtd(30))
