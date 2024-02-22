import React, {useState} from 'react'
import {useDrop} from 'react-dnd'
import  { Card }  from './Card'
import { ItemTypes } from './ItemTypes'
const style = {
  height: '12rem',
  width: '8rem',
  margin: '0.2rem 0rem 0.2rem 0rem',
  color: '#0072bb',
  padding: '5rem 0rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  borderRadius: '15px',
  float: 'left'
}

export const CardSlot = ({card, player}) => {
  const [{canDrop, isOver}, drop] = useDrop(() => ({
    accept: ItemTypes.POKEMON,
    drop: () => ({name: 'CardSlot'}),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))
  const isActive = canDrop && isOver
  let backgroundColor = 'rgb(256 230 34 / 90%)'
  if (isActive) {
    backgroundColor = 'rgb(6 230 34/ 95%)'
  } else if (canDrop) {
    backgroundColor = 'rgb(256 230 34 / 80%)'
  }
  return (
    <div ref={drop} style={{...style, backgroundColor }}  data-testid="cardslot">
      {isActive ? 'Release to drop!' : "Drag a card here"}
      {Card.url ? <Card  url = {Card.url}/> : ''}
    </div>
  )
}