import React from 'react'
import {useDrag} from 'react-dnd'
import { ItemTypes } from './Constants';

function Card(props) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.POKEMON,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div>
        <img src="https://images.pokemontcg.io/base6/11_hires.png" width={100} height={100}></img>
    </div>
  )
}
export default Card;