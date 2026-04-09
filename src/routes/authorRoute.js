import express from 'express'
import AuthorController from '../controllers/authorControl.js'

const route = express.Router()

route.get('/autores', AuthorController.listAuthors);
route.get('/autores/:id', AuthorController.listAuthor);
route.post('/autores', AuthorController.createAuthor);
route.put('/autores/:id', AuthorController.updateAuthor);
route.delete('/autores/:id', AuthorController.deleteAuthor);

export default route;