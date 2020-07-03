import express from "express";
import { BandController } from "../controller/bandController";

export const bandRouter = express.Router() 

bandRouter.post("/create", new BandController().createBand)
bandRouter.get('/band', new BandController().getBandByName)