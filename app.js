import express from 'express'
var app = express();
const port = 3000
//const initializeGame = require('./GameEngine')
import  bodyParser from 'body-parser'
import { initializeGame } from './GameEngine.js'
import { runTurnZero } from './GameEngine.js'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({}))

app.use('/static', express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/introduction', (req, res) => {
    let gamePrompt = initializeGame()
    res.render('introduction.ejs', {"gamePrompt": gamePrompt})
})

app.get('/turn-zero', (req, res) => {
    let gamePrompt= runTurnZero()
    res.render('turn-zero.ejs', {"gamePrompt": gamePrompt})
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
