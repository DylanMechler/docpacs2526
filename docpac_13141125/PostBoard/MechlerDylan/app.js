const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const session = require('express-session')
//add encryption if necessary
const app = express();
const AUTH_URL = 'https://formbeta.yorktechapps.com'
const THIS_URL = 'http://localhost:3000/login'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new sqlite3.Database('./data/user.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

app.set('view engine', 'ejs');

app.use(session({
    secret: 'secretString',
    resave: false,
    saveUninitialized: false
}));

function isAuthenticated(req, res, next) {
    if (req.session.user) next()
    else res.redirect(`/login?redirectURL=${THIS_URL}`);
};

app.get('/', isAuthenticated, (req, res) => {
        res.render('index.ejs')
});

app.get('/post', isAuthenticated, (req, res) => {
    res.render('post.ejs')
});

app.get('/comment', isAuthenticated, (req, res) => {
    res.render('comment.ejs')
});

app.get('/login', (req, res) => {
    if (req.query.token) {
		let tokenData = jwt.decode(req.query.token)
		req.session.token = tokenData
		req.session.user = tokenData.displayName
		res.redirect('/')
	} else {
		res.redirect(`${AUTH_URL}/oauth?redirectURL=${THIS_URL}`)
	}
});

app.listen(3000, () => {
    console.log("Started HTTP Server on port 3000");
});