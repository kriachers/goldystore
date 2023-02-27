import Modal from "../ux/modal/Modal";
import React from "react";
import { useState } from "react";
import Skeleton from "./Skeleton";
import Item from "../item/Item";
import { AppContext } from "../../App";


const itemData = [
    {
        "id": 1,
        "title": "Стильное кольцо из белого золота c бриллиантами",
        "img": "./sale/items/ring-1.png",
        "imgRetina": "./sale/items/ring-1@2x.png",
        "category": "ring",
        "isSale": true,
        "actualPrice": 41000,
        "currentPrice": 65000
      }, 
      {
        "id": 2,
        "title": "Стильное кольцо из белого золота c бриллиантами",
        "img": "./sale/items/ring-2.png",
        "imgRetina": "./sale/items/ring-2@2x.png",
        "category": "ring",
        "isSale": false,
        "actualPrice": 56000,
        "currentPrice": 56000
      },
      {
        "id": 3,
        "title": "Стильное кольцо из белого золота c бриллиантами",
        "img": "./sale/items/ring-3.png",
        "imgRetina": "./sale/items/ring-3@2x.png",
        "category": "ring",
        "isSale": false,
        "actualPrice": 37500,
        "currentPrice": 37500
      },
    {
        "id": 4,
        "title": "Стильное кольцо из белого золота c бриллиантами",
        "img": "./sale/items/ring-4.png",
        "imgRetina": "./sale/items/ring-4@2x.png",
        "category": "ring",
        "isSale": false,
        "actualPrice": 39200,
       "currentPrice": 39200
    },
    {
        "id": 5,
        "title": "Серьги с кристаллами cваровски из красного золота 585 пробы",
        "img": "./sale/items/ring-4.png",
        "imgRetina": "./sale/items/ring-4@2x.png",
        "category": "earring",
        "isSale": false,
        "actualPrice": 20200,
        "currentPrice": 25200
    },
    {
        
            "id": 6,
            "title": "Мужские часы из золота и серебра НИКА Ego 1398.0.19.81B",
            "img": "./sale/items/watch-1.jpg",
            "imgRetina": "./sale/items/watch-1.jpg",
            "category": "watch",
            "isSale": false,
            "actualPrice": 71617,
            "currentPrice": 102310   
    },
    {
        "id": 7,
        "title": "Серебряные мужские часы SOKOLOV",
        "img": "./sale/items/watch-2.jpg",
        "imgRetina": "./sale/items/watch-2.jpg",
        "category": "watch",
        "isSale": false,
        "actualPrice": 49707,
        "currentPrice": 71778  

    },
    {
        "id": 8,
        "title": "Серебряные мужские часы НИКА",
        "img": "./sale/items/watch-3.jpg",
        "imgRetina": "./sale/items/watch-3.jpg",
        "category": "watch",
        "isSale": false,
        "actualPrice": 31500,
        "currentPrice": 45000  

    },
    {
        "id": 9,
        "title": "Серебряные мужские часы WATCH",
        "img": "./sale/items/watch-4.jpg",
        "imgRetina": "./sale/items/watch-4.jpg",
        "category": "watch",
        "isSale": false,
        "actualPrice": 67500,
        "currentPrice": 28000  
    },
    {
        "id": 10,
        "title": "Серебряные мужские часы WOW",
        "img": "./sale/items/watch-4.jpg",
        "imgRetina": "./sale/items/watch-4.jpg",
        "category": "watch",
        "isSale": false,
        "actualPrice": 50500,
        "currentPrice": 18000  
    },
    {
        "id": 11,
        "title": "Золотой пустотелый браслет Тройной ромб",
        "img": "./sale/items/bracelet-1.jpg",
        "imgRetina": "./sale/items/bracelet-1.jpg",
        "category": "bracelet",
        "isSale": false,
        "actualPrice": 7176,
        "currentPrice": 11900  
    },
    {
        "id": 12,
        "title": "Золотой жесткий браслет",
        "img": "./sale/items/bracelet-2.jpg",
        "imgRetina": "./sale/items/bracelet-2.jpg",
        "category": "bracelet",
        "isSale": false,
        "actualPrice": 25096,
        "currentPrice": 38000
    },
    {
        "id": 13,
        "title": "Красивый золотой браслет",
        "img": "./sale/items/bracelet-3.jpg",
        "imgRetina": "./sale/items/bracelet-3.jpg",
        "category": "bracelet",
        "isSale": false,
        "actualPrice": 15000,
        "currentPrice": 20000  
    },
    {
        "id": 14,
        "title": "Красивый браслет",
        "img": "./sale/items/bracelet-4.jpg",
        "imgRetina": "./sale/items/bracelet-4.jpg",
        "category": "bracelet",
        "isSale": false,
        "actualPrice": 15000,
        "currentPrice": 29000  
    },
    {
        "id": 15,
        "title": "Золотой браслет",
        "img": "./sale/items/bracelet-5.jpg",
        "imgRetina": "./sale/items/bracelet-5.jpg",
        "category": "bracelet",
        "isSale": false,
        "actualPrice": 16000,
        "currentPrice": 25000  
    },
    {
        "id": 16,
        "title": "Золотое ожерелье",
        "img": "./sale/items/necklace-1.jpg",
        "imgRetina": "./sale/items/necklace-1.jpg",
        "category": "necklace",
        "isSale": false,
        "actualPrice": 10500,
        "currentPrice": 15000  
    },
    {
        "id": 17,
        "title": "Серебряное ожерелье",
        "img": "./sale/items/necklace-2.jpg",
        "imgRetina": "./sale/items/necklace-2.jpg",
        "category": "necklace",
        "isSale": false,
        "actualPrice": 10500,
        "currentPrice": 15000  
    },
    {
        "id": 18,
        "title": "Серебряное ожерелье",
        "img": "./sale/items/necklace-3.jpg",
        "imgRetina": "./sale/items/necklace-3.jpg",
        "category": "necklace",
        "isSale": false,
        "actualPrice": 10500,
        "currentPrice": 15000  
    },
    {
        "id": 19,
        "title": "Серебряное ожерелье",
        "img": "./sale/items/necklace-4.jpg",
        "imgRetina": "./sale/items/necklace-4.jpg",
        "category": "necklace",
        "isSale": false,
        "actualPrice": 10500,
        "currentPrice": 15000  
    },
    {
        "id": 20,
        "title": "Серебряное ожерелье",
        "img": "./sale/items/necklace-5.jpg",
        "imgRetina": "./sale/items/necklace-5.jpg",
        "category": "necklace",
        "isSale": false,
        "actualPrice": 10500,
        "currentPrice": 15000  
    },
    {
        "id": 21,
        "title": "Золотые серьги",
        "img": "./sale/items/earring-1.jpg",
        "imgRetina": "./sale/items/earring-1.jpg",
        "category": "earring",
        "isSale": false,
        "actualPrice": 9900,
        "currentPrice": 18900  
    },
    {
        "id": 22,
        "title": "Золотые серьги",
        "img": "./sale/items/earring-1.jpg",
        "imgRetina": "./sale/items/earring-1.jpg",
        "category": "earring",
        "isSale": false,
        "actualPrice": 8900,
        "currentPrice": 15000  
    },
    {
        "id": 23,
        "title": "Золотые серьги блестящие",
        "img": "./sale/items/earring-1.jpg",
        "imgRetina": "./sale/items/earring-1.jpg",
        "category": "earring",
        "isSale": false,
        "actualPrice": 8700,
        "currentPrice": 15600  
    },
    {
        "id": 24,
        "title": "Золотые серьги",
        "img": "./sale/items/earring-1.jpg",
        "imgRetina": "./sale/items/earring-1.jpg",
        "category": "earring",
        "isSale": false,
        "actualPrice": 5699,
        "currentPrice": 18900  
    },
    {
        "id": 25,
        "title": "Золотые серьги",
        "img": "./sale/items/earring-1.jpg",
        "imgRetina": "./sale/items/earring-1.jpg",
        "category": "earring",
        "isSale": false,
        "actualPrice": 7800,
        "currentPrice": 15000  
    },
    {
        "id": 26,
        "title": "Обручальное кольцо",
        "img": "./sale/items/engagement-1.jpg",
        "imgRetina": "./sale/items/engagement-1.jpg",
        "category": "engagement",
        "isSale": false,
        "actualPrice": 25000,
        "currentPrice": 20000  
    },
    {
        "id": 27,
        "title": "Обручальное кольцо",
        "img": "./sale/items/engagement-2.jpg",
        "imgRetina": "./sale/items/engagement-2.jpg",
        "category": "engagement",
        "isSale": false,
        "actualPrice": 20000,
        "currentPrice": 15000  
    },
    {
        "id": 28,
        "title": "Обручальное кольцо",
        "img": "./sale/items/engagement-3.jpg",
        "imgRetina": "./sale/items/engagement-3.jpg",
        "category": "engagement",
        "isSale": false,
        "actualPrice": 15000,
        "currentPrice": 12500  
    },
    {
        "id": 29,
        "title": "Обручальное кольцо",
        "img": "./sale/items/engagement-4.jpg",
        "imgRetina": "./sale/items/engagement-4.jpg",
        "category": "engagement",
        "isSale": false,
        "actualPrice": 12500,
        "currentPrice": 17500  
    },
    {
        "id": 30,
        "title": "Обручальное кольцо",
        "img": "./sale/items/engagement-5.jpg",
        "imgRetina": "./sale/items/engagement-5.jpg",
        "category": "engagement",
        "isSale": false,
        "actualPrice": 10500,
        "currentPrice": 15500
    }

]

