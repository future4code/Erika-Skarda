### Exercício 1

``` a) ALTER TABLE Actors DROP COLUMN salary ---> Remove a coluna dos salários ```

``` b) ALTER TABLE Actors CHANGE gender sex VARCHAR(6) ---> Muda nome da coluna de gender para sex e para VARCHAR(6) ```

``` c) ALTER TABLE Actors CHANGE gender gender VARCHAR(255) ---> Muda a coluna gender para VARCHAR(255) ```

### Exercício 2
```
b) UPDATE Actor
SET 
	name = "Juliana Paes"
WHERE id="003";
```
```
 c) UPDATE Actor
SET 
	name = "Juliana Paes"
WHERE id="003"; 
```
```d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 ``

### Exercício 3

``` a) DELETE FROM Actor WHERE name = "Tony Ramos"; ``
``` b) DELETE FROM Actor 
	WHERE gender = "male" AND
    salary > 1000000 ```
```
### Exercício 4

``` a) SELECT max(salary) from Actor;```
``` b) SELECT min(salary) from Actor WHERE gender="female";```
``` c) SELECT COUNT(*) FROM Actor WHERE gender= "female"; ```
``` d) SELECT SUM(salary) FROM Actor WHERE gender = 'female';```

### Exercício 5

``` a) SELECT COUNT(*), gender FROM Actor GROUP BY gender ---> Contar os gêneros agrupados   em gêneros```

``` b) SELECT id, name FROM Actor ORDER BY name DESC;```

````c) SELECT * FROM Actor ORDER BY salary; ```    

``` d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3; ```

### Exercício 6

``` a) ALTER TABLE Movie ADD playing_limit_date DATE; ```

``` b) ALTER TABLE Movie CHANGE review review FLOAT; ```

``` c) UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001";
```
``` d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 ---> Não existe mais```

### Exercício 7

``` a) SELECT COUNT(*) FROM Movie WHERE review > 7.5; ```

``` b) SELECT AVG(review) FROM Movie; ```

``` c) SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE(); ```

``` d) SELECT COUNT(*) FROM Movie WHERE date < CURDATE();```

``` e) SELECT MAX(review) FROM Movie;```

``` f) SELECT MIN(review) FROM Movie; ```

### Exercício 8

``` a) SELECT * FROM Movie ORDER BY title; ```

``` b) SELECT * FROM Movie ORDER BY title DESC LIMIT 5;``

``` c) SELECT * FROM Movie WHERE date < CURDATE() ORDER BY date DESC LIMIT 3; ```

``` d) SELECT * FROM Movie ORDER BY review DESC LIMIT 3; ```


  
