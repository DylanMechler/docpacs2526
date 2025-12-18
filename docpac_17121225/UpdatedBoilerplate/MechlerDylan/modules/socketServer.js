const express = require('express');
const app = express();
const logger = require('./modules/logger');
const sessionMiddleware = require('./middleware/session');