import * as fs from 'fs';
import moment from 'moment'

//Cálculo de milisegundos até hoje
// const today: number = new Date().getTime();
const ano: number = new Date().getFullYear()

const today = moment();
console.log(today)

export type user = {
    name: string,
    dateOfBirth: string,
    cpf: number,
    saldo: number,
    extratos:extrato[]
}

export const countUser: user =
{
    name:process.argv[2],
    dateOfBirth:process.argv[3],
    cpf: Number(process.argv[4]),
    saldo:0,
    extratos:[]
}
type extrato = {
    value: number,
    date: number,
    description: string
}

export const fileUser: string = 'fileUser.json';

function createCount(countUser: user): any {

    // let age = Number(ano - countUser.dateOfBirth)
   
    const userDate = moment(`${countUser.dateOfBirth}`, 'DD/MM/YYYY');
    const inYears = today.diff(userDate, 'years');
    const inMonth = today.diff(userDate, 'months')
     console.log(inMonth)
     console.log(inYears)

    if (inYears < 18) {
        
        console.log("Você não tem idade pra criar uma conta")

    } else {
        try {

            const data: Buffer = fs.readFileSync(fileUser)
            const treatedData: string = data.toString()
            const doc: any = JSON.parse(treatedData)
            
            if(doc.find((account:any) => account.cpf === countUser.cpf)) {
               
                console.log("Você já possui cadastro")


        } else {
            doc.push(countUser)
            const jsonToString = JSON.stringify(doc, null, 2)
            fs.writeFileSync(fileUser,jsonToString)
            console.log('Dado inserido com sucesso')
        }

            
        } catch (error){
            console.log(error)
        }
   
    }
}
    
    createCount(countUser)