import express from 'express'
import BookController from '../controllers/bookControl.js'

const route = express.Router()

route.get('/livros', BookController.showBooks);
route.get('/livros/busca', BookController.findBookFilter)
route.get('/livros/:id', BookController.showBook);
route.post('/livros/', BookController.bookCreate);
route.put('/livros/:id', BookController.updateBook);
route.delete('/livros/:id', BookController.deleteBook);

export default route