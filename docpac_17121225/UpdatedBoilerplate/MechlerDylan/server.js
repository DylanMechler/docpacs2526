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