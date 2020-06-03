import {Transaction} from './transaction';
import {JSONFileManager} from './JSONFileManager';
import { Bank } from './bank';
//1- O contructor nos permite ter acesso aos atributos das classes,
//  quando criamos a nova instância

//2- 

//3- getters e setters

//4 - Um console.log
export class UserAccount {

    private balance: number;
    private cpf: string;
    private name: string;
    private age: number;
    private transactions: Transaction[];
  
    constructor(

       balance: number = 0,
       cpf: string,
       name: string,
       age: number,
       transactions: Transaction[] = []) {
  
        
      this.balance = balance;
      this.cpf = cpf;
      this.name = name;
      this.age = age;
      this.transactions = transactions

    }
      public getCpf(): string {
        return this.cpf
      }
      public getAge(): number {
        return this.age
      }
       public getBalance(): number {
           return this.balance
      
       }
       public addBalance(value: number): void {
         this.balance += value
         console.log('Saldo atualizado com sucesso')

       }
}
const name: string = process.argv[4]
const cpf: string = process.argv[3]
const balance: number = Number(process.argv[2])
const age: number = Number(process.argv[5])

const newAccount = new UserAccount(balance, cpf, name, age)
console.log("\x1b[36m%s\x1b[35m","O seu saldo é: " , newAccount.getBalance())

newAccount.addBalance(10)

console.log(newAccount)

const newBank: Bank = new Bank()
console.log(newBank.createAccount(newAccount))