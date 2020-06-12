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

//************************Tabela de usuário************************************//
try {

    const createTableUser = async(): Promise<void> => {

       await connection.raw(
            `
                CREATE TABLE User (
                    id VARCHAR(255) PRIMARY KEY,
                    name VARCHAR(255) NULL,
                    nickname VARCHAR(255) UNIQUE NOT NULL,
                    email VARCHAR(255) UNIQUE NOT NULL
                )
            `
        )
    }
    //createTableUser()
    
} catch (err) {

    throw new Error(err.message);
}
try {
    const createTableTask = async(): Promise<void> => {

      await connection.raw(
        `
          CREATE TABLE TodoListTask (

		    id VARCHAR(255) PRIMARY KEY, 
            title VARCHAR(255) NOT NULL, 
            description TEXT NOT NULL, 
            status VARCHAR(255) NOT NULL DEFAULT "to_do",
            limit_date DATE NOT NULL,
            creator_user_id varchar(255) NOT NULL,
            FOREIGN KEY (creator_user_id) REFERENCES User(id)
         )
        `
     );
    }
    createTableTask()

} catch (err) {

    throw new Error(err.message);
}
const createUser = async(id:string, name:string, nickname:string,email:string): Promise<void> => {

    try {
        const user = await connection.insert({

            id,
            name:name,
            nickname,
            email

        }).into("User")

        console.log(`O produto ${user} foi inserido com sucesso!`)
    } catch(error) {

        console.error("\x1b[31m",error.message);
    }
}

//createUser("gab","Gabi","gab_socão","gabi@labenu.com" )
const createUserRaw = async(id:string, name:string, nickname:string,email:string):Promise<void> => {
    
    try {
      const newUser = await connection.raw(
        `
        INSERT INTO User 
        VALUES("${id}","${name}","${nickname}","${email}")
        `
      )
    } catch(err) {

        throw new Error(err.message);
    }
}
const getUserById = async (id: string): Promise<any> => {

    try {

        const user = await connection
         .select("*")
         .from("User")
         .where({id:id})

         return user

    } catch(err) {
        
        console.error("\x1b[31m","Erro ao encontrar usuário")
    }
}
//console.log(getUserById("gab"))

const editInfoUser = async(id:string, name:string, nickname:string):Promise<any> => {
    try {

        const result = await connection.raw (
            `
            UPDATE User
            SET name = "${name}", nickname = "${nickname}"
            WHERE id = "${id}"
            `
        )
        return (result[0][0])

    } catch(err) {

        console.log("\x1b[31m","Erro ao encontrar usuário")
    }
}

//console.log(editInfoUser("gab","Gabi","Gabi_garrafinha"))
//******************************************************************* *//

const app = express()
app.use(express.json())

const createEndPointUser = async(req:Request, res:Response):Promise<any>=> {
    try {
        const user = {

            id: Date.now().toString(),
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email

        }
        await createUser(user.id, user.name, user.nickname, user.email)

        res.status(200).send({message: "Usuário inserido com sucesso"})

    } catch(err) {

        res.status(400).send({err:err.message})
    }

}
app.post("/user",createEndPointUser)

const getUserByIdEndPoint = async(req:Request, res:Response):Promise<any> => {

    try {
        const id = req.params.id
        const result = await getUserById(id);

        res.status(200).send(result);

    }catch(err){

        res.status(400).send({error: err.message});
    }

}
app.get("/user/:id", getUserByIdEndPoint)

const putUserEndPoint = async(req:Request, res:Response): Promise<any> => {

    try {
        const id = req.params.id
        const name = req.body.name
        const nickname = req.body.nickname

        //await editInfoUser(req.params.id,req.body.name,req.body.nickname)
        await editInfoUser(id, name, nickname)
        res.status(200).send({message:`As informações foram atualizadas ${name} e ${nickname}` });

    } catch(err) {

        res.status(400).send({error: err.message});

    }
}

app.put("/user/edit/:id", putUserEndPoint)


const server = app.listen(process.env.PORT || 3000, () => {
  
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  }); 
