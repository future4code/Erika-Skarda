import * as jwt from 'jsonwebtoken'
import dotenv from "dotenv"

dotenv.config();

export class Authenticator {
    private static getExpires(): number {
        return Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
    }
    public generateToken(data: AuthenticationData): string {
        return jwt.sign(
            data,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.getExpires()
            }
        );
        
    }


    public verify(token:string) : AuthenticationData { 
       const data = jwt.verify(token,process.env.JWT_KEY as string) as any;
       return {
           id: data.id
       }

    }
}

interface AuthenticationData {
    id: string
}