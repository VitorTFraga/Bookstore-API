import mongoose from "mongoose";
import BaseError from "../error/BaseError.js";
import ValidationError from "../error/ValidationError.js";
import BadRequest from "../error/WrongRequest.js";
import NotFound from "../error/NotFound.js";

// eslint-disable-next-line no-unused-vars
function errorController(err, req, res, next){

    console.log(err);
    
    if(err instanceof mongoose.Error.CastError){

        new BadRequest().sendError(res)

    }else if (err instanceof mongoose.Error.ValidationError){
        
        new ValidationError(err).sendError(res)
    }else if(err instanceof NotFound){

        err.sendError(res)
    }else{
        new BaseError().sendError(res)
    }
}

export default errorController;