"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const costumer_1 = require("./costumer");
const employee_1 = require("./employee");
const seller_1 = require("./seller");
//1)
//a) Ou cria um método para getPassword ou console.log na nova instância.
//b) 1
const newUser = new user_1.User("42", "gabi@labenu.com", "🌺Gabi", "1234");
console.log(`\x1b[36m
   id: ${newUser.getId()}, 
   email: ${newUser.getEmail()} e 
   name: ${newUser.getName()} \n `);
//2)
//a) 1
//b) 2
const newCustomer = new costumer_1.Customer("22", "ivana@labenu.com", "🐶Ivana", "1234", "master");
console.log("\x1b[35m", newCustomer);
//3) 
console.log(`\x1b[32m
   Total de compra:  ${newCustomer.purchaseTotal},
   Bandeira do cartão:  ${newCustomer.getCreditCard()}`);
//4) 
console.log(newCustomer.interoduceYourself());
//5)
console.log(newCustomer.interoduceYourself());
//6) a) 3vezes
const newEmploy = new employee_1.Employee("24", "joao@labenu", "😎João", "joaoDaBIke", new Date("2020-05-28"), 600);
// b)
console.log(newEmploy);
//7)
console.log(newEmploy.calculateTotalSalary());
//8) a)
const newSeller = new seller_1.Seller("23", "Vivi@labenu", "Vivi", "labenu", new Date("20-05-2020"), 20000);
//b) tudo
//9)
let pegaValor = newSeller.getSalesQuantity();
let bananinha = newSeller.setSalesQuantity(300);
console.log("Quantidade de vendas é: ", newSeller.getSalesQuantity());
//10
console.log(newSeller.calculateTotalSalary());
