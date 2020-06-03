"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const user_1 = require("./user");
class Customer extends user_1.User {
    constructor(id, email, name, password, creditCard) {
        super(id, email, name, password);
        this.purchaseTotal = 0;
        this.creditCard = creditCard;
    }
    getCreditCard() {
        return this.creditCard;
    }
    interoduceYourself() {
        return `Olá, sou ${this.getName()}. Bom dia!`;
    }
}
exports.Customer = Customer;
