import {memo} from 'react';
import { Card } from './Card'
import  Bench from './Bench';
import Active from './Active';
import { Hand } from './Hand';
import { Button }  from './Button';

export const Container = memo(function Container() {
    return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col'>
                    <Button textValue="Hello"/>
                    </div>
                <div className='col'>
                    <div style={{overflow: 'hidden', transform: 'scaleY(-1)'}} className="position-relative ">
                        <Card url = "https://images.pokemontcg.io/base6/14_hires.png" />
                        <Card url = "https://images.pokemontcg.io/base6/15_hires.png" />
                        <Card url = "https://images.pokemontcg.io/base6/16_hires.png" />
                    </div>
                </div>
                <div className='col'></div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div id='opponent-prize'></div>
                </div>
                <div className='col-6'>
                    <div id='opponent'>
                        <Bench />
                    </div>
                </div>
                <div className='col'>
                    
                    <div id='opponent-prize'></div>
                </div>
                
            </div>
            <div className='row'>
                <div className='col'>

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