import readline from 'readline-sync'
import { useItemEffect } from './ItemEffects.js'
import { placeEnergytoSlot } from './PlaceEnergytoSlot.js'

export function placeCardtoSlot(activePlayer, command){
    let returnString = ''
    let cardChosen = getCardChoice(activePlayer, command)
    let cardType = checkCardChosen(cardChosen)
    if (cardType == "Pokémon"){
        //placePokemontoSlot(activePlayer, cardChosen)
        returnString = returnString.concat("You chose a Pokemon")
    }
    else if (cardType == "Energy"){
        //console.log("Energy type check cleared")
        //placeEnergytoSlot(activePlayer, cardChosen)
        returnString = returnString.concat("You chose a Energy Card")
    }
    else if (cardType == "Trainer"){
        //useItemEffect(currentGame, activePlayer)
        returnString = returnString.concat("You chose a Trainer Card")
    }
    return returnString
    }

    function getCardChoice(activePlayer, command){
        for(let eachCard of activePlayer.playerField.hand){
            if (command == eachCard.name){
                return eachCard
            }
        }
    }

    function checkCardChosen(cardChosen){
        return cardChosen.supertype
    }

    function placePokemontoSlot(activePlayer, cardChosen){
        whereToPlace = readline.question(`Where would you like to place your Pokemon? Active or Bench?\n`)
        if (whereToPlace == "Bench"){
            placePokeCardtoBench(cardChosen, activePlayer)
        }
        else if (whereToPlace == "Active"){
            placePokeCardtoActive(cardChosen, activePlayer)
        }
    }

    function placePokeCardtoBench(cardChosen, activePlayer){
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

    function placePokeCardtoActive(cardChosen, activePlayer){
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

