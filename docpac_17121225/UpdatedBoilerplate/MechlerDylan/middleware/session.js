const express = require('express');
const app = express();

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));