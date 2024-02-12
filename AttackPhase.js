const readline = require('readline-sync')

module.exports = function attackPhase(currentGame){
    var gameEndingAttack = false
    if (currentGame.turnsElapsed % 2 == 0){
        var attacker = currentGame.player1
        var defender = currentGame.player2
    }
    else{
        var attacker = currentGame.player2
        var defender = currentGame.player1
    }
    attackerActive = attacker.playerField.active
    defenderActive = defender.playerField.active
    var attackerPoke = attackerActive[0]
    //multidimensional array
    //[[name, cost[], damage, text], [name, cost[], damage, text]]
    //actually.. attacks [{name: bubble, cost: 2, damage: 20}, {name:...}]
    console.log(`${attackerActive[0].name} has attacks...`)
    attackerAttackOptions = attackerActive[0].attacks
    //this is how you access an attack name...
    //attackeractive[0] is the card, .attacks[0] is the attack object, .name/damage/etc access the attribute
    //console.log(`attackerActive[0].attacks[0].name = ${attackerActive[0].attacks[0].name}`)
    attackerEnergy = attackerActive[1]
    var defenderPoke = defenderActive[0]
    var attackChoice = getAttackChoice(attackerAttackOptions)
    for (let i = 0; i < attackerAttackOptions.length; i++){
        if(attackChoice == attackerAttackOptions[i].name){
            var knockOut = calculateDamage(attackerAttackOptions[i], defenderPoke)
            if (knockOut){
                //call force switch function
                newActiveCard = forceSwap(defender)
                if(newActiveCard == false){
                    gameEndingAttack = true
                    return gameEndingAttack
                }
                if (currentGame.turnsElapsed % 2 == 0){
                    currentGame.player2.playerField.setActive([newActiveCard, 0])
                    //console.log(`new active card: ${newActiveCard.name}`)
                    //var realCardArr = currentGame.player2.playerField.getActive()
                    //console.log(`real new card: ${realCardArr[0].name}`)
                }
                else{
                    currentGame.player1.playerField.setActive([newActiveCard, 0])

                }

            }
        }
    }

    function getAttackChoice(attackerAttackOptions){
        var attackStringArr = []
        for (let i = 0; i < attackerAttackOptions.length; i++){
            console.log(`Attack: ${attackerAttackOptions[i].name} | Damage: ${attackerAttackOptions[i].damage}\n`)
            attackStringArr.push(attackerAttackOptions[i].name)
        }
        var command = readline.question('What attack do you want to choose?\n')
        if (attackStringArr.includes(command)){
            return command
        }
        else{
            console.log(`That attack missed!!!`);
        }
    }

    function calculateDamage(attack, defenderPoke){
        //attack attack.name does attack.damage damage!!!
        //defenderPoke.name now has caluclatedHp!
        var calculatedHp = defenderPoke.hp - attack.damage
        defenderPoke.setCardHp(calculatedHp)
        console.log(`${attack.name} does ${attack.damage} damage!`)
        console.log(`${defenderPoke.name} now has ${calculatedHp} HP`)
        if (calculatedHp <= '0'){
            console.log('knockout!!!!')
            var knockOut = true;
            return knockOut
        }
        else {
            console.log('no knockout!!!!')
            var knockOut = false
            return knockOut;
        }
    }

    function forceSwap(defender){
        console.log(`${defender.playerID}'s active Pokemon has been knocked out!!!`)
        console.log(`Here is Player ${defender.playerID}'s bench...`)
        var benchArr = []
        if(defender.playerField.bench.length == 0){
            return false
        }
        for(eachSlot of defender.playerField.bench){
            console.log(`${eachSlot[0].name}`)
            benchArr.push(eachSlot[0].name)
        }
        var activePokeChosen = false;
        while(activePokeChosen ==false){
            activeChoice = readline.question(`Please choose a different Pokemon\n`)
            if (handArr.includes(activeChoice)){
                indexSlot = 0;
                for(eachSlot of defender.playerField.bench){
                    indexSlot = indexSlot + 1
                    if(activeChoice == eachSlot[0].name){
                        //this will set the card to undefined when tried to accessed out of this module
                        //defender.playerField.setActive(eachCard)
                        console.log(`${eachSlot[0].name} has been chosen as the active Pokemon`)
                        defender.playerField.bench.splice(indexSlot, 1)
                        activePokeChosen = true;
                        return eachSlot[0]
                    }
                }
            }
            else{
                console.log('Invalid choice for active slot!!!')
            }
        }
    }

}
