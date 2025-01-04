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

