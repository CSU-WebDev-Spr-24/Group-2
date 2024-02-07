module.exports = class Player {
    constructor(playerID, playerField, turn) {
        this.playerID = playerID
        this.playerField = playerField
        this.turn = turn
    }

    getPlayerID(){
        return this.playerID
    }

    getTurn(){
        return this.turn
    }

    setPlayerID(playerID){
        this.playerID = playerID
    }

    setTurn(turn){
        this.turn = turn
    }
}
