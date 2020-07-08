import { BandBusiness } from "../business/bandBusiness";
import { UserBusiness } from "../business/userBusiness";
import { BandDatabase } from "../data/bandDatabase";
import { IdGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/authenticator";
import express, { Request, Response } from "express";
import { stringToUserRole } from "../model/user";
import { Unauthorized } from "../errors/Unauthorized";
import { UserController } from "./userController";
import { UserDatabase } from "../data/userDatabase";
import { BaseDatabase } from "../data/baseDatabase";

export class BandController extends BaseDatabase{

    private static BandBusiness = new BandBusiness (

        new BandDatabase(),
        new Authenticator(),
        new IdGenerator(),
        new UserDatabase()
      
    )

    async createBand(req:Request, res:Response) {
        try {
            
            const token = req.headers.authorization as string
            
            const auth = new Authenticator().getData(token)

            const role = stringToUserRole(auth.role) 

            if(role !== "admin") {

                throw new Unauthorized("Unauthorized")

            }
            
            const userData = {
                idResponsible: req.body.id_responsible,
             
            }

            //if(userData.idResponsible )

            await BandController.BandBusiness.createBand(

            req.body.name,
            req.body.music_genre,
            userData.idResponsible

            )

             res.status(200).send({message: "Band registered "});


        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message });

        }
        await this.destroyConnection()
  
    } 

    async getBandByName(req:Request, res:Response) {

        try {

            const band = await BandController.BandBusiness.getBandByName(
                req.body.name
            )

            res.status(200).send(band)
            
        } catch (err) {
            res.status(err.errorCode || 400).send({ message: err.message });
    }

    //await this.destroyConnection()
  }
}