export function useItemEffect(currentGame, activePlayer){
    //currently, all item effects use potion effect for simplicity
    console.log("\nPreparing to use potion")
    activeSlot = activePlayer.playerField.getActive()
    activePoke = activeSlot[0]
    currentCardHp = activePoke.getCardHp()
    var healedHp = parseInt(currentCardHp) + 20
    activePoke.setCardHp(healedHp)
    console.log(`Successfully healed hp`)
    console.log(`${activePoke.name} now has ${healedHp}\n`)

}
