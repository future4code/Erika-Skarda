function exercicio_2(palavra: string) {

    const caracteres = palavra.split('')

  return  {

    QuantidadeDeCaracteres:  caracteres.length,
    Primeiro: caracteres[0],
    Ultimo: caracteres[palavra.split("").length - 1]
    }
}
console.log(exercicio_2('BANANANINHA'))