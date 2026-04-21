const db = require('../db/db');

function findAll() {
    const data = db.read();
    return data.teams;
}

function findById(id) {
    const data = db.read();
    return data.teams.find(t => t.id === id);
}

function create(team) {
    const data = db.read();
    const newId = data.teams.length > 0
        ? Math.max(...data.teams.map(t => t.id)) + 1
        : 1;
    const newTeam = { id: newId, ...team };
    data.teams.push(newTeam);
    db.write(data);
    return newTeam;
}

module.exports = { findAll, findById, create };