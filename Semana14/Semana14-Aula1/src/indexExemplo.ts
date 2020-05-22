export {}

const name: string = process.argv[2];
const age: number = Number(process.argv[3])

console.log(`${name}, seja bem-vindo`)

if(age>=18) {
    console.log('Você é maior de idade')
} else {
    console.log("Você é menor de idade")
}