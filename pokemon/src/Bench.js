import { CardSlot } from "./CardSlot";
const style = {
    height: '12.4rem',
    width: 'auto',
    margin: '1rem',
    backgroundColor: '#FF8600',
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

        <div className="position-absolute top-100 start-100 translate-middle">BENCH</div>
    </div>
    )
}

export default Bench;