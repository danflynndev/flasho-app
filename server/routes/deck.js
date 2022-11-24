const { getDecks, createDeck } = require('../controllers/deck');

const router = require('express').Router();

router.get('/:id', getDecks);

router.post('/create/:id', createDeck);

module.exports = router;