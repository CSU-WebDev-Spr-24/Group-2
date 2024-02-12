const readline = require('readline-sync')
const Player = require('./Player')
const attackPhase = require('./AttackPhase')
const placeCardtoSlot = require('./PlaceCardtoSlot')

module.exports = function turnLoop(currentGame){
        if (currentGame.turnsElapsed % 2 == 0){
            var player = currentGame.player1
        }
        else{
            var player = currentGame.player2
        }
        console.log(`\nIt is ${player.playerID}'s turn...`)
        drawCard(player);
        printHand(player);
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
    function drawCard(player){
        console.log('Draw Phase')
        //append random card from deck into hand
        currPlayerDeck = player.playerField.deck.cardList
        randomNum = Math.floor(Math.random() * (currPlayerDeck.length -1))
        console.log(`deck size is: ${currPlayerDeck.length}`)
        randCardFromDeck = currPlayerDeck[randomNum]
        player.playerField.appendHand(currPlayerDeck[randomNum])
        currPlayerDeck.splice(randomNum, 1)
        randCardName = randCardFromDeck.name
        console.log(`You added this to your hand: ${randCardName}!`);
        console.log(`deck size is: ${currPlayerDeck.length}`)
    }

    function printHand(player){
        console.log(`This is your hand...`);
        var handString = '';
        for (let i = 0; i < player.playerField.hand.length; i ++){
        handString = handString.concat(player.playerField.hand[i].name)
        if (i < player.playerField.hand.length -1){
            handString = handString.concat(', ');
        }
        }
        console.log(`${handString}`)
        console.log('\n')
    }
}

