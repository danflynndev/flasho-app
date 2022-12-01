const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/user');

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

            const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, JWT_SECRET, { expiresIn: '3h'});
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

            const token = jwt.sign({ email: result.email, id: result._id }, JWT_SECRET, { expiresIn: '1h' });

            res.status(201).json({ result: result, token });
        } catch (err) {
            res.status(500).json({ message: 'Something went wrong' });

            console.log(err);
        }
    }
}