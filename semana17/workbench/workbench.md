### **Exercício 1 **
### a) ``` VARCHAR`(n)``` usado para determinar strings de no máximo n caracteres.
### ```Date``` representa uma data (YYYY-MM-DD)
### O comando PRIMARY KEY representa a chave única que cada item deve ter para ser identificado e NOT NULL não pode ficar sem nada.

### b) SHOW DATABASES apresenta o banco de dados e SHOW TABLES apresenta tabelas,
O show database  faz uma consulta a todos os databases (ou schemas) que você tem acesso. E information_schema, que é um banco de metadados já gerado na criação do banco de dados. O show table  mostra as tabelas que você tem acesso.

### DESCRIBE retorna toda estrutura da tabela mencionada. SHOW O certo é da error mesmo, para mostrar que a gente tem que utilizar o DESCRIBE quando queremos ver as propiedades das colunas de uma tabela.

### Exercício 2
b)Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'. Erro por duplicação da primary key.
c)Error Code: 1136. Column count doesn't match value count at row 1. Tem um argumneto a menos (gender).
d)Error Code: 1364. Field 'name' doesn't have a default value. Name é um campo que não pode ficar em branco (NOT NULL).
e)Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1. Formato errado no campo birth_date 
DATE - representa uma data (YYYY-MM-DD), deveria estar entre aspas.


### Exercício 3
c) 0 row(s) returned. 0 linhas retorado.
e)Error Code: 1054. Unknown column 'nome' in 'field list'.

### Exercício 4

a)Método SELECT usando LIKE que diz que nomes que usa % para palavras que começam com
letra a ou j.

 
