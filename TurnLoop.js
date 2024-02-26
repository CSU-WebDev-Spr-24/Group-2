import readline from 'readline-sync'
import Player from './Player.js'
import { attackPhase } from './AttackPhase.js'
import { placeCardtoSlot } from './PlaceCardtoSlot.js'

export function drawPhase(currentGame){
    let returnString = ""
    if (currentGame.turnsElapsed % 2 == 0){
        var player = currentGame.player1
    }
    else{
        var player = currentGame.player2
    }
    //console.log(`\nIt is ${player.playerID}'s turn...`)
    returnString = returnString.concat(`It is ${player.playerID}'s turn...`)
    returnString = returnString.concat(drawCard(player))
    //return returnString
    returnString = returnString.concat('This is your hand... ')
    returnString = returnString.concat(printHand(player));
    return returnString
}

export function turnLoopCommands(){
    let returnString = ''
    returnString = returnString.concat('Available commands are "play card" and "attack"')
    return returnString
}

export function turnLoop(currentGame){
    let returnString = ""
        if (currentGame.turnsElapsed % 2 == 0){
            var player = currentGame.player1
        }
        else{
            var player = currentGame.player2
        }
        //console.log(`\nIt is ${player.playerID}'s turn...`)
        returnString = returnString.concat(`It is ${player.playerID}'s turn...`)
        returnString = returnString.concat(drawCard(player))
        //return returnString
        returnString = returnString.concat('This is your hand... ')
        returnString = returnString.concat(printHand(player));
        return returnString
        player.turn.setIsOver(false)
        while(player.turn.isOver == false){
            console.log(`It is ${player.playerID}'s turn...`)
            console.log("Available commands are 'attack', 'view', 'play card', and 'quit'")
            var command = readline.question('What would you like to do?\n')
                console.log(`You entered: ${command}!`);
                if (command == 'view'){
                    console.log(player.playerField)
                }
                else if (command == 'play card'){
                    placeCardtoSlot(currentGame)
                }
                else if (command == 'attack'){
                    console.log('You attack!!\n')
                    gameEndingAttack = attackPhase(currentGame)
                    console.log(`${player.playerID}'s turn is over...\n`)
                    player.turn.setIsOver(true)
                    if(gameEndingAttack == true){
                        currentGame.setIsGameOver(true)
                    }
                }
                else{
                    console.log('Invalid turn loop command!')
                }
        }
        currentGame.incrementTurnsElapsed()
    }

    function drawCard(player){
        //console.log('Draw Phase')
        let returnString = ""
        returnString = returnString.concat('Draw Phase...')
        //append random card from deck into hand
        let currPlayerDeck = player.playerField.deck.cardList
        let randomNum = Math.floor(Math.random() * (currPlayerDeck.length -1))
        //console.log(`deck size is: ${currPlayerDeck.length}`)
        let randCardFromDeck = currPlayerDeck[randomNum]
        player.playerField.appendHand(currPlayerDeck[randomNum])
        currPlayerDeck.splice(randomNum, 1)
        let randCardName = randCardFromDeck.name
        //console.log(`You added this to your hand: ${randCardName}!`);
        returnString = returnString.concat(`You added this to your hand: ${randCardName}!`)
        //console.log(`deck size is: ${currPlayerDeck.length}`)
        returnString = returnString.concat(`...Deck size is ${currPlayerDeck.length}`)
        return returnString
    }

    export function printHand(player){
        var returnString = '';
        for (let i = 0; i < player.playerField.hand.length; i ++){
        returnString = returnString.concat(player.playerField.hand[i].name)
        if (i < player.playerField.hand.length -1){
            returnString = returnString.concat(', ');
        }
        }
        return returnString
    }


