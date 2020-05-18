import {carro, estacionamento} from "./exercicio1";

function cars(arrayDeCarros: carro[], marca?: string) : carro[] {
  if(marca) {
    return  arrayDeCarros.filter((carro) => {
      return carro.marca === marca
    })
  } else {
    return arrayDeCarros
  }
}

// const resultado: carro[] = cars(estacionamento);
const resultado: carro[] = cars(estacionamento, 'Volkswagen');

console.log(resultado);