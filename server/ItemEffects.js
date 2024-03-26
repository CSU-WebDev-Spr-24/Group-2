export function useItemEffect(currentGame, activePlayer){
    //currently, all item effects use potion effect for simplicity
    //console.log("\nPreparing to use potion")
    let activeSlot = activePlayer.playerField.getActive()
    let activePoke = activeSlot[0]
    let currentCardHp = activePoke.getCardHp()
    var healedHp = parseInt(currentCardHp) + 20
    activePoke.setCardHp(healedHp)
    //console.log(`Successfully healed hp`)
    //console.log(`${activePoke.name} now has ${healedHp}\n`)
    return healedHp
}

// module.export = useItemEffect
