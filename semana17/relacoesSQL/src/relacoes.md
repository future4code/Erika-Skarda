### Exercício 1
``` a) Chave estrangeira é um valor único de refêrencia para outra tabela ```

``` c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hamilton_erika_skarda`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))```

```e) Não é possível por conta da tabela ```

### Exercício 2

```a) a tabela MovieCast faz referência a 2 tabelas a de filmes e a de atores e `as suas respectivas primary key que pra chama FOREIGN KEY a chave estrangeira```

``` 
b) INSERT INTO MovieCast (movie_id, actor_id)
VALUES   
        (
        "002",
        "003"
        ),
        (
        "002",
        "005"
        ),
        (
        "003",
        "002"
        ),
        (
        "003",
        "005"
        ),
        (
        "004",
        "005"
        ) ; 
        
```
``` c) INSERT INTO MovieCast (movie_id, actor_id)
VALUES   
        (
        "003",
        "010"
        ) 
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hamilton_erika_skarda`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

        ``` 
``` d) DELETE FROM MovieCast WHERE movie_id = "002" AND actor_id = "005"; ```

### Exercício 3

```
a) ON precede a condicional da união entre as tabelas.

```
```
b) SELECT m.id AS ID_MOVIE, r.rate AS RATE_MOVIE
FROM Movie AS m
INNER JOIN Rating AS r
ON m.id = r.movie_id;

```

### Exercício 4

```
a) SELECT m.title AS TITLE, m.id AS ID_MOVIE, r.rate AS RATING, r.comment AS "COMMENT"
FROM Movie AS m
LEFT JOIN Rating AS r
ON m.id = r.movie_id;

``` 
```
b) SELECT m.id AS MOVIE_ID, m.title AS "TITLE", c.actor_id 
FROM Movie AS m
RIGHT JOIN MovieCast AS c
ON c.movie_id=  m.id;

```
```
c) SELECT M.title AS TITLE,  AVG(R.rate) AS AVERAGE, M.id AS MOVIE_ID
FROM Movie AS M
INNER JOIN Rating AS R
ON M.id = R.movie_id
GROUP BY(M.id); 

```
### Exercício 5
``` a) Para que possa "olhar" para comparação das duas tabelas, moviecast com actor e moviecast com movie
```
``
