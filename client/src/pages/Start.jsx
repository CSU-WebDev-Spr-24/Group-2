import React, { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import axios from 'axios'
import { paths } from '../const.js'


function Start (props) {
    useEffect(()=> {
        console.log(props)
        axios.get(paths.root + '/introduction')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
    });
    },[])
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
