"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const JSONFileManager_1 = require("./JSONFileManager");
class Bank {
    constructor() {
        this.fileManager = new JSONFileManager_1.JSONFileManager('allAccounts.json');
    }
    createAccount(account) {
        this.accounts = this.fileManager.getObjectFromFile();
        if (account.getAge() >= 18) {
            this.accounts.push(account);
            this.fileManager.writeObjectToFile(this.accounts);
            console.log("Conta criada");
        }
        else {
            console.log("Você é novo");
        }
    }
}
exports.Bank = Bank;
//# sourceMappingURL=bank.js.map