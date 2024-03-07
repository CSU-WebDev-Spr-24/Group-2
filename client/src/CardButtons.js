//Display buttons for a card based on supertype and location
import React from "react";
import { MyButton } from "./MyButton";

export const CardButtons = ({supertype, location}) => {
    if(supertype === "Pokemon" && location === "Hand") {
        return (
            <div>
                <MyButton className="Button" textValue="Place on Bench" />
            </div>
        )
    }
    else if(supertype === "Pokemon" && location === "Bench") {
        return (
            <div>
                <MyButton textValue="Make Active" />
            </div>
        )
    }
    else if(supertype === "Trainer" && location === "Hand") {
        return (
            <div>
                <MyButton textValue="Play" />
            </div>
        )
    }
    else if(supertype === "Energy" && location === "Hand") {
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