//Display buttons for a card based on supertype and location
import React from "react";
import { MyButton } from "./MyButton";

export const CardButtons = ({supertype, location}) => {
    console.log("got to CardButtons")
    if(supertype === "Pokémon" && location === "hand") {
        return (
            <div>
                <MyButton className="Button" textValue="Place on Bench" />
            </div>
        )
    }
    else if(supertype === "Pokémon" && location === "Bench") {
        return (
            <div>
                <MyButton textValue="Make Active" />
            </div>
        )
    }
    else if(supertype === "Trainer" && location === "hand") {
        return (
            <div>
                <MyButton textValue="Play" />
            </div>
        )
    }
    else if(supertype === "Energy" && location === "hand") {
        return (
            <div>
                <MyButton textValue="Attach" />
            </div>
        )
    }
    else {
        return null;
    }
}