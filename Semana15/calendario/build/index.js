"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('pt-br');
const fs = __importStar(require("fs"));
const funcao = process.argv[2];
switch (funcao) {
    case "create event":
        createEvent();
        break;
    case "get event":
        getEvents();
        break;
    default:
        console.log("Escolha uma função: create event ou get event, por gentileza");
        break;
}
const taskFile = 'taskFile.json';
function getEvents() {
    try {
        const readFile = fs.readFileSync(taskFile, "utf-8");
        const taskFileToObject = JSON.parse(readFile);
        console.log(taskFileToObject);
    }
    catch (err) {
        console.log("Erro ao ler arquivo");
    }
}
// getEvents(atividades)
function createEvent() {
    const data = moment_1.default(process.argv[5], "DD/MM/YYYY");
    //transforma a data em string
    const dataFormatada = data.format("L");
    const atividades = {
        nome: process.argv[3],
        descricao: process.argv[4],
        data: dataFormatada,
        horaDeInicio: moment_1.default(process.argv[6], "hh:mmA"),
        horaFInal: moment_1.default(process.argv[7], "hh:mmA")
    };
    const today = moment_1.default();
    console.log(today);
    const data1 = today.unix();
    const data2 = data.unix();
    const result = data2 - data1;
    if (atividades.nome && atividades.descricao && atividades.data && result >= 0) {
        try {
            const data = fs.readFileSync(taskFile);
            const treatedData = data.toString();
            const arquivoJson = JSON.parse(treatedData);
            if (arquivoJson.find((task) => task.data === dataFormatada)) {
                console.log(`Você já possui tarefa para: ${atividades.data}`);
            }
            else {
                try {
                    arquivoJson.push(atividades);
                    const jsonToString = JSON.stringify(atividades, null, 3);
                    fs.appendFileSync(taskFile, jsonToString);
                    console.log('Dado inserido com sucesso');
                }
                catch (error) {
                    console.log("Não inseriu tarefa");
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        console.log("Não crie tarefas ou descrições em branco e escreva tarefas para o futuro");
    }
}
//  createEvent()
