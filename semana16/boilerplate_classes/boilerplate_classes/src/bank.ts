import {JSONFileManager} from './JSONFileManager';
import {UserAccount} from "./index";

export class Bank {
    
  private accounts: UserAccount[];
  private fileManager: JSONFileManager;

  constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
    this.accounts = accounts;
    this.fileManager = fileManager
  }

   public createAccount(): void {
    
   }

//   public getAllAccounts(): UserAccount[] {
//     //lógica de pegar todas as contas aqui
//   }

//   public getAccountByCpf(): UserAccount {
//     // lógica de pegar conta por cpf aqui
//   }
}
