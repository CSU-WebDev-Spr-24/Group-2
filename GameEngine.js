// const player = require('./Player')
// const game = require('./Game')
// const deck = require('./DeckCreate')
// const PlayerField = require('./PlayerField')
// const turn = require('./PlayerTurn')
// const readline = require('readline-sync')
// const turnLoop = require('./TurnLoop')
// const turnZero = require('./TurnZero')

import readline from 'readline-sync'

import Player from './Player.js'
import Game from './Game.js'
import Deck from './DeckCreate.js'
import PlayerField from './PlayerField.js'
import Turn from './PlayerTurn.js'
//import readline from './readline-sync'
import { turnLoop, drawPhase, turnLoopCommands } from './TurnLoop.js'
import { turnZeroPlayerOne, turnZeroPlayerTwo } from './TurnZero.js'
import { initializeActiveSlot} from './TurnZero.js'
import { damagePhase, getAttackString } from './AttackPhase.js'

let currentGame = new Game(null, null, 0 , false)

// class GameEngine{
//     constructor(currentGame){
//     this.currentGame = currentGame
//     }
// }

//const runGame = {
export function initializeGame(){
    //add uuid functionality, right now just uses base values
    var player1 = new Player(1234, new PlayerField(), new Turn(1234, 'draw', false))
    var player2 = new Player(5678, new PlayerField(), new Turn(5678, 'draw', true))
    //var currentGame = new Game(player1, player2, 0, false)
    //let gameEngine = new GameEngine(currentGame)
    currentGame.setPlayer1(player1)
    currentGame.setPlayer2(player2)
    initPlayerFields(player1)
    initPlayerFields(player2)
    let returnString = introduction()
    //console.log(`return string from init game: ${returnString}`)
    return returnString
    // console.log("Welcome to PokeTCG Prototype")
    // console.log("This is a text based version of the game")
    // console.log("\n")
    // console.log("The initial draw phase will now begin")

    //comment these out while testing
    //turnZero(currentGame.player1, currentGame.player2);
    //gameLoop(currentGame)
}

//handlers for turnZero.js
export function runTurnZeroPlayerOne(){
    let returnString = ""
    let player1 = currentGame.player1
    returnString = returnString.concat(turnZeroPlayerOne(player1))
    return returnString
}
export function runTurnZeroPlayerTwo(){
    let returnString = ""
    let player2 = currentGame.player2
    returnString = returnString.concat(turnZeroPlayerTwo(player2))
    return returnString
}

export function turnZeroActiveSlotPlayerOne(command){
    let returnString = ""
    let player1 = currentGame.player1
    returnString = returnString.concat(initializeActiveSlot(player1, command))
    return returnString
}

export function turnZeroActiveSlotPlayerTwo(command){
    let returnString = ""
    let player2 = currentGame.player2
    returnString = returnString.concat(initializeActiveSlot(player2, command))
    return returnString
}

export function getTurnCommands(){
    let returnString = ''
    if (currentGame.turnsElapsed % 2 == 0){
        var player = currentGame.player1
    }
    else{
        var player = currentGame.player2
    }
    returnString = returnString.concat(`It about to be player ${player.playerID}'s turn...`)
    returnString = returnString.concat("Available Options are: play turn, skip, or quit")
    return returnString
}

export function getDrawPhase(){
    let returnString = ''
    returnString =  returnString.concat(drawPhase(currentGame))
    return returnString
}

export function getTurnLoopCommands(){
    let returnString = ''
    if (currentGame.turnsElapsed % 2 == 0){
        var player = currentGame.player1
    }
    else{
        var player = currentGame.player2
    }
    returnString = returnString.concat(`It is ${player.playerID}'s turn...`)
    return returnString.concat(turnLoopCommands())
}

export function turnLoopPlayerOne(command){
    let returnString = ''
    if (command == 'play turn'){
        returnString = returnString.concat(turnLoop(currentGame))
        return returnString
    }
    if (command == 'skip'){
        currentGame.incrementTurnsElapsed()
    }
    if (command == 'quit'){
            currentGame.incrementTurnsElapsed()
            currentGame.setIsGameOver(true)
    }
}

export function turnLoopPlayerTwo(command){
    if (command == 'play turn'){
        turnLoop(currentGame)
    }
    if (command == 'skip'){
        currentGame.incrementTurnsElapsed()
    }
    if (command == 'quit'){
            currentGame.incrementTurnsElapsed()
            currentGame.setIsGameOver(true)
    }
}

export function getAttackStringPrompt(){
    let returnString = ''
    returnString = returnString.concat(getAttackString(currentGame))
    return returnString
}

export function getAttackResultsPrompt(attackName){
    //game prompt at [0], knockout bool at [1]
    let returnArr = []
    let returnString = ''
    let knockout = false
    returnArr = damagePhase(attackName, currentGame)
    currentGame.incrementTurnsElapsed()
    return returnArr
}

function initPlayerFields(player){
    player.playerField.setPlayerID(player.getPlayerID())
    //bench example: [[squirtle, energy, energy], [charmander, energy], [pidgey]]
    player.playerField.setBench([])
    player.playerField.setHand([])
    player.playerField.setDeck(new Deck())
    player.playerField.setDiscard([])
    player.playerField.setActive([[]])
}

function gameLoop(currentGame){
    //console.log("Welcome to PokeTCG Prototype")
    //console.log("This is a text based version of the game")
    //console.log("\n")
    //console.log("The initial draw phase will now begin")
    //turnZero(currentGame.player1, currentGame.player2);
    //console.log(currentGame.player1.turn.isOver)
    while(currentGame.isGameOver != true){
        console.log("Available commands are 'play turn', 'skip', and 'quit'")
        var command = readline.question('What would you like to do?\n')
        if (command == 'play turn'){
            turnLoop(currentGame)
        }
        if (command == 'skip'){
            currentGame.incrementTurnsElapsed()
        }
        if (command == 'quit'){
                currentGame.incrementTurnsElapsed()
                currentGame.setIsGameOver(true)
        }
    }
    console.log("The Game is now over!!!")
    console.log("This is just a proof of concept, so the game will now close")
}



//practice refactoring
function introduction(){
    let returnString = ""
    returnString = returnString.concat("Welcome to PokeTCG Prototype...\n")
    returnString = returnString.concat("This is a text based version of the game...\n")
    returnString = returnString.concat("The initial draw phase will now begin...\n")
    returnString = returnString.concat("Press Continue to start...\n")
    //console.log(`return string from intro func ${returnString}`)
    return returnString
}

//let start = initializeGame()
