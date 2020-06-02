"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
class UserAccount {
    constructor(balance = 0, cpf, name, age, transactions = []) {
        console.log("Chamando o construtor da classe UserAccount");
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
const account = new UserAccount(0, "12312312312", "Erika", 20, []);
console.log("\x1b[36m%s\x1b[35m", "O seu saldo é: ", account.getBalance());
account.addBalance(10);
console.log(account);
//# sourceMappingURL=index.js.map