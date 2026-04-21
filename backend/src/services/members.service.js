const membersDao = require('../dao/members.dao');
const teamsDao = require('../dao/teams.dao');

function getAllMembers() {
    return membersDao.findAll();
}

function getMemberById(id) {
    return membersDao.findById(id);
}

function getMembersByTeamId(teamId) {
    return membersDao.findByTeamId(teamId);
}

function createMember(memberData) {
    if (!memberData.nom) {
        throw new Error('Le nom est obligatoire');
    }

    if (!memberData.prenom) {
        throw new Error('Le prenom est obligatoire');
    }

    if (!memberData.email) {
        throw new Error("L'email est obligatoire");
    }

    if (memberData.teamId && teamsDao.findById(memberData.teamId) == null) {
        throw new Error("L'identifiant de l'équipe est incorrecte, aucune équipe ne possède cette identifiant");
    }

    if (!memberData.teamId) {
        memberData.teamId = 0;
    }

    if (!memberData.role) {
        memberData.role = "membre"
    }

    

    return membersDao.create({ nom: memberData.nom, prenom: memberData.prenom, 
        email: memberData.email, role: memberData.role, teamId: memberData.teamId });
}

module.exports = { getAllMembers, getMemberById, getMembersByTeamId, createMember };