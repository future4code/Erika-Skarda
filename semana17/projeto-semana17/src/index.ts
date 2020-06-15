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
    //createTableTask()

} catch (err) {

    throw new Error(err.message);
}
const createTableTaskENUM = async (): Promise<any> => {
    try {
      await connection.raw(`

      CREATE TABLE TodoList (
        id VARCHAR(255) PRIMARY KEY, 
        title VARCHAR(255) NOT NULL, 
        description TEXT NOT NULL, 
        status ENUM("to_do", "doing", "done") NOT NULL DEFAULT "to_do",
        limit_date DATE NOT NULL,
        creator_user_id varchar(255) NOT NULL,
        FOREIGN KEY (creator_user_id) REFERENCES User(id)
      );
      `
    );
   
    } catch (err) {

      console.error("\x1b[31m", err.message || err.mysqlMessage);
    }

  };
  const createTableTaskRelation = async (): Promise<any> => {

    

      await connection.raw(`
        CREATE TABLE TodoListRelation (
         task_id VARCHAR(255),
         responsible_user_id VARCHAR(255),
         FOREIGN KEY (task_id) REFERENCES TodoList(id),
         FOREIGN KEY (responsible_user_id) REFERENCES User(id)
        );
         `)

};
//createTableTaskRelation()
const createUser = async(id:string, name:string, nickname:string,email:string): Promise<void> => {

    try {
        const user = await connection.insert({

            id,
            name:name,
            nickname,
            email

        }).into("User")

        console.log(`O Usuário ${name} foi inserido com sucesso!`)
    } catch(error) {

        console.error("\x1b[31m",error.message);
    }
}
//createUser("Iv4","Ivana","chica","ivana@labenu.com" )
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
//createUserRaw("vi3", "Vivi", "vivinda", "vivi@labenu.com")
//createUserRaw("vi4", "Viviane", "vivi", "vivanei@labenu.com")
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
const getUserByIdQuery = async (id: string): Promise<any> => {

    try {

        const user = await connection.raw (
            `
             SELECT name, nickname FROM User
             WHERE id = "${id}"
            
            `
          )

          var retorno = []
          retorno.push(user)
          return user[0][0]

    } catch(err) {
        
        throw new Error(err.message);
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
const deleteUserById = async(id:string) : Promise<void> => {
    try {

      await connection.raw (
       `
        DELETE FROM User
        WHERE id = "${id}"
       `
      )
      console.log("Deletado")
    } catch(err) {

        console.log("\x1b[31m","Erro ao deletar usuário")
    }
} 
//deleteUserById("vi3")
 //***************************FUNÇÕES DE TAREFAS**************************************** *//
const createTask = async(id:string, title:string, description:string, limit_date:Date, creator_user_id:string ):Promise<any> => {
    try {

        await connection.raw (
         `
            INSERT INTO TodoList
            VALUES("${id}", "${title}","${description}",${limit_date},"${creator_user_id}")

         `
        )
        //console.log(createTask("123", "Limpar casa","Banheiro,cozinha e sala",new Date("2020-10-10"),"gab"))
    } catch(err) {

        throw new Error(err.message);
    }
}
const createTaskQuery = async (id:string, title:string, description:string, 
    limit_date:Date, creator_user_id:string): Promise<void> => {

    await connection
      .insert({
        id,
        title,
        description,
        limit_date,
        creator_user_id
       
      })
      .into("TodoList");
  };
  //console.log(createTaskQuery("123", "Limpar casa","Banheiro,cozinha e sala",new Date("2020-10-10"),"gab"))
const getTaskById = async(id:string): Promise<any> => {
    try {

      const task = await connection.raw (
        `
         SELECT * FROM TodoList
         WHERE id = "${id}" 
        
        `
      )
      return task[0][0]
    } catch(err) {
        
        console.error("\x1b[31m","Erro ao encontrar usuário")
    }
}
//console.log(getTaskById("gab"))

const getTaskByIdQuery = async(id:string) : Promise<any> => {
    try {

      const task = await connection
       .select("*")
       .from("TodoList")
       .where({id:id})

       return task

    } catch(err) {
        
        console.error("\x1b[31m","Erro ao encontrar usuário")
    }
}
const deleteTaskById = async(taskId:string) => {

    await connection
     .delete("*")
     .from("TodoList")
     .where({id:taskId})
}
//deleteTaskById("1592065410044")
  //***************************EXPRESS**************************************** *//

const app = express()
app.use(express.json())

//***************************ENDPOINTS USER**************************************** *//
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

    } catch(err) {

        res.status(400).send({error: err.message || err.mysqlmessage});
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

        res.status(400).send({error: err.message || err.mysqlMessage});

    }
}

app.put("/user/edit/:id", putUserEndPoint)

app.get("/", (req:Request, res:Response) => {
    connection
     .select("*")
     .from("User")
     .then(data => res.send(data))
     .catch(err => res.send(err.mysqlMessage || err.message ))
})
app.delete("/user", async(req:Request, res:Response) => {
    
    try {

      const id = req.body.id
      await connection.raw (`

        DELETE FROM User
        WHERE id = "${id}"

        `)
        res.status(200).send({message: "Produto apagado com sucesso"});
    } catch(err) {

        res.status(400).send({error: err.message || err.mysqlMessage});
    }
})
app.delete("/user/:id", async(req:Request, res:Response) => {

    try {

      const id = req.params.id
      await connection.raw (`
  
       DELETE FROM User
       WHERE id = "${id}"
  
       `)

          res.status(200).send({message:"Usuário apagado com sucesso"});
  
      } catch(err) {
  
          res.status(400).send({error: err.message || err.mysqlMessage});
      }
  })
  /*
  app.get("/user?query=id", async(req:Request,res:Response) : Promise<void> => {

    try {
        const users = {
            id: req.query.id
           
        }
        await getUserByIdQuery(users.id)
        res.status(200).send(users);
        
    } catch (err) {

        res.status(400).send({error: err.message});

    }
    
  }) */
//*************************END POINTS DAS TAREFAS****************************************** *//
const putTaskEndPoint = async(req:Request, res:Response) : Promise<any> => {

    try {

      const task = {
        id : (Date.now()).toString(),
      }
        const {title, description, limit_date, creator_user_id} = req.body
        
        await createTaskQuery(task.id, title, description, limit_date, creator_user_id)
        res.status(200).send({message: `Tarefa ${title} criada com sucesso!!!`})

    } catch(err) {

        res.status(400).send({error: err.message || err.mysqlMessage});
    }
}
app.put("/task", putTaskEndPoint)

const getTaskEndPoint = async(req:Request, res:Response) : Promise<any> => {

  try {

    const id = req.params.id
    const taskResult = await getTaskByIdQuery(id)

    res.status(200).send(taskResult)

  } catch (err) {

        res.status(400).send({err: err.message || err.mysqlMessage})
  }

}
app.get("/task/:id", getTaskEndPoint)

const deleteTaskEndPoint = async(req:Request, res: Response) => {

    try {

        const taskId = req.params.taskId

        await deleteTaskById(taskId)
        res.status(200).send({message: "Tarefa deletada"})

    } catch(error) {

        res.status(400).send({error: error.message || error.mysqlMessage});
    }
}
app.delete("/task/:id", deleteTaskById)

//******************************************************************* *//
const server = app.listen(process.env.PORT || 3000, () => {
  
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  }); 
