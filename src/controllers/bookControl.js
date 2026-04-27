import NotFound from "../error/NotFound.js";
import {book} from "../models/index.js";


class BookController{

    static async showBooks(req,res, next){//static serve para chamar a função sem precisar estanciar ela antes

        try {
            
            const getBooks = await book.find({})//.find é um metodo moongose
            res.status(200).json(getBooks)
        } catch (err) {
            next(err);
            
        }
        
    }

    static async showBook (req, res,next){

        try{

            const id = req.params.id;
            const idBook = await book.findById(id)
            
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

            const search = {};
            const {editora, titulo} = req.query

            if(editora) search.publisher = editora;
            if(titulo) search.title = titulo;
            
            const newPublisher = await book.find(search)//por ter o mesmo nome poderia escrever só {publisher}
            res.status(200).json({newPublisher})
        } catch (err) {
            next(err);
        }
    }
}

export default BookController;