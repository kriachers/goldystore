import Sticker from '../Sticker'

function Price(props) { 
    return (

            <div className={`price ${props.class ? props.class : ''}`}>
                        <div className={`price__plate`}>
                            <p className="price-plate__actual-price">{props.actualPrice} ₽</p>
                            <p className="price-plate__prevous-price">{props.currentPrice} ₽</p>
                        </div>
                        {
                            props.actualPrice !== props.currentPrice ?
                            <Sticker class={'sale__sticker'} content={`-${Math.round(100 - (props.actualPrice/(props.currentPrice/100)))} %`}></Sticker>
                            : ''
                        }
                        
            </div>

    );  
}

export default Price;