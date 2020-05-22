"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUser = exports.countUser = void 0;
const fs = __importStar(require("fs"));
const moment_1 = __importDefault(require("moment"));
//Cálculo de milisegundos até hoje
// const today: number = new Date().getTime();
const ano = new Date().getFullYear();
const today = moment_1.default();
console.log(today);
exports.countUser = {
    name: process.argv[2],
    dateOfBirth: process.argv[3],
    cpf: Number(process.argv[4]),
    saldo: 0,
    extratos: []
};
exports.fileUser = 'fileUser.json';
function createCount(countUser) {
    // let age = Number(ano - countUser.dateOfBirth)
    const userDate = moment_1.default(`${countUser.dateOfBirth}`, 'DD/MM/YYYY');
    const inYears = today.diff(userDate, 'years');
    const inMonth = today.diff(userDate, 'months');
    console.log(inMonth);
    console.log(inYears);
    if (inYears < 18) {
        console.log("Você não tem idade pra criar uma conta");
    }
    else {
        try {
            const data = fs.readFileSync(exports.fileUser);
            const treatedData = data.toString();
            const doc = JSON.parse(treatedData);
            if (doc.find((account) => account.cpf === countUser.cpf)) {
                console.log("Você já possui cadastro");
            }
            else {
                doc.push(countUser);
                const jsonToString = JSON.stringify(doc, null, 2);
                fs.writeFileSync(exports.fileUser, jsonToString);
                console.log('Dado inserido com sucesso');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
createCount(exports.countUser);
