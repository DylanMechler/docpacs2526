require('dotenv').config();
const express = require('express');
const app = express();
const sqlite = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const logger = require('../logger.js')
const db = new sqlite.Database('./data/database.sqlite', (err) => {
    if (err) {
        logger.error('Error connecting to database:', err);
    } else {
        logger.info('Connected to database')
    }
});

const PORT = process.env.PORT || 3000;
const FORMBAR_REDIRECT_URI = process.env.FORMBAR_REDIRECT_URI
const thisURL = `http://localhost:${PORT}/formbarOauth`

function formbarRedirect(req, res) {
    if (req.query.token) {
        let tokenData = jwt.decode(req.query.token);
        req.session.token = tokenData;
        req.session.user = tokenData.displayName;
        req.session.id = tokenData.id;
        db.run('INSERT OR IGNORE INTO users (username, formbarID) VALUES (?, ?)', [tokenData.displayName, tokenData.id], function (err) {
            if (err) {
                logger.error('Database Error:', err.message)
            }
        });
        res.redirect('/');
    } else {
        res.redirect(`${FORMBAR_REDIRECT_URI}/oauth?redirectURL=${thisURL}`)
    }
}

module.exports = { formbarRedirect };