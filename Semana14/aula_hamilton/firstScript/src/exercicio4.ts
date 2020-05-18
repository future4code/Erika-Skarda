
enum Marcas {
  VOLKSWAGEN = 'Volkswagen',
  FIAT = 'Fiat'
}

export type carro = {
  marca: Marcas,
  capacidadeCombustivel: number,
  ehFlex: boolean
}

export const fusca: carro = {
  marca: Marcas.VOLKSWAGEN,
  capacidadeCombustivel: 50,
  ehFlex: false
};

export const unoRebaixado: carro = {
  marca: Marcas.FIAT,
  capacidadeCombustivel: 47,
  ehFlex: true
};