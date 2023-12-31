const ArticlesData = [
    {
        title: 'Wedding rings: trends 2021',
        data: 'September 21, 2021',
        img: './articles/ring.jpg',
        imgRetina: './articles/ring@2x.jpg',
        imgWebp:'',
    },
    {
        title: 'The main jewelry trends of the year',
        data: 'September 25, 2021',
        img: './articles/neckle.jpg',
        imgRetina: './articles/neckle@2x.jpg',
        imgWebp:'',
    },
    {
        title: 'Pearls: 7 little-known facts about the iconic jewelry',
        data: 'September 21, 2021',
        img: './articles/pearl.jpg',
        imgRetina:  './articles/pearl@2x.jpg',
        imgWebp:'',
    },
    {
        title: 'How to distinguish gold from fake: 10 practical tips',
        data: 'September 21, 2021',
        img: './articles/gold.jpg',
        imgRetina: './articles/gold@2x.jpg',
        imgWebp:'',
    }
]


function Articles () { 
    return (
        <div className="container">
            <section className="articles section">
                <div className="articles__header">
                    <h2 className="articles-header__title">Articles</h2>
                    <p className="articles-header__more">Read all</p>
                </div>

                <div className="articles__plate">
                    {
                        ArticlesData.map((item) => {
                            return (
                                <div className="articles-plate__tile">
                                    <img src={`${item.img}`} alt="" className="articles-tile__img" />
                                    <p className="articles-tile__date">{item.date}</p>
                                    <p className="articles-tile__title">{item.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
}

export default Articles ;