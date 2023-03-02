
import React from "react";
import { AppContext } from "../../App";
import PromoItem from "./promoItem/promoItem";

import Skeleton from "../../components/sale/Skeleton";
import ThumbItem from "../../components/thumbItem/ThumbItem";
import Modal from "../../components/ux/modal/Modal";

function PromoPage() {
    const {bannerInfo} = React.useContext(AppContext);

    React.useEffect(() => {
        fetch('https://63f8ae025b0e4a127deb3a69.mockapi.io/items?category='+bannerInfo.category)
       .then((res) => {
            return res.json()
        }).then((json) => {
            setItems(json)
            setIsLoading(false)
            console.log(bannerInfo.category)
        });
    window.scrollTo(0,0)
    }, [])

    function openEye (item) {
        setModalOpen(true)
         setEyeData(item)
         console.log('modal')
     }

    const [modalOpen, setModalOpen] = React.useState(false)
    const [eyeData, setEyeData] = React.useState('')

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)


    return (
        <div className="container">
            <section className="section">
                <PromoItem item={bannerInfo}></PromoItem>
                
                <Modal modalOpen={modalOpen} item={eyeData} setModalOpen={setModalOpen}></Modal>
            <div className="categoryPage__plate">
                                    {
                            isLoading 
                            ? [... new Array(6)].map((_, index) => <Skeleton key={index}/>)
                            : 
                            items.map((item, index) => {
                                return (
                                        <ThumbItem 
                                            item={item} 
                                            index={index} 
                                            openEye={openEye}
                                            >
                                        </ThumbItem>
                                    )
                                })
                        }
            </div>
            </section>
        </div>
    );
}

export default PromoPage;