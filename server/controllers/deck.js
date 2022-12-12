const DeckModel = require('../models/deck');
const UserModel = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
    getDecks: async (req, res) => {
        const userId = req.params.id;

        try {
            const query = { user_id: ObjectId(userId)}
            const userDecks = await DeckModel.findOne(query);
            res.status(200).json(userDecks);
        } catch (err) {
            res.status(500).json({ message: 'something went wrong' })
        }
    },

    createDeck: async (req, res) => {
        const userId = req.params.id;
        const { desc, title, cards } = req.body
        try {
            const query = { user_id: ObjectId(userId)};
            const operation = { 
                $push: { 
                    decks: { 
                        _id: new ObjectId(),
                        desc: desc,
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
    },

    updateDeck: async (req, res) => {
        const userId = req.params.id;
        try {
            const update = req.body;
            const query = {'decks._id': ObjectId(update._id)};
            const operation = {
                $set: {
                    'decks.$.title': update.title,
                    'decks.$.desc': update.desc,
                    'decks.$.cards': update.cards
                }
            }
            const result = await DeckModel.findOneAndUpdate(query, operation, {new: true})
            res.status(201).json({ message: 'Successfully Updated'})
        } catch (err) {
            res.status(500).json({ message: 'server error' })
        }
    },

    deleteDeck: async (req, res) => {
        const { userId, deckId } = req.body;
        try {
            const query = { userId: ObjectId(userId)}
            const operation = {
                $pull: {
                    decks: {
                        _id: ObjectId(deckId)
                    }
                }
            }
            const result = await DeckModel.findOneAndUpdate(query, operation, {new: true});
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json({ message: 'server error' })
        }
    }

}