import React from "react";
import Skeleton from "../components/sale/Skeleton";
import ThumbItem from "../components/thumbItem/ThumbItem";
import Modal from "../components/ux/modal/Modal";
import {AppContext} from "../App"

function CategoryPage (props) {
    const {selectedCategory} = React.useContext(AppContext)

    const categoryData = [
        {
            title: 'Кольца',
            img: './category/ring.png',
            category: 'fingerRing',
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
    

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryTitle, setCategoryTitle] = React.useState('')

    React.useEffect(() => {
        fetch('https://63f8ae025b0e4a127deb3a69.mockapi.io/items?category='+selectedCategory)
        .then((res) => {
            return res.json()
        }).then((json) => {
            setItems(json)
            setIsLoading(false)
            setCategoryTitle(categoryData[categoryData.findIndex(item => item.category === selectedCategory)].title);
            console.log('https://63f8ae025b0e4a127deb3a69.mockapi.io/items?category='+selectedCategory)
            console.log(selectedCategory)
        });
        window.scrollTo(0, 0)
    }, [])

    function openEye (item) {
        setModalOpen(true)
         setEyeData(item)
         console.log('modal')
     }

    const [modalOpen, setModalOpen] = React.useState(false)
    const [eyeData, setEyeData] = React.useState('')




    return (
        <div className="section">
        <div className="container categoryPage">
            <h2 className="categoryPage__title">{categoryTitle}</h2>
             <Modal modalOpen={modalOpen} item={eyeData} setModalOpen={setModalOpen}></Modal>
            <div className="categoryPage__plate">
                                    {
                            isLoading 
                            ? [... new Array(6)].map((_, index) => <Skeleton key={index}/>)
                            : 
                            items.map((item, index) => {
                                return (
                                    // <Link to="/item" onClick={() => setClickedItem(item)}>
                                        <ThumbItem 
                                            item={item} 
                                            index={index} 
                                            openEye={openEye}
                                            >
                                        </ThumbItem>
                                    //  </Link >
                                    )
                                })
                        }
            </div>
        </div>
        </div>
    );
}

export default CategoryPage ;