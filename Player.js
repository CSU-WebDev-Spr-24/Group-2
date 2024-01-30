module.exports = class Player {
    constructor(playerID, deck, playerField, turn) {
        this.playerID = playerID
        this.deck = deck
        this.playerField = playerField
        this.turn = turn
    }

    getDeck(){
        return this.deck
    }

    getPlayerID(){
        return this.playerID
    }

    getTurn(){
        return this.turn
    }

    setDeck(deck){
        this.deck = deck
    }

    setPlayerID(playerID){
        this.playerID = playerID
    }

    setTurn(turn){
        this.turn = turn
    }
}
