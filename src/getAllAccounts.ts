import * as fs from 'fs'
import {user, fileUser} from './index'


function getAllAccounts(fileUser:string): void {

    try {

        const data: Buffer = fs.readFileSync(fileUser)
        const treatedData: string = data.toString()
        const doc: any = JSON.parse(treatedData)
        console.log(JSON.stringify (doc, null, 4))
        
        
    } catch (error){

        console.log(error)
    }

}

console.log(getAllAccounts(fileUser))