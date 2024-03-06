import React, {useState} from 'react'
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
//add attribute - active or bench

export const CardSlot = ({card, player}) => {
  const [Card, setCard] = useState(card);

  let backgroundColor = 'rgb(256 230 34 / 90%)';
  return (
    <div style={{...style, backgroundColor }}  data-testid="cardslot">
    </div>
  )
}