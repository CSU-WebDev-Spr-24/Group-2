import { CardSlot } from "./CardSlot";
import React, { useEffect, useState } from "react";
import { Card } from './Card'

const style = {
    height: '12.4rem',
    width: 'auto',
    margin: '1rem',
    backgroundColor: 'rgb(11 100 200 / 100%)',
    borderRadius: '15px',
    justifyItems: 'space-between',
    minHeight: '12.4rem',
    minWidth:'640px',
    color: 'white'
}


export const Bench = ({cards}) => {
    const[bench, setBench] = useState([])

    useEffect(() => {
        setBench(cards);
    }, [cards]);

    return(
        <React.Fragment>

            <div style={style} className="Bench">
                {bench.map(pokemon => <Card  key={pokemon.id} name = {pokemon.name} url={pokemon.url} flippedOver = {pokemon.flippedOver} supertype= {pokemon.supertype} location={pokemon.location}/>)}
            </div>
        </React.Fragment>
    )
}
