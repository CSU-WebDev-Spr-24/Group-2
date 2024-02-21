//const fs = require('fs');
//import fs from 'fs'
//const { json } = require('stream/consumers');
// CARD ARRAY IS JSON FORMAT - [ {OBJECT}, {OBEJCT}]
//var cardArray = require('./cardbase.json')
import cardArray from './cardbase.json' with { type: "json" }
import Card from './Card.js'
var playerDeck = []

class Deck {
    constructor(){
        this.cardList = createDeck.createCard()
    }
}


const createDeck = {
    createCard() {
        for (let eachCard in cardArray){
            let gameCard = new Card(cardArray[eachCard].id, cardArray[eachCard].name, cardArray[eachCard].supertype,
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


export default Deck
//let start = createDeck.createCard()
