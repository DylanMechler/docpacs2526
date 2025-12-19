const bcrypt = require('bcrypt');

function hashPassword(password) {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
}

function comparePassword(enteredPassword, passwordHash) {
    return bcrypt.compare(enteredPassword, passwordHash)
}

module.exports = {hashPassword, comparePassword};