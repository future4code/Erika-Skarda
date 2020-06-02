import { User } from './user';
import { Customer } from './costumer';
import { Employee } from './employee';
import { Seller } from './seller';
//1)
    //a) Ou cria um método para getPassword ou console.log na nova instância.
    //b) 1
 const newUser : User = new User("42", "gabi@labenu.com", "🌺Gabi", "1234")
 console.log(`\x1b[36m
   id: ${newUser.getId()}, 
   email: ${newUser.getEmail()} e 
   name: ${newUser.getName()} \n `
   
   );
//2)
    //a) 1
    //b) 2
   const newCustomer : Customer = new Customer("22","ivana@labenu.com", "🐶Ivana", "1234", "master")
   console.log("\x1b[35m" , newCustomer)

//3) 
console.log(`\x1b[32m
   Total de compra:  ${newCustomer.purchaseTotal},
   Bandeira do cartão:  ${newCustomer.getCreditCard()}`)

//4) 
console.log(newCustomer.interoduceYourself())

//5)
console.log(newCustomer.interoduceYourself())

//6) a) 3vezes
const newEmploy : Employee = new Employee("24",
    "joao@labenu", 
    "😎João",
    "joaoDaBIke",
    new Date("2020-05-28"), 
    600)

// b)
console.log(newEmploy)

//7)
console.log(newEmploy.calculateTotalSalary())

//8) a)
const newSeller : Seller = new Seller("23", 
      "Vivi@labenu",
      "Vivi",
      "labenu",
      new Date("20-05-2020"),
      20000)
//b) tudo

//9)
let pegaValor: number = newSeller.getSalesQuantity()
let bananinha: any =  newSeller.setSalesQuantity(300)
console.log("Quantidade de vendas é: ", newSeller.getSalesQuantity())

//10)
console.log("O salário é: ", newSeller.calculateTotalSalary())

//11)
