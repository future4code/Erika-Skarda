## Exercício 1

### a. O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?

``` Round é o fator numérico do hash, está asscoiado à segurança da senha, quanto maior esse valor maior o tempo de execução. Usei 12 por ser padrão na maioria das libs. Salt é o unput adicionado no processo de hashing composto por algorithm, cost, string aleatória e encoded input```

## Exercício 2

### a. Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique

``` Sign up por ser a parte do cadatro (criação de usuário com a sua senha no banco de dados), temos que fazer a criptografia dessa senha por isso o comecei pelo sign up. ```

### d) No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique. 
```Não, não precisamos modificar este endpoint, pois ele não denpende da senha contida em userData.password ```
