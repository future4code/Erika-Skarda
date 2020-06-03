import {Transaction} from './transaction';
import {JSONFileManager} from './JSONFileManager';
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

const account: UserAccount = new UserAccount(0 , "12312312312", "Erika", 20, [])
console.log("\x1b[36m%s\x1b[35m","O seu saldo é: " , account.getBalance())

account.addBalance(10)

console.log(account)