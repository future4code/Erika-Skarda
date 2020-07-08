import { BaseError } from "./BaseError/baseErrors";

export class InvalidParameterError extends BaseError {

    constructor(message:string) {

        super(message, 422)
    }
}