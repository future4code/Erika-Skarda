import { InvalidParameterError } from "../errors/InvalidParameterError";

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: UserRole
  ) {}
  
  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getEmail(): string {
    return this.email;
  }
  public getPassword(): string {
    return this.password;
  }
  public getRole(): UserRole {
    return this.role;
  }
}
export const stringToUserRole = (input: string): UserRole => {
  switch (input) {
    case "normal":
      return UserRole.NORMAL;
    case "admin":
      return UserRole.ADMIN;
    default:
      throw new InvalidParameterError("Invalid user role");
  }
};
export enum UserRole {
  NORMAL = "normal",
  ADMIN = "admin",
}