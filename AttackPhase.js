const readline = require('readline-sync')

module.exports = function attackPhase(currentGame){
    console.log("Attacker module active")
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
            calculateDamage(attackerAttackOptions[i], defenderPoke)
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
            console.log(`That was a bad choice`)
            console.log(`Attack phase over`)
        }
    }

    function calculateDamage(attack, defenderPoke){
        //attack attack.name does attack.damage damage!!!
        //defenderPoke.name now has caluclatedHp!
        var calculatedHp = defenderPoke.hp - attack.damage
        defenderPoke.setCardHp(calculatedHp)
        console.log(`${attack.name} does ${attack.damage} damage!`)
        console.log(`${defenderPoke.name} now has ${calculatedHp} HP`)
    }

}
