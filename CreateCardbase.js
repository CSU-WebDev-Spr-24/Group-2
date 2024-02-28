var pokemon = require('pokemontcgsdk');
var fs = require('fs');
const { json } = require('stream/consumers');
var testDict = new Object();

pokemon.configure({apiKey: 'c3d4b99e-95ef-4abc-8ed9-8ea192164fbf'})


//bulbasaur id for testing - base1-44
//charmander id for testing - base1-46
//squirtle id for testing - base1-63
//pidgey id for testing - base1-57
//energy id for testing:
//96/102 	Double Colorless Energy 	Colorless
//98/102 	Fire Energy
//99/102 	Grass Energy
//102/102   Water Energy
//potion id for testing base1-94

const testSetPopulate={
    startPopulate() {
        jsonFormat.start()
        var testDict = {
        bulbaID : "base1-44",
        charID : "base1-46",
        squirID : "base1-63",
        pidgeyID : "base1-57",
        potionID : "base1-94",
        waterEn : "base1-102",
        fireEN : "base1-98",
        grassEn : "base1-99",
        colorlessEN : "base1-96"
        }
        for (var key in testDict){
            var cardID = testDict[key]
            console.log("NEW API CALL".concat(cardID))
            apiCall.pokeapi(cardID)
        }
    }
}

const baseSetPopulate= {
    startPopulate() {
        jsonFormat.start();
        //base set has 102 cards, count starts from 1
        //set to < 5 for testing and readability
        for (let i = 1; i < 103; i++) {
            var setID = 'base1-';
            var cardID =setID.concat(i.toString());
            apiCall.pokeapi(cardID);
        }
    }
}

const apiCall = {
    pokeapi(cardID) {
        pokemon.card.find(cardID)
        .then(card => {
            saveToFile.jayson(card);
        })
    }
}

const saveToFile = {
    jayson(card) {
        var json = JSON.stringify(card, null, 2);
        addCommaJson = json.concat(",");
        fs.appendFile('cardbase.json', addCommaJson, 'utf8', (err) => {
            if (err)
                console.log(err);
            else {
            }
        });
    }
}

const jsonFormat = {
    start() {
        fs.appendFile('cardbase.json', '[', 'utf8', (err) => {
            if (err)
                console.log(err);
            else {
            }
        })
    },
    //CANT GET THIS TO WORK RIGHT -----
    //NO MATTER WHERE IT IS PLACED, [] OCCURS AT THE BEGINNING OF THE FILE BEFORE THE API CALLS OCCUR
    //MANUAL WORK AROUND - AFTER SCRIPT IS RAN, GO INTO FILE AND DELETE LAST COMMA, PLACE CLOSING BRACKET
    stop(){
        fs.appendFile('cardbase.json', ']', 'utf8', (err) => {
            if (err)
                console.log(err);
            else {
            }
        })
    }
}

//let start = baseSetPopulate.startPopulate();
let start = testSetPopulate.startPopulate();
