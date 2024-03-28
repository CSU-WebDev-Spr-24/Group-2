//Display buttons for a card based on supertype and location
import React from "react";
import { MyButton } from "./MyButton";
import { useStore } from "./resources/store";

export const CardButtons = ({supertype, location, name, playerId, index}) => {
    const moveToBench = useStore((state) => state.moveToBench)
    //const placeOnBench = zustand.placeOnBench
    //const placeOnActive = zustand.placeOnActive
    if(supertype === "Pokémon" && location === "hand") {
        return (
            <div>
                {/* instead of just returning null, call the zustand function that corresponds to place on bnech */}
                <MyButton className="Button" textValue="Place on Bench" name={name} onClick={moveToBench(playerId, index)}/>
                <MyButton className="Button" textValue="Make Active" name={name}/>
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
    else if(supertype === "Pokémon" && location === "Active") {
        return (
            <div>
                <MyButton textValue="Attack" />
                <MyButton className="Button" textValue="Retreat" />
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
