import express from 'express'
var app = express();
const port = 3000
//const initializeGame = require('./GameEngine')
import  bodyParser from 'body-parser'
import { getDrawPhase, getTurnCommands, initializeGame, getTurnLoopCommands, getAttackStringPrompt } from './GameEngine.js'
import { runTurnZeroPlayerOne, runTurnZeroPlayerTwo } from './GameEngine.js'
import { turnZeroActiveSlotPlayerOne, turnZeroActiveSlotPlayerTwo } from './GameEngine.js'

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

app.get('/turn-zero/player1', (req, res) => {
    let gamePrompt = runTurnZeroPlayerOne()
    res.render('turn-zero-player1.ejs', {"gamePrompt": gamePrompt})
})

app.post('/turn-zero/player1', (req, res) => {
    //console.log(req.body) will log body object and the pair { command: Squirtle }
    console.log(req.body.command)
    let gamePrompt = turnZeroActiveSlotPlayerOne(req.body.command)
    res.render('turn-zero-player1.ejs', {"gamePrompt": gamePrompt})
})

app.get('/turn-zero/player2', (req, res) => {
    let gamePrompt = runTurnZeroPlayerTwo()
    res.render('turn-zero-player2.ejs', {"gamePrompt": gamePrompt})
})

app.post('/turn-zero/player2', (req, res) => {
    //console.log(req.body) will log body object and the pair { command: Squirtle }
    console.log(req.body.command)
    let gamePrompt = turnZeroActiveSlotPlayerTwo(req.body.command)
    res.render('turn-zero-player2.ejs', {"gamePrompt": gamePrompt})
})

app.get('/turn-zero/complete', (req, res) => {
    res.render('turn-zero-complete.ejs')
})

app.get('/pre-turn-commands', (req, res) => {
    let gamePrompt = getTurnCommands()
    res.render('pre-turn-commands.ejs', {"gamePrompt": gamePrompt})
})

app.post('/pre-turn-commands', (req, res) => {
    console.log(req.body.command)
    if(req.body.command == 'play turn'){
        let gamePrompt = getDrawPhase(req.body.command)
        res.render('draw-phase.ejs', {"gamePrompt": gamePrompt})
    }
    //res.render('draw-phase.ejs', {"gamePrompt": gamePrompt})
})

// app.get('/draw-phase', (req, res) => {
//     let gamePrompt = getDrawPhase()
//     res.render('draw-phase.ejs', {"gamePrompt": gamePrompt} )
// })

app.get('/turn-loop-commands', (req, res) => {
    let gamePrompt = getTurnLoopCommands()
    res.render('turn-loop-commands', {"gamePrompt": gamePrompt} )
})

app.post('/turn-loop-commands', (req, res) => {
    if((req.body.command == 'attack')){
        let gamePrompt = getAttackStringPrompt()
        res.render('attacker-options.ejs', {"gamePrompt": gamePrompt} )
    }
})

app.get('/attack-results', (req, res) => {
    let gamePrompt = getTurnLoopCommands()
    res.render('attack-results', {"gamePrompt": gamePrompt} )
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
