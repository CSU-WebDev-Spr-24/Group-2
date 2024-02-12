const readline = require('readline-sync')

module.exports = function placeEnergytoSlot(activePlayer, cardChosen){
    var goodChoice = false
    while (goodChoice == false){
        var whereToPlace = readline.question(`Where would you like to place your Energy? Active or Bench?\n`)
        if (whereToPlace == "Bench"){
            benchArr = activePlayer.playerField.getBench()
            if(benchArr <= 0){
                console.log('Your bench is empty!')
                return
            }
            else{
                benchSlot = readline.question(`Which bench slot do you want to place your energy? 1-5\n`)
                upperBound = benchArr.length
                lowerBound = 1
                if(benchSlot >= lowerBound && benchSlot <= upperBound){
                    if(benchSlot == 1){
                        chosenBenchSlot = benchArr[0]
                        energySlot = chosenBenchSlot[1]
                        energySlot.push(cardChosen)
                        console.log(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)
                        goodChoice = true
                    }
                    else if(benchSlot == 2){
                        chosenBenchSlot = benchArr[1]
                        energySlot = chosenBenchSlot[1]
                        energySlot.push(cardChosen)
                        console.log(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)
                        goodChoice = true
                    }
                    else if(benchSlot == 3){
                        chosenBenchSlot = benchArr[2]
                        energySlot = chosenBenchSlot[1]
                        energySlot.push(cardChosen)
                        console.log(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)
                        goodChoice = true

                    }
                    else if(benchSlot == 4){
                        chosenBenchSlot = benchArr[3]
                        energySlot = chosenBenchSlot[1]
                        energySlot.push(cardChosen)
                        console.log(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)
                        goodChoice = true
                    }
                    else if(benchSlot == 5){
                        chosenBenchSlot = benchArr[4]
                        energySlot = chosenBenchSlot[1]
                        energySlot.push(cardChosen)
                        console.log(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)
                        goodChoice = true
                    }
                }
                else{
                    console.log("Cannot place energy in a slot that does not exist!")
                }
            }


        }
        else if (whereToPlace == "Active"){
            activeSlot = activePlayer.playerField.getActive()
            energySlot = activeSlot[1]
            console.log(`${energySlot}`)
            energySlot.push(cardChosen)
            console.log(`Energy successfully slotted to ${activeSlot[0].name}`)
            goodChoice = true
        }
        else{
            console.log("Invalid choice!!")
        }
        }
}
