import {memo} from 'react';
import { Card } from './Card';
import  {Bench} from './Bench';
import Active from './Active';
import { Hand } from './Hand';
import { Button }  from './MyButton';
// const cards = [
//     { id: 1, name: 'Alakazam', url: 'https://images.pokemontcg.io/base1/1_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Hand'},
//     { id: 2, name: 'Blastoise', url: 'https://images.pokemontcg.io/base1/2_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Hand'},
//     { id: 3, name: 'Chansey', url: 'https://images.pokemontcg.io/base1/3_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Hand'},
//     { id: 4, name: 'Charizard', url: 'https://images.pokemontcg.io/base1/4_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Bench'},
//     { id: 5, name: 'Clefairy', url: 'https://images.pokemontcg.io/base1/5_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Hand'}
// ];
const opponentcards = [
    { id: 1, name: 'Magneton', url: 'https://images.pokemontcg.io/base1/6_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Hand'},
    { id: 2, name: 'Machamp', url: 'https://images.pokemontcg.io/base1/7_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Hand'},
    { id: 3, name: 'Hitmonchan', url: 'https://images.pokemontcg.io/base1/8_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Hand'},
    { id: 4, name: 'Gyarados', url: 'https://images.pokemontcg.io/base1/9_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Hand'},
    { id: 5, name: 'Mewtwo', url: 'https://images.pokemontcg.io/base1/10_hires.png', flippedOver: false, supertype: 'Pokemon', location: 'Hand'}
];

let cards = axios.get(paths.root + '/turn-zero/player1')
        .then(function (response) {
        // handle success
            console.log(response);
            cards = response.data
            return cards
        })
        .catch(function (error) {
        // handle error
            console.log(error);
        })
        .finally(function () {
        // always executed
        });
//add api calls here
export const Container = memo(function Container() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    </div>
                <div className='col'>
                    <div className="opponent-hand">
                        <Hand cards={opponentcards}/>
                    </div>
                </div>
                <div className='col'></div>
            </div>
            <div className='row moveUp'>
                <div className='col'>
                    <div id='opponent-prize'></div>
                </div>
                <div className='col-6'>
                    <div className='opponent-bench'>
                        <Bench />
                    </div>
                </div>
                <div className='col'>

                    <div id='opponent-prize'></div>
                </div>

            </div>
            <div className='row actives'>
                <div className='col-4'>

                </div>
                <div className='col-3'>
                    <Active />
                </div>
                <div className='col-3'>
                    <Active />
                </div>
                <div className='col'>

                </div>

            </div>
            <div className='row'>
                <div className='col'>

                </div>
                <div className='col-6'>
                    <Bench />
                </div>
                <div className='col'>

                </div>

            </div>

            <div style={{overflow: 'hidden', clear:'both'}} className="position-absolute top-100 start-50 translate-middle">
                <Hand cards={cards}/>
            </div>
        </div>
    )
})
