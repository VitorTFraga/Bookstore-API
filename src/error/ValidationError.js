import BadRequest from "./WrongRequest.js";

class ValidationError extends BadRequest{
    constructor(err){

        const errMessage = Object.values(err.errors)
            .map(err => err.message)
            .join("; ")

        super(`os seguintes erros foram encontrados: ${errMessage}`)
    }
}

export default ValidationError;