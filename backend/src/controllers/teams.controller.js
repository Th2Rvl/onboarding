const { Router } = require('express');
const teamsService = require('../services/teams.service');

const router = Router();

router.get('/', (req, res) => {
    const teams = teamsService.getAllTeams();
    res.json(teams);
});

router.get('/:id', (req, res) => {
    const team = teamsService.getTeamById(Number(req.params.id));
    if (!team) {
        return res.status(404).json({ error: 'Équipe introuvable' });
    }
    res.json(team);
});

router.post('/', (req, res) => {
    try {
        const team = teamsService.createTeam(req.body);
        res.status(201).json(team);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;