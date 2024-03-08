import express from 'express'
var app = express();
const port = 3000
//const initializeGame = require('./GameEngine')
import  bodyParser from 'body-parser'
import { getDrawPhase, getTurnCommands, initializeGame, getTurnLoopCommands,
    getAttackStringPrompt, getAttackResultsPrompt, getForceSwapPrompt, skipPlayerTurn,
    getPlayerHand, sendPlaceCardtoSlot, performForceSwap } from './GameEngine.js'
import { runTurnZeroPlayerOne, runTurnZeroPlayerTwo } from './GameEngine.js'
import { turnZeroActiveSlotPlayerOne, turnZeroActiveSlotPlayerTwo } from './GameEngine.js'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({}))

app.use('/static', express.static('public'))
app.set('view engine', 'ejs')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/introduction', (req, res) => {
    let gamePrompt = initializeGame()
    //res.render('introduction.ejs', {"gamePrompt": gamePrompt})
    res.send({})
})

app.get('/turn-zero/player1', (req, res) => {
    // let gamePrompt = runTurnZeroPlayerOne()
    // res.render('turn-zero-player1.ejs', {"gamePrompt": gamePrompt})
    let playerHandArr = runTurnZeroPlayerOne()
    res.send(playerHandArr)

})

app.post('/turn-zero/player1', (req, res) => {
    //console.log(req.body) will log body object and the pair { command: Squirtle }
    console.log(req.body.command)
    let gamePrompt = turnZeroActiveSlotPlayerOne(req.body.command)
    res.render('turn-zero-player1.ejs', {"gamePrompt": gamePrompt})
})

app.get('/turn-zero/player2', (req, res) => {
    let playerHandArr = runTurnZeroPlayerTwo()
    res.send(playerHandArr)
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
    else if(req.body.command == 'skip'){
        skipPlayerTurn()
        let gamePrompt = getTurnCommands()
        res.render('pre-turn-commands.ejs', {"gamePrompt": gamePrompt})
    }
    else if(req.body.command == 'quit'){
        //set up quit game functionality
    }
})

app.get('/turn-loop-commands', (req, res) => {
    let gamePrompt = getTurnLoopCommands()
    res.render('turn-loop-commands', {"gamePrompt": gamePrompt} )
})

app.post('/turn-loop-commands', (req, res) => {
    if((req.body.command == 'attack')){
        let gamePrompt = getAttackStringPrompt()
        res.render('attacker-options.ejs', {"gamePrompt": gamePrompt} )
    }
    if((req.body.command == 'play card')){
        let gamePrompt = getPlayerHand()
        res.render('place-card.ejs', {"gamePrompt": gamePrompt} )
    }
})

app.post('/attacker-options', (req, res) => {
    let promptArr = getAttackResultsPrompt(req.body.command)
    let gamePrompt = promptArr[0]
    let knockoutBool = promptArr[1]
    if (knockoutBool == false){
        res.render('attack-results.ejs', {"gamePrompt": gamePrompt} )
    }
    else{
        let gamePrompt = getForceSwapPrompt()
        res.render('force-swap.ejs', {"gamePrompt": gamePrompt})
    }
})

app.post('/force-swap', (req, res) => {
    let gamePrompt = performForceSwap(req.body.command)
    res.render('force-swap-results', {"gamePrompt": gamePrompt})
})

app.get('/turn-loop-complete', (req, res) => {
    res.render('turn-loop-complete')
})

app.post('/place-card', (req, res) => {
    console.log(req.body.cardName, req.body.location, req.body.benchSlot)
    let gamePrompt = sendPlaceCardtoSlot(req.body.cardName, req.body.location, req.body.benchSlot)
    res.render('place-card.ejs', {"gamePrompt": gamePrompt})
})


app.listen(port, () => {
    console.log(`Pokemon TCG app listening on port ${port}`)
})
