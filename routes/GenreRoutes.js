import GenreController from '../controllers/GenreController';

const express = require('express');
const router = express.Router();

router.get('/', GenreController.getAll);
router.post('/', GenreController.create);
router.put('/:id', GenreController.update);
router.delete('/:id', GenreController.remove);
router.get('/:id', GenreController.getOne);

module.exports = router;