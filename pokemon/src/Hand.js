import React, {useState} from "react";
import { useDrop } from "react-dnd";
import { Card } from "./Card";
import axios from "axios"
import { paths } from "./const.js"

var testCards = [
    { id: 1, name: 'Alakazam', url: 'https://images.pokemontcg.io/base1/1_hires.png', flippedOver: false},
    { id: 2, name: 'Articuno', url: 'https://images.pokemontcg.io/base1/2_hires.png', flippedOver: false},
    { id: 3, name: 'Charizard', url: 'https://images.pokemontcg.io/base1/3_hires.png', flippedOver: false},
    { id: 4, name: 'Dark Blastoise', url: 'https://images.pokemontcg.io/base1/4_hires.png', flippedOver: false},
    { id: 5, name: 'Dark Dragonite', url: 'https://images.pokemontcg.io/base1/5_hires.png', flippedOver: false}
]

let foo = "bar"

let playerHand = axios.get(paths.root + '/turn-zero/player1')
        .then(function (response) {
        // handle success
            console.log(response);
            playerHand = response.data
            return playerHand
        })
        .catch(function (error) {
        // handle error
            console.log(error);
        })
        .finally(function () {
        // always executed
        });

export const Hand = () => {
    const[hand, setHand] = useState([])

    //Changes need to be made before this works... big one is changing back end
    //so that active slot choices are made at the beginning of each turn loop
    //NOT in turn zero
    // let playerHand = axios.get(paths.root + '/turn-zero/player1')
    //     .then(function (response) {
    //     // handle success
    //         console.log(response);
    //         playerHand = response.data
    //         return playerHand
    //     })
    //     .catch(function (error) {
    //     // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //     // always executed
    //     });

    //response.data gives an array of card objects [Card, Card, Card]
    //to access card attribute, looks like this
    //Card.images.small

    return(
        <React.Fragment>

            <div className="hand" onLoad={() => {
                setHand(playerHand)
            }}>
                {playerHand.map(pokemon => <Card  key={pokemon.id} name = {pokemon.name} url={pokemon.images.small} flippedOver = {pokemon.flippedOver}/>)}
            </div>
        </React.Fragment>
    )
}

