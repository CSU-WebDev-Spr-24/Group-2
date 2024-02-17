const readline = require('readline-sync')

module.exports = function turnZero(player1, player2) {
    returnString = ""
    goodDraw = false;
    while (goodDraw == false){
        returnString = initialDrawPhase(player1);
    }
    return returnString
    goodDraw = false;
    while (goodDraw == false){
        initialDrawPhase(player1);
    }
    initializeActiveSlot(player1);
    var toContinue = readline.question("Player 1 initial draw complete, it is now Player 2's turn\n");
    goodDraw = false;
    while (goodDraw == false){
        initialDrawPhase(player2)
    }
    initializeActiveSlot(player2);
}

function initialDrawPhase(player){
    drawString = ""
    drawString = drawString.concact(`\nInitial draw phase for ${player.playerID}...`)
    //console.log(`\nInitial draw phase for ${player.playerID}...`)
    drawString = drawString.concat(initDrawPhaseRandomizer(player))
    drawString = drawString.concact(`You added this to your hand: ${drawString}!`)
    //console.log(`You added this to your hand: ${drawString}!`);
    drawString = drawString.concact(`deck size is: ${currPlayerDeck.length}`)
    //console.log(`deck size is: ${currPlayerDeck.length}`)
    drawString = drawString.concact(`This is your hand: ${drawString}`)
    //console.log(`This is your hand: ${drawString}`)
    //console.log('\n')
    return drawString
}

function initDrawPhaseRandomizer(player){
    currPlayerDeck = player.playerField.deck.cardList
    var drawString = ''
    for (let i = 0; i < 5; i++){
        randomNum = Math.floor(Math.random() * (currPlayerDeck.length -1))
        randCardFromDeck = currPlayerDeck[randomNum]
        player.playerField.appendHand(currPlayerDeck[randomNum])
        currPlayerDeck.splice(randomNum, 1)
        drawString = drawString.concat(randCardFromDeck.name)
        if (i < 4){
            drawString = drawString.concat(', ');
        }
    }
    //for (let i = 0; i < 5; i++){
    for(eachCard of player.playerField.hand){
        if (eachCard.supertype == 'Pokémon'){
            //console.log(`${drawString}`)
            goodDraw = true;
            return drawString;
        }
        //this is not working
    else{
        currPlayerDeck.push((player.playerField.getHand()))
        //console.log("Recalling random function")
    }
    }
}

function initializeActiveSlot(player){
    console.log(`Player ${player.playerID} please choose a basic pokemon for the active slot...`)
    var handString = '';
    for (let i = 0; i < player.playerField.hand.length; i ++){
    handString = handString.concat(player.playerField.hand[i].name)
    if (i < player.playerField.hand.length -1){
        handString = handString.concat(', ');
    }
    }
    console.log(`${handString}`);
    activeSlotBool = false
    while(activeSlotBool == false){
        // GETS USER INPUT
        chosenPokemonString = readline.question();
        pokemonHandNames = []
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
            console.log(`Active pokemon selected ${activePoke.name}\n`)
            activeSlotBool = true
        }
        else{
            console.log("invalid choice!");
        }
    }
}

