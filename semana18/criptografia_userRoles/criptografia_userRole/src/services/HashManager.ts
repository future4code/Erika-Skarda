import * as bcrypt from "bcryptjs";

export class HashManager {

    public async hash(senha:string): Promise<string> {

        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(senha, salt)
        return result
        
    }
    public async compare(senha: string, hash:string) : Promise<boolean> {
        return bcrypt.compare(senha, hash)
    }
}
/*
const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
*/