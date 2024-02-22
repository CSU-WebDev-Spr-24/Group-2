import {memo} from 'react';
import { Card } from './Card'
import  Bench from './Bench';
import Active from './Active';
import { Hand } from './Hand';
import { Button }  from './Button';

export const Container = memo(function Container() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    </div>
                <div className='col'>
                    <div className=" opponent-hand">
                        <Card url = "https://images.pokemontcg.io/base6/14_hires.png" flippedOver = 'true'/>
                        <Card url = "https://images.pokemontcg.io/base6/15_hires.png" flippedOver = 'true'/>
                        <Card url = "https://images.pokemontcg.io/base6/16_hires.png" flippedOver = 'true'/>
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
                <Hand />
            </div>
        </div>
    )
})