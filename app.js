var express = require('express');
var app = express();
const port = 3000
const initializeGame = require('./GameEngine')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({}))

app.use('/static', express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/start-game', (req, res) => {
    res.send("Game Start!")
    initializeGame()
})

app.get('/game-loop', (req,res) => {
    res.send('What is your command? add it to the path :)')
})

app.get('/game-loop/:command', (req, res) => {
    res.send("Game Start!")
    initializeGame()
})

app.listen(port, () => {
    console.log(`Pokemon TCG app listening on port ${port}`)
})
