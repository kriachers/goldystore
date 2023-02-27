import React from "react";
import Item from "../../components/item/Item";
import Modal from "../../components/ux/modal/Modal";
import {AppContext} from "../../App"

function FavoritesPage() {
    const {favorites} = React.useContext(AppContext)

    function openEye (item) {
        setModalOpen(true)
         setEyeData(item)
         console.log('modal')
     }

    const [modalOpen, setModalOpen] = React.useState(false)
    const [eyeData, setEyeData] = React.useState('')

    return ( 
        <div className="section">
            <div className="container favoritesPage">
                <h2 className="favoritesPage__title">Избранное</h2>
                <Modal modalOpen={modalOpen} item={eyeData} setModalOpen={setModalOpen}></Modal>
                
                {   
                favorites.length 
                ?
                    <div className="favoritesPage__plate">
                            {
                                favorites.map((item, index) => {
                                    return (
                                        <Item item={item} index={index} openEye={openEye}></Item>
                                        )
                                    })
                                }
                               
                    </div>
                :
                'Пока в избранном нет товаров'
                }

            </div>
        </div>
    );
}

export default FavoritesPage;