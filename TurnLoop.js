const readline = require('readline-sync')
const Player = require('./Player')

module.exports = function mainLoop(player){
        console.log(`\nIt is ${player.playerID}'s turn...`)
        console.log('Draw Phase')
        //append random card from deck into hand
        currPlayerDeck = player.deck.cardList
        randomNum = Math.floor(Math.random() * (currPlayerDeck.length -1))
        console.log(`deck size is: ${currPlayerDeck.length}`)
        randCardFromDeck = currPlayerDeck[randomNum]
        player.playerField.appendHand(currPlayerDeck[randomNum])
        currPlayerDeck.splice(randomNum, 1)
        randCardName = randCardFromDeck.name
        console.log(`You added this to your hand: ${randCardName}!`);
        console.log(`deck size is: ${currPlayerDeck.length}`)
        //this is bad! only returns ONE card
        console.log(`This is your hand: ${player.playerField.hand[0].name}`)
        console.log('\n')
        while(player.turn.isOver == false){
            console.log(`It is ${player.playerID}'s turn...`)
            var command = readline.question('What would you like to do?\n')
                console.log(`You entered: ${command}!`);
                if (command == 'view'){
                    console.log(player.playerField)
                }
                else if (command == 'play card'){
                    console.log('you wanted to play a card huh')
                }
                else if (command == 'attack'){
                    console.log('You attack!!\n')
                    console.log(`${player.playerID}'s turn is over...\n`)
                    player.turn.setIsOver(true)
                }
                else{
                    console.log('Invalid command!')
                }
        }
}

