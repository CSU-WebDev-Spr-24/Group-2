import React, {useState} from 'react'
import {useDrop} from 'react-dnd'
import  Card  from './Card'
import { ItemTypes } from './ItemTypes'
const style = {
  height: '12rem',
  width: '8rem',
  margin: '0.2rem 0rem 0.2rem 0rem',
  color: 'white',
  padding: '0.1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  borderRadius: '15px',
  float: 'left'
}

export const CardSlot = (Card) => {
  const [{canDrop, isOver}, drop] = useDrop(() => ({
    accept: ItemTypes.POKEMON,
    drop: () => ({name: 'CardSlot'}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  let backgroundColor = '#0D00A4'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'blue'
  }
  return (
    <div ref={drop} style={{...style, backgroundColor }}  data-testid="cardslot">
      {isActive ? 'Release to drop!' : "Drag a card here"}
    </div>
  )
}