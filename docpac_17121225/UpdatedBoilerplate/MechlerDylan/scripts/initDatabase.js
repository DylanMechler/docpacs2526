const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('data/database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});

db.run(`CREATE TABLE "users" (
	"id"	INTEGER NOT NULL UNIQUE,
	"username"	TEXT NOT NULL UNIQUE,
	"passwordHash"	TEXT NOT NULL,
	"formbarID"	INTEGER,
	"createdAt"	INTEGER,
	"updatedAt"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
)`), (err) => {
    if (err) {
        console.error("Error creating users table:", err.message);
    } else {
        console.log("Users table created successfully.");
    }
    db.close();
}