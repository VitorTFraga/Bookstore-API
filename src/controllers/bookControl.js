import NotFound from "../error/NotFound.js";
import {author, book} from "../models/index.js";


class BookController{

    static async showBooks(req,res, next){//static serve para chamar a função sem precisar estanciar ela antes

        try {
            
            const findBooks = book.find();

            req.results = findBooks;

            next()
        }catch (err) {
            next(err);
                
        }      
    }

    static async showBook (req, res,next){

        try{

            const id = req.params.id;
            const idBook = await book.findById(id)
                .populate("author")
                .exec()
            
            if (idBook !==null) {
                res.status(200).json(idBook);
            }else{
                next(new NotFound('id de livro não encontrado'))
            }
        }catch(err){
            next(err);
        }
    }

    static async bookCreate(req, res, next){

        
        try{
            
            let bodyBook = new book(req.body);

            const newBook = await bodyBook.save()

            res.status(201).json(newBook);
        }catch(err){
            next(err);
        }
    }

    static async updateBook(req, res, next){
        try {
            const id = req.params.id;
            const updatedBook = await book.findByIdAndUpdate(id, {$set: req.body})
            
            if (updatedBook !== null) {
                res.status(200).json({message: 'livro atualizado!'})
            }else{
                next(new NotFound('id de livro não encontrado'))
            }
        } catch (err) {
            next(err);
        }
    }
    static async deleteBook(req, res, next){

        try {
            
            const id = req.params.id;
            const deletedBook = await book.findByIdAndDelete(id);
            
            if (deletedBook !== null) {
                res.status(200).send({message: 'livro exluido'})
            }else{
                next(new NotFound('id de livro não encontrado'))
            }
        } catch (err) {
            next(err);
        }
    }

    static async findBookFilter(req, res, next){

        try {

            const searchMethod = await filterFinder(req.query)
            
            if(searchMethod != null){

                const bookQuery = book
                    .find(searchMethod)
                    .populate("author")

                req.results = bookQuery
                next()
            }else{

                res.status(200).send([])
            }

        } catch (err) {
            next(err);
        }
    }
}

async function filterFinder (params){

    let search = {};
    const {editora, titulo, minPaginas, maxPaginas, autor } = params;

    if(editora) search.publisher = editora;
    if(titulo) search.title = {$regex: titulo, $options: "i"};

    if(minPaginas || maxPaginas)search.pages = {}

    if(minPaginas) search.pages.$gte = minPaginas;
    if(maxPaginas) search.pages.$lte = maxPaginas;
    
    if(autor){
        const authorFound =await author.findOne({name: autor})

        if(authorFound !== null){
    
            search.author = authorFound._id
        }else{

            search = null
        }
    }

    return search;
}

export default BookController;