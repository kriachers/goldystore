const ArticlesData = [
    {
        title: 'Обручальные кольца: тренды 2021',
        data: '21 сентября 2021',
        img: './articles/ring.jpg',
        imgRetina: './articles/ring@2x.jpg',
        imgWebp:'',
    },
    {
        title: 'Главные ювелирные тренды года',
        data: '25 сентября 2021',
        img: './articles/neckle.jpg',
        imgRetina: './articles/neckle@2x.jpg',
        imgWebp:'',
    },
    {
        title: 'Жемчуг: 7 малоизвестных фактов о культовом украшении',
        data: '21 сентября 2021',
        img: './articles/pearl.jpg',
        imgRetina:  './articles/pearl@2x.jpg',
        imgWebp:'',
    },
    {
        title: 'Как отличить золото от подделки: 10 практических советов',
        data: '21 сентября 2021',
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
                    <h2 className="articles-header__title">Статьи</h2>
                    <p className="articles-header__more">Читать все</p>
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