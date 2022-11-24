const DeckModel = require('../models/deck');
const UserModel = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    getDecks: async (req, res) => {
        const userId = req.params.id;

        try {
            const query = { userId: ObjectId(userId)}
            const userDecks = await DeckModel.findOne(query);
            console.log(userDecks)
            res.status(200).json(userDecks);
        } catch (err) {
            res.status(500).json({ message: 'something went wrong' })
        }
    },

    createDeck: async (req, res) => {
        const userId = req.params.id;
        const { title, cards } = req.body
        try {
            const query = { userId: ObjectId(userId)};
            const operation = { 
                $push: { 
                    decks: { 
                        title: title,
                        cards: cards
                    }
                }
            };
            await DeckModel.findOneAndUpdate(query, operation);
            res.status(201).json({ message: 'New deck added' })
        } catch (err) {
            res.status(500).json({ message: 'server error' })
        }
    }

}