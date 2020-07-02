import express from "express";
import { UserController } from "../controller/userController";


export const userRouter = express.Router();
userRouter.post("/signup", new UserController().signup);
//userRouter.post("/login", new UserController().login);