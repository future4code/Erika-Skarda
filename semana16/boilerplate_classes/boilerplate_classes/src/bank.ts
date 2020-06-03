import {JSONFileManager} from './JSONFileManager';
import {UserAccount} from "./index";

export class Bank {
    
  private accounts: UserAccount[];
  private fileManager: JSONFileManager = new JSONFileManager('allAccounts.json')
  
  constructor() {

    // this.fileManager = fileManager
  }

   public createAccount(account:UserAccount): void {
      
     this.accounts = this.fileManager.getObjectFromFile() as UserAccount[];
     if(account.getAge() >= 18) {

       this.accounts.push(account)

       this.fileManager.writeObjectToFile(this.accounts)
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




