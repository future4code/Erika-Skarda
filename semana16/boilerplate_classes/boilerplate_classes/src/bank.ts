import {JSONFileManager} from './JSONFileManager';
import {UserAccount} from "./index";

const name: string = process.argv[4]
const cpf: string = process.argv[3]
const balance: number = Number(process.argv[2])
const age: number = Number(process.argv[5])

export class Bank {
    
  private accounts: UserAccount[];
  private fileManager: JSONFileManager;

  constructor() {
    this.accounts = [];
    // this.fileManager = fileManager
  }

   public createAccount(account:UserAccount): void {
      
     if(newAccount.getAge() >= 18) {

       this.accounts.push(newAccount)

       const fileManager = new JSONFileManager('allAccounts.json');

       fileManager.writeObjectToFile(this.accounts)
       console.log("Conta criada")


     } else{
       console.log("Você é novo")
     }
    
   }

//   public getAllAccounts(): UserAccount[] {
//     //lógica de pegar todas as contas aqui
//   }/

//   public getAccountByCpf(): UserAccount {
//     // lógica de pegar conta por cpf aqui
//   }
}

const newAccount = new UserAccount(balance, cpf, name, age)

const newBank: Bank = new Bank()
console.log(newBank.createAccount(newAccount))