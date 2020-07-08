import { BaseError } from "./BaseError/baseErrors";

export class Unauthorized extends BaseError {

    constructor(message:string) {
        super(message, 401)
    }
}