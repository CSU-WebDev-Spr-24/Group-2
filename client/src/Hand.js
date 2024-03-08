import React, {Component, useEffect, useState} from "react";
import { Card } from "./Card";
import axios from 'axios'
import { paths } from './const.js'

let cards = []

export class Hand extends Component {
    // const[hand, setHand] = useState([])

    // useEffect(() => {
    //     setHand(cards);
    // }, [cards]);

    async componentDidMount(){
        let cards = axios.get(paths.root + '/turn-zero/player1')
        .then(function (response) {
        // handle success
            console.log(response);
            cards = response.data
            return cards
        })
        .catch(function (error) {
        // handle error
            console.log(error);
        })
        .finally(function () {
        // always executed
        });
    }

    render(){
    //cards.map used to be hand.map
    return(
        <React.Fragment>

            <div className="hand">
                {cards.map(pokemon => <Card  key={pokemon.id} name = {pokemon.name} url={pokemon.images.large} flippedOver = {pokemon.flippedOver} supertype= {pokemon.supertype} location={pokemon.location}/>)}
            </div>
        </React.Fragment>
    )
}
}

