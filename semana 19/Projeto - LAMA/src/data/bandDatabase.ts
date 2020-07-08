import { BaseDatabase } from "./baseDatabase";
import { Band } from "../model/band"

export class BandDatabase extends BaseDatabase {

  private bandTable: string = "BANDAS";

  public Band(BandDB?: any): Band | undefined {
    return (
      BandDB && new Band (
        BandDB.id,
        BandDB.name,
        BandDB.music_genre,
        BandDB.responsible_id
      )
    );
  }

  public async createBand(newBand: Band): Promise<void> {
    await this.connection.raw(
      `
        INSERT 
        INTO ${this.bandTable} (id, name, music_genre, responsible_id)
        VALUES (
            "${newBand.getId()}",
            "${newBand.getName()}",
            "${newBand.getMusic_genre()}",
            "${newBand.getResponsible()}"

        )`
    );
  }

  public async getBandByName(bandName:string) : Promise<Band |undefined> {
    const bandData = await this.connection.raw (`

      SELECT *
      FROM ${this.bandTable} as b
      
      WHERE name LIKE "%${bandName}%"
      
      
    `
    )
    return this.Band(bandData[0][0])
  }

}





/*

  public async getBandById(id: string): Promise<Band | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.bandTableName}
      WHERE id = '${id}'
    `);

    return this.fromDB(result[0][0]);
  }

  public async getBandByName(name: string): Promise<Band | undefined> {
    const result = await this.connection.raw(`
      SELECT * FROM ${this.bandTableName}
      WHERE name LIKE '%${name}%'
    `);

    return this.fromDB(result[0][0]);
  }
} */
