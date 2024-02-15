var express = require('express');
var app = express();
const port = 3000
const initializeGame = require('./GameEngine')

app.get('/', (req, res) => {
    initializeGame()
    res.send('Game Engine now starting')
})

app.listen(port, () => {
    console.log(`Pokemon TCG app listening on port ${port}`)
})
