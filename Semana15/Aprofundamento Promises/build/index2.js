"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Exercício 2
// const getSubscribers = async (): Promise<any[]> => {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data;
//   };
//a) função nomeada leva "function" e não possui a setinha (=>), 
//outro ponto é que o argumento fica no async
//b)  
const axios_1 = __importDefault(require("axios"));
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const allSubscribers = yield getAllSubscribers();
    console.log(allSubscribers);
});
const getAllSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield axios_1.default.get(`${baseURL}/subscribers/all`);
    return users.data;
});
main();
