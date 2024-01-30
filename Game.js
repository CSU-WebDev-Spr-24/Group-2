module.exports = class Game {
    constructor(player1, player2, turnsElapsed, isGameOver){
        this.player1 = player1
        this.player2 = player2
        this.turnsElapsed = turnsElapsed
        this.isGameOver = isGameOver
    }

    getPlayer1(){
        return this.player1
    }

    getPlayer2(){
        return this.player2
    }

    getTurnsElapsed(){
        return this.turnsElapsed
    }

    getIsGameOver(){
        return this.isGameOver
    }

    setPlayer1(player){
        this.player1 = player
    }

    setPlayer2(player){
        this.player2 = player
    }

    setTurnsElapsed(turnsElapsed){
        this.turnsElapsed = turnsElapsed
    }

    setIsGameOver(isGameOver){
        this.isGameOver = isGameOver
    }

    incrementTurnsElapsed(){
        this.turnsElapsed = this.turnsElapsed + 1
    }
}
