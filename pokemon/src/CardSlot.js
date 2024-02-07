import React from 'react'

export default function 
CardSlot({black, children}) {
    const fill = 'black' ? 'black' : 'blue'
    const stroke = 'black' ? 'blue' : 'black'
  return ( 
    <div 
        style={{
            backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
        }}
    >
        {children}
    </div>
  )
}

