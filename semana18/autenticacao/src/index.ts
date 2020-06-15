import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import { AddressInfo } from "net";
import { v4 } from "uuid";
import {IdGenerator} from "./service/IdGenerator"

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
})

//******************************************************************************//

const idGenerator = new IdGenerator();
const id = idGenerator.generate()
console.log(id)

//******************************************************************************//


const createUser = async(): Promise<void> => {

 

    await connection.raw (
     `
       CREATE TABLE userTableName (
        id VARCHAR(255) PRIMARY KEY,
        nickname VARCHAR(255) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL
       )
     `
    )}
 
    createUser()
    



//******************************************************************************//
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;