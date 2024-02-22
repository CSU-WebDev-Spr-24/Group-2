import React, {useState} from 'react'
import {useDrag} from 'react-dnd'
import { ItemTypes } from './ItemTypes.js';
import  Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pokemon from 'pokemontcgsdk';
pokemon.configure({apiKey: '0d524a9e-011f-4f8e-a972-ad3a71503346'})
const style = {
  borderRadius: '10px',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
  cursor: 'move',
  float: 'left',
  height: '161px',
}


export const Card = function Card(props) {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.POKEMON,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        console.log("You successfully dragged and dropped!!!")
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1

  const handleClick = () => {
    alert("I can call an API endpoint here to perform an action!")
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div ref={drag} style={{...style, opacity }} data-testid={`box`}>
        <img src={props.url} height={161} style={{borderRadius: `inherit`}} onClick={handleShow}></img>

        <Modal show={show} onHide={handleClose} className='cardModal'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <Row>
                
                <Col>

                  <div className='d-grid gap-5'>
                        <Button variant="secondary" size="lg" onClick={handleClick}>
                        Move 1
                      </Button>
                      <Button variant="primary" size="lg" onClick={handleClick}>
                        Move 2
                      </Button></div>
                      
                
                
                </Col>
                <Col className='col-9'>
                <img src={props.url} className='h-75 d-inline'></img>
                </Col>
              </Row>
              
                      
            </Container>
            
              
            
            
          </Modal.Body>
      </Modal>
    </div>
    
  )
}