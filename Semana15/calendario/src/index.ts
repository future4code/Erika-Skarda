
import moment from 'moment'
moment.locale('pt-br');
import * as fs from 'fs';

const funcao: string = process.argv[2]

switch(funcao) {
    case "create event":
        createEvent()
        break
    case "get event":
        getEvents()
        break
    default:
        console.log("Escolha uma função: create event ou get event, por gentileza")
        break
}

type atividade = {

    nome: string,
    descricao: string,
    data: string,
    horaDeInicio: moment.Moment,
    horaFInal: moment.Moment
    
}

const taskFile: string = 'taskFile.json';

function getEvents(): any {
    
    try {
        
        const readFile = fs.readFileSync(taskFile, "utf-8")
        const taskFileToObject: any = JSON.parse(readFile)
        console.log(taskFileToObject)

    } catch (err) {

        console.log("Erro ao ler arquivo")
    }
}
// getEvents(atividades)



function createEvent() : any {

 const data = moment(process.argv[5], "DD/MM/YYYY")
 //transforma a data em string
 const dataFormatada = data.format("L")

    const atividades: atividade = {
   
        nome: process.argv[3],
        descricao:process.argv[4],
        data:dataFormatada,
        horaDeInicio: moment(process.argv[6], "hh:mmA"),
        horaFInal: moment(process.argv[7], "hh:mmA")

   }
    const today = moment();
    console.log(today);
    const data1 = today.unix()
    const data2 = data.unix()
    const result = data2 - data1

    if(atividades.nome && atividades.descricao && atividades.data && result >= 0) {
        try {

            const data: Buffer = fs.readFileSync(taskFile)
            const treatedData: string = data.toString()
            const arquivoJson: any = JSON.parse(treatedData)

                if(arquivoJson.find((task: any) => task.data === dataFormatada)) {

                    console.log(`Você já possui tarefa : ${atividades.nome}`)

                } else {

                    try {

                        arquivoJson.push(atividades)
                        const jsonToString = JSON.stringify(atividades, null, 3)
                        fs.appendFileSync(taskFile, jsonToString)
                        console.log('Dado inserido com sucesso')

                    } catch (error) {

                        console.log("Não inseriu tarefa")
                    }
                }
        
        } catch (error) {

            console.log(error)
        }
    } else {

         console.log("Não crie tarefas ou descrições em branco e escreva tarefas para o futuro")
     }

 }
//  createEvent()