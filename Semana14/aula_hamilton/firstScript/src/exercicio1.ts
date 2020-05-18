export type carro = {
  marca: string,
  capacidadeCombustivel: number,
  ehFlex: boolean
}

export const fusca: carro = {
  marca: 'Volkswagen',
  capacidadeCombustivel: 50,
  ehFlex: false
};

export const unoRebaixado: carro = {
  marca: 'Fiat',
  capacidadeCombustivel: 47,
  ehFlex: true
};

export const monzaTurbinado: carro = {
  marca: 'Chevrolet',
  capacidadeCombustivel: 70,
  ehFlex: false
};

export const estacionamento: carro[] = [fusca, unoRebaixado, monzaTurbinado];
// console.log(estacionamento);