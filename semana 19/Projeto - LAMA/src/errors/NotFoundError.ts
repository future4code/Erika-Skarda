import { BaseError } from "./BaseError/baseErrors";

export class NotFoundError extends BaseError {

    constructor(message:string) {
        super(message, 404)
    }
}