import { BaseError } from "./BaseError/baseErrors";

export class GenericError extends BaseError {

  constructor(message: string) {
      
    super(message, 400);
  }
}