class PlayerField {
    constructor (playerId, hand, bench, active, deck, discard) {
        this.playerId = playerId
        this.hand = hand
        this.bench = bench
        this.active = active
        this.deck = deck
        this.discard = discard
    }

    getPlayerID(){
        return this.playerId
    }

    getHand(){
        return this.hand
    }

    getBench(){
        return this.bench
    }

    getActive(){
        return this.active
    }

    getDiscard(){
        return this.discard
    }

    setPlayerID(playerID){
        this.playerId = playerID
    }

    setHand(hand){
        this.hand = hand
    }

    setDeck(deck){
        this.deck = deck
    }

    setBench(bench){
        this.bench = bench
    }

    setActive(active){
        this.active = active
    }

    setDiscard(discard){
        this.discard = discard
    }

    appendHand(card){
        this.hand.push(card)
    }

    appendDiscard(card){
        this.discard.push(card)
    }

    appendBench(card){
        this.bench.push(card)
    }
}

export default PlayerField
