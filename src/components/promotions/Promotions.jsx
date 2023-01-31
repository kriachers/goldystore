const PromotionsData = [
    {
        title: 'Скидки на все украшения с бриллиантами',
        saleAmout: 50,
        img: './promotion/earring.png'
    },
    {
        title: 'Скидки на кольца и браслеты',
        saleAmout: 40,
        img: './promotion/ring.png'
    },
    {
        title: 'снижение цен  на обручальные кольца',
        saleAmout: 60,
        img: './promotion/engagement_ring.png'
    }
]



function Propmotions() {
    return (
        <div className="container">
        <section className="promotions section container-bottom">

            {
                PromotionsData.map((item) => {
                    return (
                        <div className="promotions__item">
                            <div className="promotions__inner">
                                <p className="promotions__title">{item.title}</p>
                                <p className="promotions__sale">
                                    <span className="text-center"></span>До <span className="promotions__sale--huge">{`-${item.saleAmout}%`}</span>
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