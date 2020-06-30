import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { Request, Response } from "express";

dotenv.config();

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) | 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
});

const getActorById = async (id: string): Promise<any> => {

    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return console.log(result[0][0])
  }

//getActorById("002")

const getActorByName = async (name: string): Promise<any> => {

    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
      return console.log(result[0][0])
  }

//getActorByName("Juliana Paes")

const countActorByGender = async(gender: string): Promise<any> => {
    try {

        const result = await connection.raw(
            `
            SELECT COUNT(*) as CountGender FROM Actor WHERE gender = "${gender}"

            `
        );
        const count = result[0][0].CountGender;
        return console.log("\x1b[32m","A tabale a Actor possui", count, `${gender}`)

    } catch(error) {

        console.error("\x1b[31m","Deu Erro!")

    }
}

//countActorByGender("female");

const createActor = async (
    id:string,
    name: string,
    salary: number,
    birth_date: Date,
    gender: string,
    favorite_ice_cream_flavour: string,
    type: string
  ): Promise<void> => {
    await connection
      .insert({
        id:id,
        name: name,
        salary: salary,
        birth_date: birth_date,
        gender: gender,
        favorite_ice_cream_flavour: favorite_ice_cream_flavour,
        type:type
      })
      .into("Actor");
  };
 
///console.log(createActor("005","Erika", 1000000, new Date("2000,10,10"),"famele","pistache","'NotDirector'"))

const updateActor = async (id: string, salary: number): Promise<any> => {
    try {

    await connection("Actor")
      .update({
        salary: salary,
      })
      .where({id:id});

  } catch (error) {

    console.error("\x1b[31m","Deu Erro!")

  }
}
const updateSalary = async (salary: number, id: string): Promise<any> => {
    try {
      const results = await connection
        .update({ salary })
        .from("Actor")
        .where({ id });
      return results;
    } catch (err) {
      console.error(err.message);
    }
  };
//console.log(updateActor("004",23))

const deleteActor = async (id:string):Promise<void> => {
    try {
        await connection("Actor")
         .del()
         .where({id})
    } catch (err) {
        console.error(err)
    }
}

//deleteActor("004")

const avgSalaryGender = async(gender:string): Promise<any> => {
    try {
        const result = await connection
         .avg("salary as average")
         .where ({gender})
         .from("Actor")
        
        return console.log("\x1b[36m", `A média dos salário dos atores do sexo ${gender} é`,  
        result[0].average)

    } catch(err) {

        console.error("\x1b[31m","Deu Erro!")
    }
}

//avgSalaryGender("female")
try {
  const createProductsTable = async (): Promise<void> => {
      await connection.raw(
          `
      CREATE TABLE Product
      (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      price FLOAT NOT NULL
  )`)
  
  }
  //createProductsTable()
} catch (error) {
  console.error(error.message);
}
  
try{
  const createProducts = async(id:string, name: string, price:number): Promise<any> => {
    await connection.raw (
      `
      INSERT INTO Product
        VALUES(
         "${id}",
         "${name}",
         ${price}

        )`   
    )

  }
  //createProducts("abc","caneta",10)
} catch(error) {
  console.error("\x1b[31m","Deu Erro!")

}

const createProduct = async (id: string, name: string, price: number): Promise<void> => {
  try {
      await connection.raw(
          `
              INSERT INTO Product
              VALUES ("${id}", "${name}", ${price})
              `)
              
  } catch (err) {
      throw new Error(err.message);
  }
}

const createProductEndpoint = async (req: Request, res: Response) => {
  try {
      const product = {
          id: req.body.id,
          name: req.body.name,
          price: req.body.price
      }

      await createProduct(product.id, product.name, product.price);

      res.status(200).send({ message: "Produto criado com sucesso" });

  } catch (err) {
      res.status(400).send({ error: err.message });
  }

}

const app = express()
app.use(express.json());

app.post("/product", createProductEndpoint);

const server = app.listen(process.env.PORT || 3000, () => {
  
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});