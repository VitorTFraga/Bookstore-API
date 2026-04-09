import BaseError from "./BaseError.js";

class BadRequest extends BaseError{
    constructor(message = "Um ou mais dados fornecidos estão incorretos na requisição"){

        super(message,400)
    }
}

export default BadRequest;