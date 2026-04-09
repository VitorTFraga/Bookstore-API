import NotFound from "../error/NotFound.js";

const error404 =(req, res, next)=>{

    const err404 = new NotFound();
    next(err404)
}

export default error404;