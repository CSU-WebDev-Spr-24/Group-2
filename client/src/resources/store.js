import { create } from "zustand";
import axios from "axios";
import { paths } from "../const";

export const useStore = create((set) => ({
    player1: { hand: [], bench: [], active: [], prize: [], discard: [], deck: [] },
    player2: { hand: [], bench: [], active: [], prize: [], discard: [], deck: [] },
    start: async () => {
        try {
            axios.get(paths.root + '/turn-zero/player1')
            .then(function (response) {
            // handle success
                console.log("Here's the start function.")
                console.log(response)
                console.log(response.data)
                set((state) => ({...state, player1: {...state.player1, hand: response.data}}))
            })
            .catch(function (error) {
            // handle error
                console.log(error);
            })
            axios.get(paths.root + '/turn-zero/player2')
            .then(function (response) {
            // handle success
                console.log(response.data)
                set((state) => ({...state, player2: {...state.player2, hand: response.data}}))
            })
            .catch(function (error) {
            // handle error
                console.log(error);
            })
        } catch (error) {
            throw new Error(error.message)
        }
    },

    moveToBench: async (cardName, location, slot) => {
        try {
            axios.get(paths.root + '/place-card', {cardName, location, slot})
            .then(function (response) {
                console.log(response)
                
            })
        } catch (error) {
            
        }


    }


}));