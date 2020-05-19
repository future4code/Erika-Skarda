const firstNumber: number = Number( process.argv[2]);
const secondNumber: number = Number(process.argv[3]);
const thirdNumber: number = Number( process.argv[4]);

function sum(number1: number, number2:number,number3:number) {
    const total: number = number1 + number2 + number3
console.log(` total é ${total}`)
}

sum(firstNumber, secondNumber, thirdNumber)