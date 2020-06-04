import { Industry } from "./industry";
import { Client } from "./client";

export class IndustrialClient extends Industry implements Client {
    static INDUSTRY_TARIFF = 0.45 
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, 
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * IndustrialClient.INDUSTRY_TARIFF + this.machinesQuantity * 100;
    }
  }