import Sticker from '../Sticker'

function Price({ actualPrice, currentPrice, priceClass  }) { 
    return (

            <div className={`price ${priceClass ? priceClass : ''}`}>
                        <div className={`price__plate`}>
                        {actualPrice === currentPrice ? (
                            <p className="price-plate__actual-price">{actualPrice} $</p>
                        ) : (
                            <>
                                <p className="price-plate__actual-price">{actualPrice} $</p>
                                <p className="price-plate__previous-price">{currentPrice} $</p>
                            </>
                        )}

                        </div>
                        {
                            actualPrice !== currentPrice ?
                            <Sticker class={'sale__sticker'} content={`-${Math.round(100 - (actualPrice/(currentPrice/100)))} %`}></Sticker>
                            : ''
                        }
                        
            </div>

    );  
}

export default Price;