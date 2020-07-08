import { BaseDatabase } from "./baseDatabase";
import { User } from "../model/user";


export class UserDatabase extends BaseDatabase  {
  
  private userTableName: string = "INTEGRANTE";

  public User(UserModel?: any): User | undefined {
    return (
      UserModel &&
      new User(
        UserModel.id,
        UserModel.name,
        UserModel.email,
        UserModel.password,
        UserModel.role
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.userTableName} (id, name, email, password, role)
      VALUES(
        '${user.getId()}',
        '${user.getName()}',
        '${user.getEmail()}',
        '${user.getPassword()}',
        '${user.getRole()}'
      )
    `);
  }
  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(
      `
      SELECT * FROM ${this.userTableName}
      WHERE email = "${email}"
      `
    )
    return this.User(result[0][0]);
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.userTableName}
      WHERE id = '${id}'
    `);

    return this.User(result[0][0]);
  }

 /* public async getUserByName(name: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.userTableName}
      WHERE name LIKE '%${name}%'
    `);

    return this.User(result[0][0]);
  }*/
}
