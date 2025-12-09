// const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

// const sql = fs.readFileSync('data/database.sqlite', 'utf-8');
// const db = new sqlite3.Database('data/database.sqlite');

// db.exec(sql, (err) => {
//     if (err) {
//         console.log('Error:', err);
//     } else {
//         console.log('Database initialized successfully.');
//     }
//     db.close();
// })
const db = new sqlite3.Database('data/database.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the database.');
    }
});