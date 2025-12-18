require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const sqliteSession = require('connect-sqlite3')(session);
const SESSION_SECRET = process.env.SESSION_SECRET;

const sessionMiddleware = session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000, //1 day
        secure: false
    },
    store: new sqliteSession({
        db: 'database.sqlite',
        dir: './data',
        table: 'sessions'
    })
});

module.exports = sessionMiddleware;