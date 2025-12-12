const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('data/database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Created Database Successfully');
    }
});

db.run(`CREATE TABLE "users" (
	"id"	INTEGER NOT NULL UNIQUE,
	"username"	TEXT NOT NULL UNIQUE,
	"passwordHash"	TEXT NOT NULL,
	"formbarID"	INTEGER NOT NULL UNIQUE,
	"createdAt"	INTEGER,
	"updatedAt"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
)`), (err) => {
    if (err) {
        console.error("Error Creating Users Table:", err.message);
    } else {
        console.log("Users Table Created Successfully.");
    }
    db.close();
}