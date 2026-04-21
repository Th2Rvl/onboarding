const { Router } = require('express');
const membersService = require('../services/members.service');

const router = Router({mergeParams: true});

router.get('/', (req, res) => {
    const teamId = req.params.teamId;
    const members = membersService.getMembersByTeamId(teamId);
    res.json(members);
});

router.get('/:id', (req, res) => {
    const member = membersService.getMemberById(Number(req.params.id));
    if(!member) {
        return res.status(404).json({ error: 'Membre introuvable' });
    }
    res.json(member);
});

router.post('/', (req, res) => {
    try {
        const member = membersService.createMember(req.body);
        res.status(201).json(member);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;