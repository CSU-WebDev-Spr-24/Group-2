import React, {useEffect, useState} from "react";
import { Card } from "./Card";
const style = {
    minHeight: '12.4rem',
    maxHeight: '12.4rem',
    minWidth: '640px',
    margin: '1rem',
    justifyItems: 'space-between',
    color: 'white',
    overflow: 'scroll'
}


export const Hand = ({cards}) => {
    const[hand, setHand] = useState([])

    useEffect(() => {
        console.log(cards)
        setHand(cards);
    }, [cards]);

    return(
        <React.Fragment>

            <div className="hand" style={style}>
                {console.log(cards)}
                {console.log(hand)}
                {cards.length > 0 ? 
                    cards.map(pokemon=> <Card  key={pokemon.id} name = {pokemon.name} url={pokemon.images.large} flippedOver = {pokemon.flippedOver} supertype= {pokemon.supertype} location={"hand"} />)
                    : null}
            </div>
        </React.Fragment>
    )
}