function Sale() {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const {selectedSaleCategory, setSelectedSaleCategory} = React.useContext(AppContext)

    React.useEffect(() => {
        setIsLoading(true)
        fetch('https://63f8ae025b0e4a127deb3a69.mockapi.io/items?category='+selectedSaleCategory).then((res) => {
            return res.json()
        }).then((json) => {
            setItems(json)
            setIsLoading(false)
        })
    }, [selectedSaleCategory])

    function openEye (item) {
        setModalOpen(true)
         setEyeData(item)
         console.log('modal')
     }

    const [modalOpen, setModalOpen] = useState(false)
    const [eyeData, setEyeData] = useState('')

        const categories =  [
            {
                title: 'Кольца',
                category: 'ring',
            },
            {
                title: 'Серьги',
                category: 'earring',
            },
            {
                title: 'Браслеты',
                category: 'bracelet'
            },
            {
                title: 'Часы',
                category: 'watch'
            }
        ]

    const [activeIndex, setActiveIndex] = React.useState(0)

    const onClickCategory = (value, index) => {
        setActiveIndex(index)
        setSelectedSaleCategory(value.category)
    }


    return (
        <div className="container">
            <Modal modalOpen={modalOpen} item={eyeData} setModalOpen={setModalOpen}></Modal>
            <section className="sale section container-bottom">
                <h2 className="sale__title">Распродажа</h2>

                <div className="sale__categories">
                    {
                        categories.map((value, index) => {
                            return(
                                <button onClick={() => onClickCategory(value, index)} 
                                className={`sale-categories__button ${activeIndex === index ? 'active' : ''}`}>
                                    {value.title}
                                </button>
                            )
                        })
                    }
                </div>
    
    
                <div className="sale__plate">

                    {
                        isLoading 
                        ? [... new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : 
                        items.map((item, index) => {
                            return (
                                <Item item={item} index={index} openEye={openEye}></Item>
                    
                                )
                            })
                    }
                
                

                
                </div>

                
            </section>
        </div>

            

    );
}

export default Sale;