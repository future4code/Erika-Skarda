"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const user_1 = require("./user");
class Employee extends user_1.User {
    constructor(id, email, name, password, admissionDate, baseSalary) {
        super(id, email, name, password);
        this.admissionDate = admissionDate;
        this.baseSalary = baseSalary;
    }
    getAdmissionDate() {
        return this.admissionDate;
    }
    getBaseSalary() {
        return this.baseSalary;
    }
    calculateTotalSalary() {
        return this.baseSalary + 400;
    }
}
exports.Employee = Employee;
