const sqlite3 = require('sqlite3').verbose();
const logger = require('../modules/logger');

const db = new sqlite3.Database('data/database.sqlite', (err) => {
    if (err) {
        logger.error(`Error Connecting To Database: ${err.message}`);
    } else {
        logger.info('Connected To Database');
    }
});

db.run(`CREATE TABLE "users" (
	"id"	INTEGER NOT NULL UNIQUE,
	"username"	TEXT NOT NULL UNIQUE,
	"passwordHash"	TEXT,
	"formbarID"	INTEGER UNIQUE,
	"createdAt"	DATETIME DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY("id" AUTOINCREMENT)
)`, (err) => {
    if (err) {
        logger.error(`Error Creating Users Table: ${err.message}`);
    } else {
        logger.info("Users Table Created Successfully");
    }
    db.close((err) => {
        if (err) {
            logger.error(`Error Closing Database: ${err.message}`);
        } else {
            logger.info("Database Connection Closed");
        }
    });
});