const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const path = require('path');
const mongoose = require('mongoose');
const { appendFile } = require('fs');

require('dotenv').config();

const app = express();

// GLOBALS
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

// APPLICATION LEVEL
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
app.use(morgan('dev'));
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler())
}

// ROUTES
const userRouter = require('./routes/user');
const deckRouter = require('./routes/deck')
app.use('/user', userRouter);
app.use('/deck', deckRouter)

// STATIC FILES FROM REACT
if (NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
    
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
    });
}

// INSERT GUEST USER DATA
if(NODE_ENV === 'development') {
    const guestRouter = require('./routes/guest');
    app.use('/guest', guestRouter)
}

// SERVER
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT || 5000, console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((err) => console.log(err));