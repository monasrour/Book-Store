const express=require('express');
const bookRouter=express.Router();
const bookController=require('../controllers/bookController.js')

bookRouter.get('/',bookController.getAllBooks);
bookRouter.get('/:id',bookController.getOneBook);
bookRouter.post('/',bookController.addNewBook);
bookRouter.put('/:id',bookController.editBook);
bookRouter.delete('/:id',bookController.deleteBook);

module.exports=bookRouter;