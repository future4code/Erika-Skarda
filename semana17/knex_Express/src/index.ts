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
    port: Number(process.env.DB_PORT || "3306"),
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

  console.log(createActor("005","Erika", 1000000, new Date("2000,10,10"),"famele","pistache","'NotDirector'"))
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});