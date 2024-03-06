import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { initializeGame } from "../backend/GameEngine";
function Start () {
    return (
        <Container><Row>
        <Col className="col-3"></Col>
        <Col>
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo-500x313.png"/>
        </Col>
        <Col className="col-3"></Col>
    </Row>
        <Row>
            <Col className="col-3"></Col>
            <Col className="align-self-center">
                <Button className="start-button">
                    <a href="/main" className="start-button-text">Start</a>
                </Button>
            </Col>
            <Col className="col-3"></Col>
        </Row>
        </Container>
        );
        
}
export default Start;