const express = require('express');
const router = express.Router();
const pkmController = require('../controllers/PkmController');

// Create a new pkm

router.post('/', pkmController.create);
router.get('/', pkmController.findAll);
router.delete('/:id', pkmController.delete);
router.put('/:id', pkmController.update);

module.exports = router;