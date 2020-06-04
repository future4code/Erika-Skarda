import { Client } from './client';
import { ResidentialClient } from './ResidentialClient';
import { CommercialClient } from './commercialClient';

export class ClientManager {
    private clients: Client[] = [];
    // private residentialClients: ResidentialClient[] = []

    public registerClient(client: Client): void {

        // if(this.clients.find((client, index, array) => this.residentialClients )) {
        // } 
        this.clients.push(client)
    }
    public getClientsQuantity(): number {
      return this.clients.length;
    }
    public calculateBillOfClient(registrationNumber: number): number {
			
        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber
        })

        if(foundClient) {
                // verificando se o usuário existe
                return foundClient.calculateBill()
        }
        
        return 0;

    }
    public calculateTotalIncome(): number {
        let total: number = 0;
        this.clients.forEach((client) => {
          total += client.calculateBill();
        });
        return total;
    }
    
    public deleteUser(registrationNumber: number): void {
        let registrationIndex = undefined;
    
        for (let i = 0; i < this.clients.length; i++) {
          if (this.clients[i].registrationNumber === registrationNumber) {
            registrationIndex = i;
          }
        }
    
        if (registrationIndex !== undefined) {
          this.clients.splice(registrationIndex, 1);
        }
    }
    public printClients(): void {
        this.clients.forEach((client, index, array) => {
            return console.log(
                `
                - NOME DO CLIENTE: ${client.name.toUpperCase()}
                - NÚMERO DE REGISTRO: ${client.registrationNumber} 
                - TOTAL DE ENERGIA GASTA: ${client.consumedEnergy} 
                - TOTAL PAGO: ${client.calculateBill()}`)
        })
    }
}
  