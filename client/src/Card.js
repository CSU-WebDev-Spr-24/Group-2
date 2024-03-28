import React, {useState} from 'react';
import  Modal  from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pokemon from 'pokemontcgsdk';
import { CardButtons } from './CardButtons';
import {useStore} from './resources/store';
pokemon.configure({apiKey: '0d524a9e-011f-4f8e-a972-ad3a71503346'})
const style = {
  borderRadius: '10px',
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
  cursor: 'pointer',
  float: 'left',
  height: '161px'
}


export const Card = function Card(props) {

  const handleClick = () => {
    alert("I can call an API endpoint here to perform an action!")
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div style={{...style}} data-testid={`box`}>
        <img 
          src={ props.flippedOver == true ? "https://vignette.wikia.nocookie.net/cardgame/images/a/ac/Pokemon-card-back.jpg/revision/latest/scale-to-width-down/342?cb=20131228023927" :props.url} 
          height={161} 
          style={{borderRadius: 'inherit'}} 
          onClick={handleShow}></img>

        <Modal show={show} onHide={handleClose} className='cardModal'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Container fluid>
              <Row>
                <Col>
                  <div className='d-grid gap-5'>
                      <CardButtons supertype={props.supertype} location={props.location} name={props.name} playerId={props.playerId} index={props.index}/>
                    </div>
                </Col>
                <Col className='col-9'>
                <img src={props.url} className='h-75 d-inline modalImg'></img>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
      </Modal>
    </div>

  )
}
