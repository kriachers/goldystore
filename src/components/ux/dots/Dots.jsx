function Dots(props) {
    return (
        <div className={`dots ${props.class ? props.class : ''}`} >
            <img src="./sale/blank-round.svg" alt="" className="dots__point" />
            <img src="./sale/blank-round.svg" alt="" className="dots__point" />
            <img src="./sale/blank-round.svg" alt="" className="dots__point" />
    </div>
    );
}

export default Dots;