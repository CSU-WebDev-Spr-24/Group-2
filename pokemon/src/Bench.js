import { CardSlot } from "./CardSlot";
const style = {
    height: '12.4rem',
    width: 'auto',
    margin: '1rem',
    backgroundColor: '#FF8600',
    borderRadius: '15px',
    overflow: 'scroll',
    justifyItems: 'space-between'
}
const Bench = () => {
    return (
    <div style={{...style}} className="row">
        <div className="col"><CardSlot /></div>
        <div className="col"><CardSlot /></div>
        <div className="col"><CardSlot /></div>
        <div className="col"><CardSlot /></div>
        <div className="col"><CardSlot /></div>
    </div>
    )
}

export default Bench;