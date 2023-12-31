import Modal from "../ux/modal/Modal";
import React from "react";
import { useState } from "react";
import Skeleton from "./Skeleton";
import ThumbItem from "../thumbItem/ThumbItem";
import { AppContext } from "../../App";


const itemData = [
    {
     "id": 1,
     "title": "Стильное кольцо из белого золота c бриллиантами",
     "img": "./sale/items/ring-1.png",
     "imgRetina": "./sale/items/ring-1@2x.png",
     "category": "fingerRing",
     "isSale": true,
     "color": [
      "gold",
      "silver"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19,
      20
     ],
     "articule": 1012701,
     "actualPrice": 41000,
     "currentPrice": 65000,
     "rating": 4.8
    },
    {
     "id": 2,
     "title": "Стильное кольцо из белого золота c бриллиантами",
     "img": "./sale/items/ring-2.png",
     "imgRetina": "./sale/items/ring-2@2x.png",
     "category": "fingerRing",
     "color": [
      "gold",
      "silver"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19,
      20
     ],
     "articule": 1012702,
     "isSale": false,
     "actualPrice": 56000,
     "currentPrice": 56000,
     "rating": 4.5
    },
    {
     "id": 3,
     "title": "Стильное кольцо из белого золота c бриллиантами",
     "img": "./sale/items/ring-3.png",
     "imgRetina": "./sale/items/ring-3@2x.png",
     "category": "fingerRing",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "green"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19,
      20
     ],
     "articule": 1012703,
     "actualPrice": 37500,
     "currentPrice": 37500,
     "rating": 4.4
    },
    {
     "id": 4,
     "title": "Стильное кольцо из белого золота c бриллиантами",
     "img": "./sale/items/ring-4.png",
     "imgRetina": "./sale/items/ring-4@2x.png",
     "category": "fingerRing",
     "color": [
      "gold",
      "silver"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19,
      20
     ],
     "articule": 1012704,
     "isSale": false,
     "actualPrice": 39200,
     "currentPrice": 39200,
     "rating": 4.1
    },
    {
     "id": 5,
     "title": "Кольцо из серебра 585 пробы",
     "img": "./sale/items/ring-4.png",
     "imgRetina": "./sale/items/ring-4@2x.png",
     "category": "ring",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "green"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19,
      20
     ],
     "articule": 1012705,
     "actualPrice": 20200,
     "currentPrice": 25200,
     "rating": 4.1
    },
    {
     "id": 6,
     "title": "Мужские часы из золота и серебра НИКА Ego 1398.0.19.81B",
     "img": "./sale/items/watch-1.jpg",
     "imgRetina": "./sale/items/watch-1.jpg",
     "category": "watch",
     "isSale": false,
     "color": [
      "black",
      "silver"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012706,
     "actualPrice": 71617,
     "currentPrice": 102310,
     "rating": 3.5
    },
    {
     "id": 7,
     "title": "Серебряные мужские часы SOKOLOV",
     "img": "./sale/items/watch-2.jpg",
     "imgRetina": "./sale/items/watch-2.jpg",
     "category": "watch",
     "isSale": false,
     "color": [
      "black",
      "silver"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 10127067,
     "actualPrice": 49707,
     "currentPrice": 71778,
     "rating": 4.1
    },
    {
     "id": 8,
     "title": "Серебряные мужские часы НИКА",
     "img": "./sale/items/watch-3.jpg",
     "imgRetina": "./sale/items/watch-3.jpg",
     "category": "watch",
     "isSale": false,
     "color": [
      "black",
      "silver"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012708,
     "actualPrice": 31500,
     "currentPrice": 45000,
     "rating": 4.9
    },
    {
     "id": 9,
     "title": "Серебряные мужские часы WATCH",
     "img": "./sale/items/watch-4.jpg",
     "imgRetina": "./sale/items/watch-4.jpg",
     "category": "watch",
     "isSale": false,
     "color": [
      "black",
      "silver"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012709,
     "actualPrice": 67500,
     "currentPrice": 28000,
     "rating": 3.9
    },
    {
     "id": 10,
     "title": "Серебряные мужские часы WOW",
     "img": "./sale/items/watch-4.jpg",
     "imgRetina": "./sale/items/watch-4.jpg",
     "category": "watch",
     "isSale": false,
     "color": [
      "black",
      "silver"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 10127010,
     "actualPrice": 50500,
     "currentPrice": 18000,
     "rating": 4.2
    },
    {
     "id": 11,
     "title": "Золотой пустотелый браслет Тройной ромб",
     "img": "./sale/items/bracelet-1.jpg",
     "imgRetina": "./sale/items/bracelet-1.jpg",
     "category": "bracelet",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012711,
     "actualPrice": 7176,
     "currentPrice": 11900,
     "rating": 4
    },
    {
     "id": 12,
     "title": "Золотой жесткий браслет",
     "img": "./sale/items/bracelet-2.jpg",
     "imgRetina": "./sale/items/bracelet-2.jpg",
     "category": "bracelet",
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012712,
     "isSale": false,
     "actualPrice": 25096,
     "currentPrice": 38000,
     "rating": 3.8
    },
    {
     "id": 13,
     "title": "Красивый золотой браслет",
     "img": "./sale/items/bracelet-3.jpg",
     "imgRetina": "./sale/items/bracelet-3.jpg",
     "category": "bracelet",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012713,
     "actualPrice": 15000,
     "currentPrice": 20000,
     "rating": 4.1
    },
    {
     "id": 14,
     "title": "Красивый браслет",
     "img": "./sale/items/bracelet-4.jpg",
     "imgRetina": "./sale/items/bracelet-4.jpg",
     "category": "bracelet",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012714,
     "actualPrice": 15000,
     "currentPrice": 29000,
     "rating": 3.5
    },
    {
     "id": 15,
     "title": "Золотой браслет",
     "img": "./sale/items/bracelet-5.jpg",
     "imgRetina": "./sale/items/bracelet-5.jpg",
     "category": "bracelet",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012715,
     "actualPrice": 16000,
     "currentPrice": 25000,
     "rating": 4.9
    },
    {
     "id": 16,
     "title": "Золотое ожерелье",
     "img": "./sale/items/necklace-1.jpg",
     "imgRetina": "./sale/items/necklace-1.jpg",
     "category": "necklace",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012716,
     "actualPrice": 10500,
     "currentPrice": 15000,
     "rating": 4.3
    },
    {
     "id": 17,
     "title": "Серебряное ожерелье",
     "img": "./sale/items/necklace-2.jpg",
     "imgRetina": "./sale/items/necklace-2.jpg",
     "category": "necklace",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012717,
     "actualPrice": 10500,
     "currentPrice": 15000,
     "rating": 4.8
    },
    {
     "id": 18,
     "title": "Серебряное ожерелье",
     "img": "./sale/items/necklace-3.jpg",
     "imgRetina": "./sale/items/necklace-3.jpg",
     "category": "necklace",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012718,
     "actualPrice": 10500,
     "currentPrice": 15000,
     "rating": 4.2
    },
    {
     "id": 19,
     "title": "Серебряное ожерелье",
     "img": "./sale/items/necklace-4.jpg",
     "imgRetina": "./sale/items/necklace-4.jpg",
     "category": "necklace",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012719,
     "actualPrice": 10500,
     "currentPrice": 15000,
     "rating": 4.2
    },
    {
     "id": 20,
     "title": "Серебряное ожерелье",
     "img": "./sale/items/necklace-5.jpg",
     "imgRetina": "./sale/items/necklace-5.jpg",
     "category": "necklace",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012720,
     "actualPrice": 10500,
     "currentPrice": 15000,
     "rating": 3.9
    },
    {
     "id": 21,
     "title": "Золотые серьги",
     "img": "./sale/items/earring-1.jpg",
     "imgRetina": "./sale/items/earring-1.jpg",
     "category": "earring",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012721,
     "actualPrice": 9900,
     "currentPrice": 18900,
     "rating": 4.2
    },
    {
     "id": 22,
     "title": "Золотые серьги",
     "img": "./sale/items/earring-2.jpg",
     "imgRetina": "./sale/items/earring-2.jpg",
     "category": "earring",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012722,
     "actualPrice": 8900,
     "currentPrice": 15000,
     "rating": 4.8
    },
    {
     "id": 23,
     "title": "Золотые серьги блестящие",
     "img": "./sale/items/earring-3.jpg",
     "imgRetina": "./sale/items/earring-3.jpg",
     "category": "earring",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012723,
     "actualPrice": 8700,
     "currentPrice": 15600,
     "rating": 4.8
    },
    {
     "id": 24,
     "title": "Золотые серьги",
     "img": "./sale/items/earring-4.jpg",
     "imgRetina": "./sale/items/earring-4.jpg",
     "category": "earring",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012724,
     "actualPrice": 5699,
     "currentPrice": 18900,
     "rating": 4.8
    },
    {
     "id": 25,
     "title": "Золотые серьги",
     "img": "./sale/items/earring-5.jpg",
     "imgRetina": "./sale/items/earring-5.jpg",
     "category": "earring",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      "S",
      "M",
      "L"
     ],
     "articule": 1012725,
     "actualPrice": 7800,
     "currentPrice": 15000,
     "rating": 4.9
    },
    {
     "id": 26,
     "title": "Обручальное кольцо",
     "img": "./sale/items/engagement-1.jpg",
     "imgRetina": "./sale/items/engagement-1.jpg",
     "category": "engagement",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19
     ],
     "articule": 1012726,
     "actualPrice": 25000,
     "currentPrice": 20000,
     "rating": 4.2
    },
    {
     "id": 27,
     "title": "Обручальное кольцо",
     "img": "./sale/items/engagement-2.jpg",
     "imgRetina": "./sale/items/engagement-2.jpg",
     "category": "engagement",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19
     ],
     "articule": 1012727,
     "actualPrice": 20000,
     "currentPrice": 15000,
     "rating": 4.1
    },
    {
     "id": 28,
     "title": "Обручальное кольцо",
     "img": "./sale/items/engagement-3.jpg",
     "imgRetina": "./sale/items/engagement-3.jpg",
     "category": "engagement",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19
     ],
     "articule": 1012728,
     "actualPrice": 15000,
     "currentPrice": 12500,
     "rating": 4.3
    },
    {
     "id": 29,
     "title": "Обручальное кольцо",
     "img": "./sale/items/engagement-4.jpg",
     "imgRetina": "./sale/items/engagement-4.jpg",
     "category": "engagement",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19
     ],
     "articule": 1012729,
     "actualPrice": 12500,
     "currentPrice": 17500,
     "rating": 4.1
    },
    {
     "id": 30,
     "title": "Обручальное кольцо",
     "img": "./sale/items/engagement-5.jpg",
     "imgRetina": "./sale/items/engagement-5.jpg",
     "category": "engagement",
     "isSale": false,
     "color": [
      "gold",
      "silver",
      "pink-gold"
     ],
     "size": [
      16,
      16.5,
      17,
      18,
      19
     ],
     "articule": 1012730,
     "actualPrice": 10500,
     "currentPrice": 15500,
     "rating": 4.3
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
                title: 'Rings',
                category: 'fingerRing',
            },
            {
                title: 'Earrings',
                category: 'earring',
            },
            {
                title: 'Bracelets',
                category: 'bracelet'
            },
            {
                title: 'Watch',
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
                <h2 className="sale__title">Sale</h2>

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
                                <ThumbItem item={item} index={index} openEye={openEye}></ThumbItem>
                    
                                )
                            })
                    }
                
                

                
                </div>

                
            </section>
        </div>

            

    );
}

export default Sale;