import React, {useState} from 'react'
import {useDrag} from 'react-dnd'
import { ItemTypes } from './ItemTypes.js';
import  Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div ref={drag} style={{...style, opacity }} data-testid={`box`}>
        <img src={url} height={161} style={{borderRadius: 'inherit'}} onClick={handleShow}></img>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={url} className='vh-100 '></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}