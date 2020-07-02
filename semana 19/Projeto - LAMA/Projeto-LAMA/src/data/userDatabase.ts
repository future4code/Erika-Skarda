import { BaseDatabase } from "./baseDatabase";
import { BandGateway } from "../business/gateways/band";
import { Band } from "../business/entities/band";
import { User } from "../business/entities/user";
import { UserGateway } from "../business/gateways/user";

export class UserDatabase extends BaseDatabase implements UserGateway {
  
  private userTableName: string = "INTEGRANTE";

  public fromDB(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.password,
        dbModel.email,
        dbModel.role
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
      INSERT INTO ${this.userTableName} (id, name, music_genre, responsible)
      VALUES(
        '${user.getId()}',
        '${user.getName()}',
        '${user.getEmail()}',
        '${user.getPassword()}',
        '${user.getRole()}'
      )
    `);
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.userTableName}
      WHERE id = '${id}'
    `);

    return this.fromDB(result[0][0]);
  }

  public async getUserByName(name: string): Promise<User | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.userTableName}
      WHERE name LIKE '%${name}%'
    `);

    return this.fromDB(result[0][0]);
  }
}
