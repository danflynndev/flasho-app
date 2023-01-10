const jwt = require('jsonwebtoken');
require('dotenv').config;

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, JWT_SECRET);

            req.userId = decodedData?.id;
        } 
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = auth;
