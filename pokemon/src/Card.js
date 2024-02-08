import React from 'react'
import {useDrag} from 'react-dnd'
import { ItemTypes } from './ItemTypes.js';
const style = {
  borderRadius: '10px',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
  cursor: 'move',
  float: 'left',
  height: '161px',
}

export const Card = function Card({url}) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.POKEMON,
    pokemon: "Gengar",
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert("You successfully dragged and dropped!!!")
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{...style, opacity }} data-testid={`box`}>
        <img src={url} height={161} style={{borderRadius: 'inherit'}}></img>
    </div>
  )
}