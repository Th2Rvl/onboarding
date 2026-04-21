const teamsDao = require('../dao/teams.dao');

function getAllTeams() {
    return teamsDao.findAll();
}

function getTeamById(id) {
    return teamsDao.findById(id);
}

function createTeam(teamData) {
    if (!teamData.nom) {
        throw new Error('Le nom est obligatoire');
    }
    return teamsDao.create({ nom: teamData.nom });
}

module.exports = { getAllTeams, getTeamById, createTeam };