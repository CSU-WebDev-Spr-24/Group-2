import React, {Component, useEffect, useState} from "react";
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
    console.log(cards)
    return(
        <React.Fragment>
            <div className="Hand" style={style}>
                    {cards && cards.map(pokemon =>
                        <Card  key={pokemon.id}
                        name = {pokemon.name}
                        url={pokemon.images?.large}
                        flippedOver = {pokemon.flippedOver}
                        supertype= {pokemon.supertype}
                        location={"hand"} />
                    )}
            </div>
        </React.Fragment>
    )

}
