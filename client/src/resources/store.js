import { create } from "zustand";
import axios from "axios";
import { paths } from "../const";

export const useStore = create((set) => ({
    /*Player object: hand, bench, active, prize, discard, deck*/
    player1: {
        hand: [],
        bench: [],
        active: [],
        prize: [],
        discard: [],
        deck: []
    },

    player2: {
        hand: [],
        bench: [],
        active: [],
        prize: [],
        discard: [],
        deck: []
    },

    start: async () => {
        try {
            console.log("Got to start")
            /* axios.get(paths.root + '/turn-zero/player1')
            .then(function (response) {
            // handle success
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
            }) */
            
        } catch (error) {
            throw new Error(error.message)
        }

    }
}));