const readline = require('readline-sync')
const itemEffects = require('./ItemEffects')
const placeEnergytoSlot = require('./PlaceEnergytoSlot')

module.exports = function placeCardtoSlot(currentGame){
    if (currentGame.turnsElapsed % 2 == 0){
        var activePlayer = currentGame.player1
    }
    else{
        var activePlayer = currentGame.player2
    }
    printHand(activePlayer)
    cardChosen = getCardChoice(activePlayer)
    cardType = checkCardChosen(cardChosen)
    if (cardType == "Pokémon"){
        //call either active or bench
        goodChoice = false;
        while (goodChoice == false){
            whereToPlace = readline.question(`Where would you like to place your Pokemon? Active or Bench?\n`)
            if (whereToPlace == "Bench"){
                placeCardtoBench(cardChosen, activePlayer)
                goodChoice = true
            }
            else if (whereToPlace == "Active"){
                placeCardtoActive(cardChosen, activePlayer)
                goodChoice = true
            }
            else{
                console.log(`${whereToPlace}`)
                console.log("Invalid choice - please choose Active or Bench!!")
            }
        }
    }
    else if (cardType == "Energy"){
        //console.log("Energy type check cleared")
        placeEnergytoSlot(activePlayer, cardChosen)
    }
    else if (cardType == "Trainer"){
        itemEffects(currentGame, activePlayer)
    }
    }

    function getCardChoice(activePlayer){
        var cardChoice = false
        while(cardChoice == false){
            handArr = []
            for(eachCard of activePlayer.playerField.hand){
                console.log(`${eachCard.name}`)
                handArr.push(eachCard.name)
            }
            cardToPlace = readline.question(`\nWhat card would you like to play?\n`)
            if(handArr.includes(cardToPlace)){
                cardChoice = true;
                console.log(`${cardToPlace} has been chosen`)
            }
            else{
                console.log(`That card is not in your hand!`)
            }
            for(eachCard of activePlayer.playerField.hand){
                if (cardToPlace == eachCard.name){
                    return eachCard
                }
            }
        }
    }

    function checkCardChosen(cardChosen){
        return cardChosen.supertype
    }

    function placeCardtoBench(cardChosen, activePlayer){
        //check to see if bench is full
        benchArr = activePlayer.playerField.getBench()
        sizeBenchArr = benchArr.length
        if (benchArr < 5){
            benchArr.push([cardChosen, []])
            console.log(`${cardChosen.name} has been placed on your bench`)
        }
        else{
            console.log("Sorry your bench is full!")
        }
    }

    function placeCardtoActive(cardChosen, activePlayer){
        //swap active with cardChosen
        //check to see if bench is full
        benchArr = activePlayer.playerField.getBench()
        sizeBenchArr = benchArr.length
        if (benchArr < 5){
            activeSlot = activePlayer.playerField.getActive()
            buffCard = activeSlot[0]
            activeSlot[0] = cardChosen
            benchArr.push(buffCard)
            console.log(`Added ${cardChosen.name} to the active slot`)
            console.log(`${buffCard.name} has been placed on the bench`)
        }
        else{
            console.log("Sorry your bench is full!")
        }

    }

    function placeEnergyCard(cardChosen){
        //ask what poke to attatch to
        //add to slot arr
    }



    function printHand(activePlayer){
        console.log(`This is your hand...`);
        var handString = '';
        for (let i = 0; i < activePlayer.playerField.hand.length; i ++){
        handString = handString.concat(activePlayer.playerField.hand[i].name)
        if (i < activePlayer.playerField.hand.length -1){
            handString = handString.concat(', ');
        }
        }
        console.log(`${handString}`)
        console.log('\n')
        return handString
    }

