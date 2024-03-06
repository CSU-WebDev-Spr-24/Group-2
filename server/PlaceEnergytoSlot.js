
export function placeEnergytoSlot(activePlayer, cardChosen, location, benchSlot){
    let returnString = ''
    if(location == 'Bench'){
        let benchArr = activePlayer.playerField.getBench()
        if(benchArr <= 0){
            returnString = returnString.concat('Your bench is empty!')
            return
        }
        else{
            if(benchSlot == 1){
                let chosenBenchSlot = benchArr[0]
                let energySlot = chosenBenchSlot[1]
                energySlot.push(cardChosen)
                returnString = returnString.concat(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)
            }
            else if(benchSlot == 2){
                chosenBenchSlot = benchArr[1]
                energySlot = chosenBenchSlot[1]
                energySlot.push(cardChosen)
                returnString = returnString.concat(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)
            }
            else if(benchSlot == 3){
                chosenBenchSlot = benchArr[2]
                energySlot = chosenBenchSlot[1]
                energySlot.push(cardChosen)
                returnString = returnString.concat(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)

            }
            else if(benchSlot == 4){
                chosenBenchSlot = benchArr[3]
                energySlot = chosenBenchSlot[1]
                energySlot.push(cardChosen)
                returnString = returnString.concat(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)
            }
            else if(benchSlot == 5){
                chosenBenchSlot = benchArr[4]
                energySlot = chosenBenchSlot[1]
                energySlot.push(cardChosen)
                returnString = returnString.concat(`Energy successfully slotted to ${chosenBenchSlot[0].name}`)
            }
        }
    }
    else if (location == "Active"){
        let activeSlot = activePlayer.playerField.getActive()
        let energySlot = activeSlot[1]
        energySlot.push(cardChosen)
        returnString = returnString.concat(`Energy successfully slotted to ${activeSlot[0].name}`)
    }
    return returnString
}
