const winston = require('winston');

function displayDate() {
    let date = new Date(Date.now());
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (month < 10) {month = "0" + month}
    if (day < 10) {day = "0" + day}
    if (minutes < 10) {minutes = "0" + minutes}
    if (seconds < 10) {seconds = "0" + seconds}
    return date.getFullYear() + "-" + month + "-" + day + " " + date.getHours() + ":" + minutes + ":" + seconds
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ level, message }) => `${"[" + displayDate() + "]"} ${"[" + level + "]"} ${message}`)
    ),
    transports: [
        new winston.transports.Console()
    ]
});

module.exports = logger;