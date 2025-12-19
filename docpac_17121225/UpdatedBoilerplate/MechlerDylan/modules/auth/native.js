const express = require('express');
const app = express();
const sqlite = require('sqlite3').verbose();
const comparePassword = require('./passwordHashing').comparePassword;
const logger = require('../logger.js')
const db = new sqlite.Database('./data/database.sqlite', (err) => {
    if (err) {
        logger.error('Error connecting to database:', err);
    } else {
        logger.info('Connected to database')
    }
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            logger.error("Database error: ", err)
        } else if (row) {
            let passwordCheck = comparePassword(password, row.passwordHash);
            if (passwordCheck) {
                logger.info(`User ${username} Logged In Successfully`);
            } else {
                logger.warn('Invalid login attempt')
            }
        }
    });
});