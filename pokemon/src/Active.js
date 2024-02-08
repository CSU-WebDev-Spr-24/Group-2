import { CardSlot } from "./CardSlot";
const style = {
    height: '12.4rem',
    width: 'fit-content',
    backgroundColor: '#FF8600',
    borderRadius: '15px',
    color: 'white',
    
}
const Active = () => {
    return (
    <div style={{...style}} className="position-relative">
        <div className="position-absolute top-100 start-100 translate-middle">ACTIVE</div>
    <CardSlot />
    </div>
    )
}

export default Active;