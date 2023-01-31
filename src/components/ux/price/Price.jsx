import Sticker from '../Sticker'

function Price(props) {
    return (

            <div className={`price ${props.class ? props.class : ''}`}>
                        <div className={`price__plate`}>
                            <p className="price-plate__actual-price">{props.actualPrice} ₽</p>
                            <p className="price-plate__prevous-price">{props.prevousPrice} ₽</p>
                        </div>
                        <Sticker class={'sale__sticker'} content={props.saleAmount}></Sticker>
            </div>

    );  
}

export default Price;