const UserModel = require('../models/user.js');
const DeckModel = require('../models/deck');
const { signup } = require('../controllers/user');

const router = require('express').Router();

//router.post('/signin', signin);
router.get('/signup', (req, res, next) => {
    try {
        const guestCreds = { name: 'test', email: 'test@gmail.com', password: 'test' };
        req.body = guestCreds;
        signup(req, res);
    } catch (err) {
        next(err);
    }
})

router.get('/init', async (req, res, next) => {
    try {
        const { decks } = require('../db/guest_decks');
        const guestUserId = await UserModel.findOne({ email: 'guest@gmail.com' }, { _id: 1 })
        console.log(guestUserId)
        const guestDecks = {
            user_id: guestUserId,
            decks
        }
        DeckModel.create(guestDecks, (err) => {
            if (err) {
                next(err);
            } 
            res.status(201).json({ message: 'Guest records created.' })
        });
    } catch (err) {
        next(err);
    }

})

module.exports = router;