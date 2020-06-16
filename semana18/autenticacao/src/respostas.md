## Exercício 1

### a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
#### Para reduzir chances de repetição na criação de token.

## Exercício 2

### a) Acrescenta os 3 argumentos - nome, email e senha dentro da tabela userTableName

### b)  
      ```CREATE TABLE userTableName (
        id VARCHAR(255) PRIMARY KEY,
        nickname VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
       ) ```