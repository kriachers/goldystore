const PromotionsData = [
    {
        title: 'Discounts on all diamond jewelry',
        saleAmout: 50,
        img: './promotion/earring.png'
    },
    {
        title: 'Discounts on rings and bracelets',
        saleAmout: 40,
        img: './promotion/ring.png'
    },
    {
        title: 'Lower prices for wedding rings',
        saleAmout: 60,
        img: './promotion/engagement_ring.png'
    }
]



function Propmotions() {
    return (
        <div className="container">
        <section className="promotions section container-bottom">

            {
                PromotionsData.map((item, index) => {
                    return (
                        <div key={index} className="promotions__item">
                            <div className="promotions__inner">
                                <p className="promotions__title">{item.title}</p>
                                <p className="promotions__sale">
                                    <span className="text-center"></span>Up to <span className="promotions__sale--huge">{`-${item.saleAmout}%`}</span>
                                </p>
                            </div>
                        </div>
                    )
                })
            }

            
        </section>
        </div>
     );
}

export default Propmotions;