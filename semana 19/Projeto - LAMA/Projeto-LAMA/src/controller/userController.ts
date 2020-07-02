import express, { Request, Response } from "express";
import { IdGenerator } from "../services/idGenerator";
import { HashManager } from "../services/hashManager";
import { UserGateway } from "../business/gateways/user"
import { Authenticator } from "../services/authenticator";


const idGenerator = new IdGenerator()
const hashPassword = new HashManager()
const userBusiness = new UserGateway()
const token = new Authenticator()

export class UserController {
    async signUp()

    

    

}