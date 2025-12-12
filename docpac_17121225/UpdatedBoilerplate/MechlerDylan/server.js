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
const AUTH_URL = process.env.AUTH_URL || 'http://localhost:420';
const THIS_URL = process.env.THIS_URL || 'http://localhost:3000/login';
const API_KEY = process.env.API_KEY || 'your_api_key_here';