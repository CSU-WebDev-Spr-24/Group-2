
export function turnZeroPlayerOne(player1) {
    //let returnString = ""
    //returnString = returnString.concat(initialDrawPhase(player1))
    //return returnString
    let playerHandArr = initDrawPhaseRandomizer(player1)
    return playerHandArr
}

export function turnZeroPlayerTwo(player2){
    // let returnString = ""
    // returnString = returnString.concat(initialDrawPhase(player2))
    // return returnString
    let playerHandArr = initDrawPhaseRandomizer(player2)
    return playerHandArr
}

function initialDrawPhase(player){
    let currPlayerDeck = player.playerField.deck.cardList
    let drawString = ""
    let playerHandArr = []
    // drawString = drawString.concat(`\nInitial draw phase for ${player.playerID}... `)
    // drawString = drawString.concat(initDrawPhaseRandomizer(player))
    // drawString = drawString.concat(`...Deck size is: ${currPlayerDeck.length}... `)
    // drawString = drawString.concat(`Player ${player.playerID} please choose a basic pokemon for the active slot... `)
    //return drawString
    playerHandArr = initDrawPhaseRandomizer(player)
    return playerHandArr
}

function initDrawPhaseRandomizer(player){
    let currPlayerDeck = player.playerField.deck.cardList
    let drawString = ''
    for (let i = 0; i < 5; i++){
        let randomNum = Math.floor(Math.random() * (currPlayerDeck.length -1))
        let randCardFromDeck = currPlayerDeck[randomNum]
        player.playerField.appendHand(currPlayerDeck[randomNum])
        currPlayerDeck.splice(randomNum, 1)
        drawString = drawString.concat(randCardFromDeck.name)
        if (i < 4){
            drawString = drawString.concat(', ');
        }
    }
    for(let eachCard of player.playerField.hand){
        if (eachCard.supertype == 'Pokémon'){
            //return drawString;
            return player.playerField.getHand()
        }
    else{
        currPlayerDeck.push((player.playerField.getHand()))
    }
    }
}

export function initializeActiveSlot(player, command){
    let returnString = ''
    let chosenPokemonString = command
    let activeSlotBool = false
    while(activeSlotBool == false){
        let pokemonHandNames = []
        var activePoke;
        for (let i =0; i < player.playerField.hand.length; i++){
            pokemonHandNames.push(player.playerField.hand[i].name)
            if (chosenPokemonString == player.playerField.hand[i].name){
                activePoke = player.playerField.hand[i]
            }
        }
        //this eventually needs to be changed to handle evolutions
        if (pokemonHandNames.includes(chosenPokemonString) && activePoke.supertype == 'Pokémon'){
            player.playerField.setActive([activePoke, []])
            returnString = returnString.concat(`Active pokemon selected ${activePoke.name}\n`)
            activeSlotBool = true
        }
        else{
            //console.log("invalid choice!");
        }
    }
    return returnString
}

