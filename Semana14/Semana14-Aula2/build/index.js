"use strict";
//Exercício 1
// process.argv[0]: string = //node
// process.argv[1]: string = //o arquivo
// process.argv[2]: string = //primeiro argumento
// process.argv[3]: string = //segundo argumento
// switch(operacao){
// 	case "soma":
// 		//seu código aqui
// 		break;
// 	case "subt":
// 		//seu código aqui
// 		break;
// }
const number1 = Number(process.argv[2]);
const number2 = Number(process.argv[3]);
const operacao = String(process.argv[4]);
function calc(num1, num2, operacao) {
    let result;
    switch (operacao) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mult":
            result = num1 * num2;
            break;
        case "div":
            result = num1 / num2;
            break;
        default:
            result = "kkkkcrying";
    }
    return (`Resposta: ${result}`);
}
console.log(calc(number1, number2, operacao));
