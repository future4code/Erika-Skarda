import { BandDatabase } from "../data/bandDatabase";
import { Authenticator } from "../services/authenticator";
import { IdGenerator } from "../services/idGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { Band } from "../model/band";
import { UserDatabase } from "../data/userDatabase";
import { BaseDatabase } from "../data/baseDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { GenericError } from "../errors/GenericError";


export class BandBusiness {

    constructor (
     private bandDatabase: BandDatabase,
     private token: Authenticator,
     private idGenerator: IdGenerator,
     private userDatabase:UserDatabase, 
 
    
    )
    {}

    public async createBand(
        //id: string,
        name: string,
        music_genre: string,
        responsible_id: string,

    ) {
         if(!name || !music_genre || !responsible_id) {

            throw new InvalidParameterError("Missing input");
         }

        const idResponsible = await this.userDatabase.getUserById(responsible_id)

        if(!idResponsible) {

            throw new GenericError("");
            
        }
        const idBand = this.idGenerator.generate()

        await this.bandDatabase.createBand(
            new Band(
                idBand,
                name,
                music_genre,
                responsible_id 
                )
        )    

    }

    public async getBandByName(name:string) {

        const bandData = await this.bandDatabase.getBandByName(name)

        if (!bandData) {
            throw new NotFoundError("Band not found");
          }


        return {
            //id: band.getId(),
            name:bandData.getName(),
            music_genre:bandData.getMusic_genre()
            
           
        }

    }

    

}