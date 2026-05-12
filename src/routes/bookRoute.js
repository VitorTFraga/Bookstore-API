import express from 'express'
import BookController from '../controllers/bookControl.js'
import pagination from '../middlewares/pagination.js';

const route = express.Router()

route.get('/livros', BookController.showBooks, pagination);
route.get('/livros/busca', BookController.findBookFilter, pagination)
route.get('/livros/:id', BookController.showBook);
route.post('/livros/', BookController.bookCreate);
route.put('/livros/:id', BookController.updateBook);
route.delete('/livros/:id', BookController.deleteBook);

export default route