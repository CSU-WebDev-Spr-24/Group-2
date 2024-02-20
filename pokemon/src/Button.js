import React from "react";

const style = {
    color: 'white',
    backgroundColor: '#3f51b5',
    padding: '5px 15px',
    border: '1px white'
}
export const Button = (props) => {
    const handleClick = () => {
        alert("I could call the API from here!")
    }
    return (
        <button className="btn-primary" onClick={handleClick} style={style}>
            {props.textValue}
            </button>
    );
}
