import { CardSlot } from "./CardSlot";
import React, { useEffect, useState } from "react";
import {Card} from './Card'
const style = {
    height: '12.4rem',
    width: 'auto',
    minHeight: '12.4rem',
    minWidth: '640px',
    margin: '1rem',
    backgroundColor: 'rgb(11 100 200 / 100%)',
    borderRadius: '15px',
    justifyItems: 'space-between',
    color: 'white'
}


export const Bench = ({cards}) => {
    const[Bench, setBench] = useState([])

    useEffect(() => {
        setBench(cards);
    }, [cards]);
    
    return(
        <React.Fragment>
            
            <div style={style} className="Bench">
                {Bench.map(pokemon => <Card  key={pokemon.id} name = {pokemon.name} url={pokemon.images.large} flippedOver = {pokemon.flippedOver} supertype= {pokemon.supertype} location={"bench"}/>)}
            </div>
        </React.Fragment>
    )
}