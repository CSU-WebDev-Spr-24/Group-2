import React from "react";
import { Button } from "react-bootstrap";

const style = {
    color: 'white',
    backgroundColor: '#3f51b5',
    padding: '5px 15px',
    border: '1px white'
}
export const MyButton = (props) => {
    const handleClick = () => {
        alert("I could call the API from here!")
    }
    return (
        <Button className="btn-primary btn" size="lg" variant="primary" onClick={handleClick} style={style}>
            {props.textValue}
        </Button>
    );
}