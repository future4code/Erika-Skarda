"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
const bank_1 = require("./bank");
class UserAccount {
    constructor(balance = 0, cpf, name, age, transactions = []) {
        this.balance = balance;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.transactions = transactions;
    }
    getCpf() {
        return this.cpf;
    }
    getAge() {
        return this.age;
    }
    getBalance() {
        return this.balance;
    }
    addBalance(value) {
        this.balance += value;
        console.log('Saldo atualizado com sucesso');
    }
}
exports.UserAccount = UserAccount;
const name = process.argv[4];
const cpf = process.argv[3];
const balance = Number(process.argv[2]);
const age = Number(process.argv[5]);
const newAccount = new UserAccount(balance, cpf, name, age);
console.log("\x1b[36m%s\x1b[35m", "O seu saldo é: ", newAccount.getBalance());
newAccount.addBalance(10);
console.log(newAccount);
const newBank = new bank_1.Bank();
console.log(newBank.createAccount(newAccount));
//# sourceMappingURL=index.js.map