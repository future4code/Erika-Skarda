import { Commerce } from "./commerce";
import { Client } from "./client";

export class CommercialClient extends Commerce implements Client {

  static COMMERCIAL_TARIFF = 0.53

    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * CommercialClient.COMMERCIAL_TARIFF;
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }
  }