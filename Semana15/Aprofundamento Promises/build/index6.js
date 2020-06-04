"use strict";
//Exercício 6
// const sendNotifications = async (
//     users: User[],
//     message: string
//   ): Promise<void> => {
//     const promiseArray = [];
//     for (const user of users) {
//       promiseArray.push(
//         axios.post(`${baseUrl}/notifications/send`, {
//           subscriberId: user.id,
//           message: message,
//         })
//       );
//     }
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
//     await Promise.all(promiseArray);
//   };
//a) 
const axios_1 = __importDefault(require("axios"));
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";
const promiseArray = [];
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allSubscribers = yield getAllSubscribers();
        console.log(allSubscribers);
        console.log(yield createNews("Coronavírus", "Vacina", 1589818936000));
        for (const subscriber of allSubscribers) {
            promiseArray.push(axios_1.default.post(`${baseURL}/notifications/send`, {
                subscriberId: subscriber.id,
                message: "Bananinha"
            }));
            console.log(subscriber.name);
        }
        ;
    }
    catch (err) {
        console.log(err);
    }
});
const getAllSubscribers = () => __awaiter(void 0, void 0, void 0, function* () {
    const subscribers = yield axios_1.default.get(`${baseURL}/subscribers/all`);
    return subscribers.data.map((subscriber) => {
        return {
            email: subscriber.email,
            name: subscriber.name,
            id: subscriber.id
        };
    });
});
function createNews(title, content, date) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.put(`${baseURL}/news`, {
            title,
            content,
            date
        });
    });
}
;
main();
