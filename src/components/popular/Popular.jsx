const categoryData = [
    {
        title: 'Кольца',
        img: './category/ring.png'
    },
    {
        title: 'Серьги',
        img: './category/earring.png'
    },
    {
        title: 'Помолвочные кольца',
        img: './category/engagement_ring.png'
    },
    {
        title: 'Браслеты',
        img: './category/bracelet.png'
    },
    {
        title: 'Колье и подвески',
        img: './category/necklace.png'
    },
    {
        title: 'Часы',
        img: './category/watch.png'
    },


]

function Popular() {
    return ( 
        <div className="container">
        <section className="popular section container-bottom">
            <h2 className="popular__title">Популярные категории</h2>
            <div className="popular__plate">
                {
                    categoryData.map((item) => {
                        return (  
                            <div className="category-plate__tile">
                                <p className="category-tile__title">{item.title}</p>
                               
                            </div>
                        )
                    })
                }
            </div>
        </section>
        </div>
    );
}

export default Popular;