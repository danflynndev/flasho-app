const mongoose = require('mongoose');
const { Schema } = mongoose;

const QASchema = new Schema({
    q: {
        type: String,
        required: true,
        maxLength: 70
    },
    a: {
        type: String,
        required: true,
        maxLength: 240
    }
})

const CardSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 60
    },
    qas: [QASchema]
})

const DeckObjSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 60
    },
    desc: {
        type: String,
        required: true,
        maxLength: 140
    },
    cards: [CardSchema]
})

const DeckSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    decks: [DeckObjSchema]
});

module.exports = mongoose.model('Deck', DeckSchema);