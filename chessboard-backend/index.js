const express = require('express');
const WebSocket = require('ws');
const { Gpio } = require('onoff');

const SENS_PINS = [1, 2, 3, 4, 5, 6]; // TODO: MUST SET LATER
const sensors = SENS_PINS.map(pin => new Gpio(pin, 'in'));

const app = express();
const PORT = 3000;

const wss = new WebSocket.Server({ noServer: true });
let boardState = {};
let currGame = [];
let gameInProgress = false;

function readSensors() {
       boardState = SENS_PINS.reduce((state, pin, idx) => {
           state[`sensor_${idx}`] = new Gpio(pin, 'in').readSync();
           return state;
       }, {});

       return boardState;
}

wss.on('connection', ws => {
    console.log('Client connected');
    ws.send(JSON.stringify({ type: 'board_state', data: readSensors() }));

    const interval = setInterval(() => {
        const state = readSensors();
        ws.send(JSON.stringify({ type: 'board_state', data: state }));
    }, 500);

    ws.on('close', () => clearInterval(interval));
});

function logMove(move, timeControl) {
    currGame.push({ move, timeControl });
}

function saveGameToDatabase() {
    const db = new sqlite3.Database('chess.db');
    db.run(`CREATE TABLE IF NOT EXISTS games (id INTEGER PRIMARY KEY, game_data TEXT)`);
    db.run(`INSTERT INTO games (game_data) VALUES (?)`, [JSON.stringify(currGame)], err => {
        if (err) console.error(err);
        console.log('Game Saved');
        db.close();
    });
}

app.use(express.json());

app.post('/start', (req, res) => {
    gameInProgress = true;
    currGame = [];
    res.json({ message: 'Game Started' });
});

app.post('/move', (req, res) => {
    if (!gameInProgress) return res.status(400).json({ error: 'No game in progress' });
    const { move, timeControl } = req.body;
    logMove(move, timeControl);
    res.json({ message: 'Move logged', move });
});

app.post('/end', (req, res) => {
    if (!gameInProgress) return res.status(400).json({ error: 'No game in progress' });
    gameInProgress = false;
    saveGameToDatabase();
    res.json({ message: 'Game ended and saved' });
});

app.get('/games', (req, res) => {
    const db = new sqlite3.Database('chess.db');
    db.all(`SELECT * FROM games`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: 'Failed to retrieve games' });
        res.json(rows.map(row => JSON.parse(row.game_data)));
        db.close();
    });
});

const server = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
server.on('upgrade', (req, socket, head) => {
    wss.handleUpgrade(req, socket, head, ws => {
        wss.emit('connection', ws, req);
    });
});
