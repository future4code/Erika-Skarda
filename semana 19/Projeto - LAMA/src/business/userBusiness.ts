import { UserDatabase } from "../data/userDatabase";
import { HashManager } from "../services/hashManager";
import { Authenticator } from "../services/authenticator";
import { IdGenerator } from "../services/idGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { User, stringToUserRole } from "../model/user";
import { GenericError } from "../errors/GenericError";
import { NotFoundError } from "../errors/NotFoundError";

export class UserBusiness {
    
    constructor(
      protected userDatabase: UserDatabase,
      private hashGenerator: HashManager,
      private tokenGenerator: Authenticator,
      private idGenerator: IdGenerator
    ) {}
  
    public async signup(
    
      name: string,
      email: string,
      password: string,
      role: string
    ) {
      if (!name || !email || !password) {
        throw new InvalidParameterError("Missing input");
      }
  
      if (email.indexOf("@") === -1 || email.indexOf(".com") === -1) {
        throw new InvalidParameterError("Invalid email");
      }
  
      if (password.length < 6) {
        throw new InvalidParameterError("Invalid password");
      }
      

      const id = this.idGenerator.generate();
      
      const cryptedPassword = await this.hashGenerator.hash(password);
      
      const searchEmail = await this.userDatabase.getUserById(id)

      if(searchEmail?.getEmail() === email) {
        throw new GenericError("Entry with other e mail")
      }
      await this.userDatabase.createUser(
        new User(id, name, email, cryptedPassword, stringToUserRole(role))
      );
  
      const accessToken = this.tokenGenerator.generateToken({
        id,
        role,
      });
      return { accessToken };
    }
   
    public async login(email: string, password: string) {

      if (!email || !password) {

        throw new InvalidParameterError("Missing input");
        
      }
  
      const user = await this.userDatabase.getUserByEmail(email);
  
      if (!user) {

        throw new NotFoundError("User not found");
      }
  
      const isPasswordCorrect = await this.hashGenerator.compare(
        password,
        user.getPassword()
      );
  
      if (!isPasswordCorrect) {
        throw new InvalidParameterError("Invalid password");
      }
  
      const accessToken = this.tokenGenerator.generateToken({
        id: user.getId(),
        role: user.getRole(),
      });
  
      return { accessToken };
    }
  
    public async getUserById(id: string) {
      
      const user = await this.userDatabase.getUserById(id);
  
      if (!user) {
        throw new NotFoundError("User not found");
      }
      
      return {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        role: user.getRole(),
      };
    } 
  }