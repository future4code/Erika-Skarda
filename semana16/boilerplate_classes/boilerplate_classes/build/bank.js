"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const JSONFileManager_1 = require("./JSONFileManager");
const index_1 = require("./index");
const name = process.argv[4];
const cpf = process.argv[3];
const balance = Number(process.argv[2]);
const age = Number(process.argv[5]);
class Bank {
    constructor() {
        this.accounts = [];
    }
    createAccount(account) {
        if (newAccount.getAge() >= 18) {
            this.accounts.push(newAccount);
            const fileManager = new JSONFileManager_1.JSONFileManager('allAccounts.json');
            fileManager.writeObjectToFile(this.accounts);
            console.log("Conta criada");
        }
        else {
            console.log("Você é novo");
        }
    }
}
exports.Bank = Bank;
const newAccount = new index_1.UserAccount(balance, cpf, name, age);
const newBank = new Bank();
console.log(newBank.createAccount(newAccount));
//# sourceMappingURL=bank.js.map