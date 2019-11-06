import BookController from '../controllers/BookController';

const express = require('express');
const router = express.Router();

router.get('/', BookController.getAll);
router.post('/', BookController.create);
router.put('/:id', BookController.update);
router.delete('/:id', BookController.remove);
router.get('/:id', BookController.getOne);

module.exports = router;