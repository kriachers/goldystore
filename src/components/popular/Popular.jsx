import {Link} from "react-router-dom";
import React from "react";
import {AppContext} from "../../App"

const categoryData = [
    {
        title: 'Кольца',
        img: './category/ring.png',
        category: 'ring',
    },
    {
        title: 'Серьги',
        img: './category/earring.png',
        category: 'earring',
    },
    {
        title: 'Помолвочные кольца',
        img: './category/engagement_ring.png',
        category: 'engagement'
    },
    {
        title: 'Браслеты',
        img: './category/bracelet.png',
        category: 'bracelet',
    },
    {
        title: 'Колье и подвески',
        img: './category/necklace.png',
        category: 'necklace',
    },
    {
        title: 'Часы',
        img: './category/watch.png',
        category: 'watch',
    },


]

function Popular() {
    const {selectedCategory, setSelectedCategory} = React.useContext(AppContext)

    return ( 
        <div className="container">
        <section className="popular section container-bottom">
            <h2 className="popular__title">Популярные категории</h2>
            <div className="popular__plate">
                {
                    categoryData.map((item) => {
                        return (  
                        
                            <Link 
                            className="category-plate__tile" 
                            to="/category"
                            onClick={() => setSelectedCategory(item.category)}>
                                <div>
                                <p className="category-tile__title">{item.title}</p>
                                </div>
                            </Link>
                          

                        )
                    })
                }
            </div>
        </section>
        </div>
    );
}

export default Popular;