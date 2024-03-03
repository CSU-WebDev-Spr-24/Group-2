import React, {useState} from "react";
import { useDrop } from "react-dnd";
import { Card } from "./Card";

var cards = [
    { id: 1, name: 'Alakazam', url: 'https://images.pokemontcg.io/base1/1_hires.png', flippedOver: false},
    { id: 2, name: 'Articuno', url: 'https://images.pokemontcg.io/base1/2_hires.png', flippedOver: false},
    { id: 3, name: 'Charizard', url: 'https://images.pokemontcg.io/base1/3_hires.png', flippedOver: false},
    { id: 4, name: 'Dark Blastoise', url: 'https://images.pokemontcg.io/base1/4_hires.png', flippedOver: false},
    { id: 5, name: 'Dark Dragonite', url: 'https://images.pokemontcg.io/base1/5_hires.png', flippedOver: false}   
]

export const Hand = () => {
    const[hand, setHand] = useState([])
    setHand([
        ...hand,
        {id: nextId++, card: card}
    ])
    
    
    return(
        <React.Fragment>
            
            <div className="hand" onLoad={() => {
                setHand(cards)
            }}>
                {hand.map(pokemon => <Card  key={pokemon.id} name = {pokemon.name} url={pokemon.url} flippedOver = {pokemon.flippedOver}/>)}
            </div>
        </React.Fragment>
    )
}

