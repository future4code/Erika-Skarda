import express, { Request, Response } from "express";
import { IdGenerator } from "../services/idGenerator";
import { HashManager } from "../services/hashManager";
import { Authenticator } from "../services/authenticator";
import { UserBusiness } from "../business/userBusiness";
import { UserDatabase } from "../data/userDatabase";

export class UserController {

    private static UserBusiness = new UserBusiness (
        new UserDatabase(),
        new HashManager (),
        new Authenticator (),
        new IdGenerator ()
    );
    async signup(req: Request, res: Response) {
        try {
          const result = await UserController.UserBusiness.signup(
            req.body.name,
            req.body.email,
            req.body.password,
            req.body.role
          );
          res.status(200).send(result);
        } catch (err) {
          res.status(err.errorCode || 400).send({ message: err.message });
        }
      }


}