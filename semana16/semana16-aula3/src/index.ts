import { Client } from "./client";
import { Place } from './place';
import { Commerce } from "./commerce";
import { Residence } from "./residence";
import { Industry } from "./industry";
import { ClientManager } from './ClientManager';
import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./commercialClient";
import { IndustrialClient } from "./IndustrialClient";

//1 - a) É possível acessar todos os dados.No entanto se for imprimir o
// objeto o método não vem e se quiser acessar o método.

const client: Client = {
    name: "Gabi",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
}

console.log(client)
console.log(client.calculateBill())

//2)
// const newPlace: Place = new Place ("04280000")
// console.log(newPlace)

//a) "Cannot create an instance of an abstract class."
//b) Só tirar o abstract.

//3) a) tirar o abstract
//b) Porque independente o tipo de cliente todos clientes teráo cep acessados
//c) Porque CEP é diferente pra cada um, multignérica


const newCommerce: Commerce = new Commerce(4, "04280-000")
console.log(`O CEP do prédio é: ${newCommerce.getCep()}`)

const newResidence: Residence = new Residence(4, "04280-000")
console.log(`O CEP da residência é: ${newResidence.getCep()}`)

const newIndustry: Industry = new Industry(4, "04280-000")
console.log(`O CEP do prédio é: ${newIndustry.getCep()}`)

//4) name, registrationNumber, consumedEnergy, cpf, residentsQuantity e cep
// getCpf() e calculateBill()

//5) a) name, registrationNumber, consumedEnergy, residentsQuantity, cep.
//b) ela possui propriedade cpf e a cnpj do comercialClient

//6) a) Filha da classe Industry porque precisa de quantidade de máquinas e cep
// b) Client porque precisa do 

// 8
const clientManager = new ClientManager()

const residentialClient = new ResidentialClient("Erika", 2, 100, "123.456.789.10", 2, "04280-000")
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient("Ivana", 3, 100, "0001234234-000", 3, "042800-001") 
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient("Joao", 2, 100, "123.123.123.12", 4, "234234-000") 
clientManager.registerClient(industrialClient)

console.log(clientManager.printClients())