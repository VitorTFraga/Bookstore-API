
import NotFound from "../error/NotFound.js";
import { author } from "../models/author.js";

class AuthorController{

    static async listAuthors(req, res, next){

        try {

            const findAuthor = await author.find({});
            res.status(200).json(findAuthor)
        } catch (err) {
            
            next(err);
        }
    }


    static async listAuthor(req, res, next){

        try {

            const id =  req.params.id;
            const idAuthor = await author.findById(id);

            if(idAuthor !== null){

                res.status(200).json(idAuthor)
            }else{

                next(new NotFound(`id não encontrado.`))
            }
        } catch (err) {

            next(err)
        }
    }


    static async createAuthor(req, res, next){

        try {
            let aut = new author(req.body);
            const newAuthor = await aut.save()
            res.status(201).json(newAuthor)
        } catch (err) {
            
            next(err);
        }
    }


    static async updateAuthor(req, res, next){

        try {

            const id =  req.params.id;
            const updateAuthor = await author.findByIdAndUpdate(id, {$set: req.body})
            
            if (updateAuthor !== null) {
                
                res.status(200).send('autor atualizado com sucesso')
            }else{
                next(new NotFound('id não encontrado.'))
            }
        } catch (err) {
            
            next(err);
        }
    }


    static async deleteAuthor(req, res, next){

        try {

            const id =  req.params.id;
            const deleteAuthor = await author.findByIdAndDelete(id)
            
            if (deleteAuthor !==null) {
                
                res.status(200).send('autor deletado com sucesso.');
            }else{
                next(new NotFound('id não encontrado'))
            }
        } catch (err) {
            
            next(err);
        }
    }
    
}
export default AuthorController;