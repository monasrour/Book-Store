const express=require('express');
const categoryRouter=express.Router();
const categoryController=require('../controllers/categoryController.js');

categoryRouter.get('/',categoryController.getAllCategories);
categoryRouter.get('/:id',categoryController.getOneCategory);
categoryRouter.post('/',categoryController.addNewCategory);
categoryRouter.put('/:id',categoryController.editCategory);
categoryRouter.delete('/:id',categoryController.deleteCategory);

module.exports=categoryRouter;