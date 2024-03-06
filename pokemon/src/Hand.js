import React, {useEffect, useState} from "react";
import { Card } from "./Card";

export const Hand = ({cards}) => {
    const[hand, setHand] = useState([])

    useEffect(() => {
        setHand(cards);
    }, [cards]);
    
    return(
        <React.Fragment>
            
            <div className="hand">
                {hand.map(pokemon => <Card  key={pokemon.id} name = {pokemon.name} url={pokemon.url} flippedOver = {pokemon.flippedOver} supertype= {pokemon.supertype} location={pokemon.location}/>)}
            </div>
        </React.Fragment>
    )
}

