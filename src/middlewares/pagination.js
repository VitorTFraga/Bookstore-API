import BadRequest from "../error/WrongRequest.js";

async function pagination(req,res,next) {   

    try {
        
        let {pagina =1, limite = 5, ordenacao = "_id:-1"} = req.query

        const translationMap = {
            titulo : "title",
            preco: "price",
            autor: "author",
            editora: "publisher",
            _id:"_id"
        };

        let [filterField, sequenceSense] = ordenacao.split(":");

        const filterOrdering = translationMap[filterField]||filterField;

        pagina = parseInt(pagina);
        limite = parseInt(limite);
        sequenceSense = parseInt(sequenceSense);

        const resultQuery = req.results
        if(pagina>0 && limite>0){

            const paginationReults = await resultQuery.find()//.find é um metodo moongose
                .sort({[filterOrdering]: sequenceSense})
                .skip((pagina-1)*limite)
                .limit(limite)
                .exec()
            res.status(200).json(paginationReults)
        }else{
            next(new BadRequest());
        }
    } catch (err) {
        next(err)
    }
}

export default pagination;