"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seller = void 0;
const employee_1 = require("./employee");
class Seller extends employee_1.Employee {
    constructor() {
        super(...arguments);
        this.salesQuantity = 0;
    }
    getSalesQuantity() {
        return this.salesQuantity;
    }
    setSalesQuantity(quantity) {
        this.salesQuantity = quantity;
    }
    calculateTotalSalary() {
        super.calculateTotalSalary();
        // (salário base) + (benefícios) + (5)*(quantidade de vendas)
        return 5 * this.salesQuantity + this.baseSalary + 400;
    }
}
exports.Seller = Seller;
