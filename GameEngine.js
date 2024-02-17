const player = require('./Player')
const game = require('./Game')
const deck = require('./DeckCreate')
const PlayerField = require('./PlayerField')
const turn = require('./PlayerTurn')
const readline = require('readline-sync')
const turnLoop = require('./TurnLoop')
const turnZero = require('./TurnZero')

//const runGame = {
module.exports = function initializeGame(){
    //add uuid functionality, right now just uses base values
    var player1 = new player(1234, new PlayerField(), new turn(1234, 'draw', false))
    var player2 = new player(5678, new PlayerField(), new turn(5678, 'draw', true))
    currentGame = new game(player1, player2, 0, false)
    initPlayerFields(player1)
    initPlayerFields(player2)
    console.log("Welcome to PokeTCG Prototype")
    console.log("This is a text based version of the game")
    console.log("\n")
    console.log("The initial draw phase will now begin")
    turnZero(currentGame.player1, currentGame.player2);
    gameLoop(currentGame)
}

function initPlayerFields(player){
    player.playerField.setPlayerID(player.getPlayerID())
    //bench example: [[squirtle, energy, energy], [charmander, energy], [pidgey]]
    player.playerField.setBench([])
    player.playerField.setHand([])
    player.playerField.setDeck(new deck())
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

//let start = initializeGame()
