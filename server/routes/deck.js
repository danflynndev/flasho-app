const { getDecks, createDeck, deleteDeck, updateDeck, getDeckById } = require('../controllers/deck');
const auth = require('../middleware/auth');

const router = require('express').Router();

router.get('/:id', getDecks);

router.get('/:userId/:deckId', getDeckById);

router.post('/create/:id', auth, createDeck);

router.post('/update/:id', auth, updateDeck);

router.post('/delete', auth, deleteDeck);

module.exports = router;