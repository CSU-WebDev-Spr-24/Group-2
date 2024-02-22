import { CardSlot } from "./CardSlot";
const style = {
    height: '12.4rem',
    width: 'fit-content',
    backgroundColor: 'rgb(0 0 0 / 0%)',
    borderRadius: '15px',
    color: 'white',
    
}
const Active = () => {
    return (
    <div style={{...style}} className="position-relative">
        <div className="position-absolute top-100 start-100 title translate-middle-y">ACTIVE</div>
    <CardSlot />
    </div>
    )
}

export default Active;