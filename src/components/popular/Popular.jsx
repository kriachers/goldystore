import {Link} from "react-router-dom";
import React from "react";
import {AppContext} from "../../App"

const categoryData = [
    {
        title: 'Rings',
        img: './category/ring.png',
        category: 'fingerRing',
    },
    {
        title: 'Earrings',
        img: './category/earring.png',
        category: 'earring',
    },
    {
        title: 'Engagement Rings',
        img: './category/engagement_ring.png',
        category: 'engagement'
    },
    {
        title: 'Bracelets',
        img: './category/bracelet.png',
        category: 'bracelet',
    },
    {
        title: 'Necklaces and pendants',
        img: './category/necklace.png',
        category: 'necklace',
    },
    {
        title: 'Watch',
        img: './category/watch.png',
        category: 'watch',
    },


]

function Popular() {
    const {selectedCategory, setSelectedCategory} = React.useContext(AppContext)

    return ( 
        <div className="container">
        <section className="popular section container-bottom">
            <h2 className="popular__title">Popular categories</h2>
            <div className="popular__plate">
                {
                    categoryData.map((item) => {
                        return (  
                        
                            <Link to="/category"
                            key={item.category}
                            onClick={() => setSelectedCategory(item.category)}
                            className="category-plate__tile"> 
                                <div className="category-plate__inner-tile" >
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