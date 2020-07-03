import knex from "knex";
import dotenv from "dotenv";

dotenv.config()

export abstract class BaseDatabase {
  
  private connectionData = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE 
  };

  protected connection = knex({
    client: "mysql",
    connection: this.connectionData
  });

  public async destroyConnection(): Promise<void> {
    if (this.connectionData) {
      await this.connection.destroy();
    }
  }
}
