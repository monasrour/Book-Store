const express = require('express');
const authorController = require('../controllers/authorController')
const router = express.Router();

router.post('/authors', authorController.add);
router.get('/authors' , authorController.list );
router.get('/authors/:id' , authorController.getById );
router.delete('/authors/:id' , authorController.remove );
router.put('/authors/:id' , authorController.edit );

module.exports = router;