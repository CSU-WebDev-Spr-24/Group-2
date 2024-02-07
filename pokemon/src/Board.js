import React from 'react';
import Card from './Card';
import CardSlot from './CardSlot';
import { render } from 'react-dom';



function renderCardslot(i, [cardX, cardY]) {
    const x = i % 8
    const y = Math.floor(i/8)
    const isCardHere = cardX ===x && cardY === y
    const black = (x+y) % 2 === 1
    const piece = isCardHere ? <Card /> : null

    return (
        <div key={i} style={{width: '12.5%', height: '12.5%'}}>
            <CardSlot black={black}>{piece}</CardSlot>
        </div>
    )
}
function Board({cardPosition}) {
    const slots = []
    for (let i = 0; i < 64; i++) {
        slots.push(renderCardslot(i, cardPosition))
    }

  return (
    <div
        style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }}
    >
        {slots}

    </div>
  )
}

export default Board({  });
