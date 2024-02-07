const player = require('./Player')
const game = require('./Game')
const deck = require('./DeckCreate')
const PlayerField = require('./PlayerField')
const turn = require('./PlayerTurn')
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
const readline = require('readline-sync')
const turnLoop = require('./TurnLoop')

const runGame = {
    initialize(){
        //add uuid functionality, right now just uses base values
        var player1 = new player(1234, new deck(),
                        new PlayerField(), new turn(1234, 'draw', false))
        var player2 = new player(5678, new deck(),
                        new PlayerField(), new turn(5678, 'draw', true))
        currentGame = new game(player1, player2, 0, false)
        this.initPlayerFields(player1)
        this.initPlayerFields(player2)
        this.gameLoop(currentGame)
    },

    initPlayerFields(player){
        player.playerField.setPlayerID(player.getPlayerID())
        player.playerField.setBench([])
        player.playerField.setHand([])
        player.playerField.setDeck(player.getDeck())
        player.playerField.setDiscard([])
        player.playerField.setActive([])
    },

    gameLoop(currentGame){
        console.log("Welcome to PokeTCG Prototype")
        console.log("This is a text based version of the game")
        console.log("\n")
        //console.log(currentGame.player1.turn.isOver)
        while(currentGame.isGameOver != true){
            var command = readline.question('What would you like to do? ')
            if (command == 'play turn'){
                turnLoop(currentGame.player1)
            }
            if (command == 'quit'){
                    currentGame.incrementTurnsElapsed()
                    currentGame.setIsGameOver(true)
            }
        }
        console.log("This is just a proof of concept, so the game will now close")
    }
}


let start = runGame.initialize()
