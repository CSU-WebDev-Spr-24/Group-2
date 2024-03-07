import {memo, useState} from 'react';
import { Card } from './Card'
import  Bench from './Bench';
import Active from './Active';
import { Hand } from './Hand';
import { Button }  from './Button';

function PlayerField({props}) {
    const [playerID, setPlayerID] = useState('');
    
    const [cardsList, setCardsList] = useState([]);

    function name(params) {
        
    }
}