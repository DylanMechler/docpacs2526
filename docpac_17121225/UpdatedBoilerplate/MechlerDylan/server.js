//requirements and setup
require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const { io } = require('socket.io');
const sqlite3 = require('sqlite3').verbose();
const logger = require('./modules/logger');

//express setup
app.set('view engine', 'ejs');
app.use(express.static('public'));

//from env
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET;
const FORMBAR_CLIENT_ID = process.env.FORMBAR_CLIENT_ID
const FORMBAR_CLIENT_SECRET = process.env.FORMBAR_CLIENT_SECRET
const FORMBAR_REDIRECT_URI = process.env.FORMBAR_REDIRECT_URI
const DATBASE_FILE = process.env.DATABSE_FILE

app.get('/', (req, res) => {
    logger.info("Rendering Home Page")
    res.render('home.ejs');
});

app.get('/login', (req, res) => {
    logger.info("Rendering Login Page")
    res.render('login.ejs');
});

app.get('/profile', (req, res) => {
    logger.info("Rendering Profile Page")
    res.render('profile.ejs');
});

app.get('/sockets', (req, res) => {
    logger.info("Rendering Sockets Page")
    res.render('sockets.ejs');
});

app.listen(PORT, (err) => {
    if (err) {
        logger.error(`Error Starting HTTP Server: ${err.message}`)
    } else {
        logger.info(`Started HTTP Server on Port ${PORT}`);
    }
});