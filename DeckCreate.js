var fs = require('fs');
const { json } = require('stream/consumers');
// CARD ARRAY IS JSON FORMAT - [ {OBJECT}, {OBEJCT}]
var cardArray = require('./cardbase.json')
const card = require('./Card')
var playerDeck = []

module.exports = class Deck {
    constructor(){
        this.cardList = createDeck.createCard()
    }
}


const createDeck = {
    createCard() {
        for (eachCard in cardArray){
            gameCard = new card(cardArray[eachCard].id, cardArray[eachCard].name, cardArray[eachCard].supertype,
                cardArray[eachCard].hp, cardArray[eachCard].attacks, cardArray[eachCard].weaknesses,
                cardArray[eachCard].retreatCost, cardArray[eachCard].images)
            playerDeck.push(gameCard)
            //push 3 more copies while using demo deck
            playerDeck.push(gameCard)
            playerDeck.push(gameCard)
            playerDeck.push(gameCard)

        }
        // PRINT STATEMENT FOR DEBUG
        //console.log(playerDeck[1]);
        return playerDeck;

    }
}



//let start = createDeck.createCard()
