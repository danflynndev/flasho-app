const mongoose = require('mongoose');
const { Schema } = mongoose;

const QASchema = new Schema({
    _id: {
        type: Number,
        default: 0
    },
    q: {
        type: String,
        required: true,
        maxLength: 70
    },
    a: {
        type: String,
        required: true,
        maxLength: 140
    }
})

const CardSchema = new Schema({
    _id: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        required: true,
        maxLength: 60
    },
    qas: [QASchema]
})

const DeckSchema = mongoose.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    decks: [{
        _id: {
            type: Number,
            default: 0
        },
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
    }]
});

module.exports = mongoose.model('Deck', DeckSchema); 