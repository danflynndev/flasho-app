const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const guest_decks = require('../db/guest_decks');

const UserModel = require('../models/user');
const DeckModel = require('../models/deck')

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    signin: async (req, res) => {
        const { email, password } = req.body;

        try {
            const oldUser = await UserModel.findOne({ email });

            if (!oldUser) {
                return res.status(404).json({ message: 'User doesn\'t exist' });
            }

            const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

            if(!isPasswordCorrect) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ email: oldUser.email, id: oldUser._id, name: oldUser.name }, JWT_SECRET, { expiresIn: '2h'});
            const result = {oldUser, token}

            res.status(200).json({token: token})

        } catch (err) {
            res.status(500).json({ message: 'Something went wrong' });
        }
    },
    signup: async (req, res) => {
        const { email, password, firstName } = req.body;

        try {
            const oldUser = await UserModel.findOne({ email });

            if (oldUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
            
            const hashedPassword = await bcrypt.hash(password, 12);

            const result = await UserModel.create({ email, password: hashedPassword, name: firstName });
            // create decks document and populate it with defaults
            const { decks } = require('../db/guest_decks');
            const defaultData = { 
                user_id: result._id,
                decks
            }
            await DeckModel.create(defaultData);

            const token = jwt.sign({ email: result.email, id: result._id }, JWT_SECRET, { expiresIn: '1h' });

            res.status(201).json({ result: result, token });
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong' });

            console.log(err);
        }
    }
}