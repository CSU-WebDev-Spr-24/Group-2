import { CardSlot } from "./CardSlot";
import React from "react";
const style = {
    height: '12.4rem',
    width: 'auto',
    margin: '1rem',
    backgroundColor: 'rgb(11 100 200 / 100%)',
    borderRadius: '15px',
    justifyItems: 'space-between',
    color: 'white'
}
const Bench = () => {
    return (
    <div style={{...style}} className="row position-relative">
        <div className="col"><CardSlot /></div>
        <div className="col"><CardSlot /></div>
        <div className="col"><CardSlot /></div>
        <div className="col"><CardSlot /></div>
        <div className="col"><CardSlot /></div>

        <div className="position-absolute top-100 start-100 title translate-middle-y">BENCH</div>
    </div>
    )
}

export default Bench;