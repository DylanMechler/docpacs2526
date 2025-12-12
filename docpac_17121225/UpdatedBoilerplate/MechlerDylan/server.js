//requirements and setup
require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const { io } = require('socket.io');
const sqlite3 = require('sqlite3').verbose();

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
    res.render('home.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.listen(PORT, () => {
    console.log("Started HTTP Server on port 3000");
});