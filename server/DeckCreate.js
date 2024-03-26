import cardArray from './cardbase.json' assert { type: 'json' }; //'with' was throwing errors here
import Card from './Card.js';
import mongoose from 'mongoose'
var playerDeck = []


//connect to mongoDB
// const dbURI = 'mongodb+srv://cox_james:xocsemaj@pokemon0.wlcuscp.mongodb.net/DeckList?retryWrites=true&w=majority&appName=Pokemon0'
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
//     .then((result) => console.log('connected to DB'))
//     .catch((err) => console.log(err))

class Deck {
    constructor(){
        this.cardList = createDeck.createCard()
    }
}

// const readFromDb = async () => {
//     try {

//     }
//     catch {
//         console.error(err)
//     }
// }


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
