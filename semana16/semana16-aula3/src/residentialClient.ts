import { Residence } from "./residence";
import { Client } from "./client";

export class ResidentialClient extends Residence implements Client {

  static RESIDENTIAL_TARIFF = 0.75

    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cpf: string,
      residentsQuantity: number,
      cep: string
    ) {
      super(residentsQuantity, cep);
    }
  
    public getCpf(): string {
      return this.cpf;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * ResidentialClient.RESIDENTIAL_TARIFF;
    }
  }