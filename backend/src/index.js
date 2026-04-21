const express = require('express');
const cors = require('cors');

const membersController = require('./controllers/members.controller');
const teamsController = require('./controllers/teams.controller');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/teams/:teamId/members', membersController);
app.use('/api/teams', teamsController);


app.listen(PORT, () => {
    console.log(`API démarrée sur http://localhost:${PORT}`);
});