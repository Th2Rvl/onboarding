const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'data.json');

function read() {
    const raw = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
}

function write(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 4), 'utf-8');
}

module.exports = { read, write };