class PlayerTurn {
    constructor(playerID, turnPhase, isOver) {
        this.playerID = playerID
        // THERE ARE 4 PHASES OF A TURN IN POKETCG
        // DRAW, MAIN, ATTACK, END
        this.turnPhase = turnPhase
        // ISOVER IS BOOLEAN
        this.isOver = isOver
    }

    getPlayerID(){
        return this.playerID
    }

    getTurnPhase(){
        return this.turnPhase
    }

    getIsOver(){
        return this.isOver
    }

    setPlayerID(playerID){
        this.playerID = playerID
    }

    setTurnPhase(turnPhase){
        this.turnPhase = turnPhase
    }

    setIsOver(isOver){
        this.isOver = isOver
    }
}

export default PlayerTurn
