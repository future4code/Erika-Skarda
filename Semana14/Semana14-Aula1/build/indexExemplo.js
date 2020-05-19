"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = process.argv[2];
const age = Number(process.argv[3]);
console.log(`${name}, seja bem-vindo`);
if (age >= 18) {
    console.log('Você é maior de idade');
}
else {
    console.log("Você é menor de idade");
}
//# sourceMappingURL=indexExemplo.js.map