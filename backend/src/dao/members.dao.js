const db = require('../db/db');

function findAll() {
    const data = db.read();
    return data.members;
}

function findById(id) {
    const data = db.read();
    return data.members.find(t => t.id === id);
}

function findByTeamId(teamId) {
    const data = db.read();
    return data.members.filter(t => t.teamId == teamId);
}

function create(member) {
    const data = db.read();
    const newId = data.members.length > 0
        ? Math.max(...data.teams.map(t => t.id)) + 1
        : 1;
    const newMember = { id: newId, ...member};
    data.members.push(newMember);
    db.write(data);
    return newMember;    
}

module.exports = { findAll, findById, findByTeamId, create };