const express = require('express');
const app = express();
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./data/database.sqlite', (err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database')
    }
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
        if (err) {
            console.error("Database error: ", err)
        } else if (row) {
            res.redirect('/home?user=' + username)
        }
    })
})