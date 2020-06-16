import knex from "knex";
import dotenv from "dotenv";
import express from "express";
import { Request, Response } from "express";
import { AddressInfo } from "net";
import { v4 } from "uuid";
import {IdGenerator} from "./service/IdGenerator"
import { Authenticator } from "./service/Authenticator";

dotenv.config();

//******************************************************************************//
/*
const idGenerator = new IdGenerator();
const id = idGenerator.generate()
console.log("id gereado: " , id)

const authenticator = new Authenticator()
const token = authenticator.generateToken(id)

console.log("token: ", token)

const data = authenticator.verify(token)
console.log(data)
*/
//******************************************************************************//
/*
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

*/
//******************************************************************************//

const app = express();

app.use(express.json());

app.post("/signup", async(req:Request, res:Response) => {

  try {

    const userData = {
      email: req.body.email,
      password: req.body.password
    }
    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()
    res.status(200).send({token:""})

  } catch(err) {
    res.status(400).send({message:err.message})
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;