import Sticker from "../ux/Sticker";
import Price from '../ux/price/Price'
import Dots from "../ux/dots/Dots";
import { useState } from "react";

const itemData = [
    {
        id: 1,
        title: 'Стильное кольцо из белого золота c бриллиантами',
        img: './sale/items/ring-1.png',
        imgRetina: './sale/items/ring-1@2x.png',
        category: 'ring',
        isSale: true,
        actualPrice: 41000,
        currentPrice: 65000,
        saleAmount: '-65%',
        isLiked: false,
    },
    {
        id: 2,
        title: 'Стильное кольцо из белого золота c бриллиантами',
        img: './sale/items/ring-2.png',
        imgRetina: './sale/items/ring-2@2x.png',
        category: 'ring',
        isSale: false,
        actualPrice: 56000,
        currentPrice: 56000,
        saleAmount: '',
        isLiked: false,
    },
    {
        id: 3,
        title: 'Стильное кольцо из белого золота c бриллиантами',
        img: './sale/items/ring-3.png',
        imgRetina: './sale/items/ring-3@2x.png',
        category: 'ring',
        isSale: false,
        actualPrice: 37500,
        currentPrice: 37500,
        saleAmount: '',
        isLiked: false,
    },
    {
        id: 4,
        title: 'Стильное кольцо из белого золота c бриллиантами',
        img: './sale/items/ring-4.png',
        imgRetina: './sale/items/ring-4@2x.png',
        category: 'ring',
        isSale: false,
        actualPrice: 39200,
        currentPrice: 39200,
        saleAmount: '',
        isLiked: false,
    },

]

function Sale() {

    return (
        <div className="container">
            <section className="sale section container-bottom">
                <h2 className="sale__title">Распродажа</h2>

                <div className="sale__categories">
                    <button className="sale-categories__button active">Кольца</button>
                    <button className="sale-categories__button">Серьги</button>
                    <button className="sale-categories__button">Браслеты</button>
                    <button className="sale-categories__button">Часы</button>
                </div>
    
    
                <div className="sale__plate">
                {
                    itemData.map((item, index) => {
                        return (
                            
                    <div className="sale-plate__tile">
        
                    <svg className="sale-icon__eye svg-icon" width="24" height="24" viewBox="0 0 24 24" fill="#C9C9C9" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0044 3.5C13.0044 2.94772 12.5567 2.5 12.0044 2.5C11.4521 2.5 11.0044 2.94772 11.0044 3.5V5.54989C10.0448 5.64609 9.12848 5.87731 8.27405 6.20772L7.4446 5.05037C7.12289 4.60146 6.49817 4.49836 6.04927 4.82007C5.60036 5.14179 5.49726 5.76651 5.81898 6.21541L6.45792 7.10695C5.92702 7.43178 5.434 7.79271 4.98539 8.17708C3.24791 9.6658 2 11.6684 2 13.5C2 15.3316 3.24791 17.3342 4.98539 18.8229C6.76222 20.3453 9.23586 21.5 12 21.5C14.7639 21.5 17.2376 20.3462 19.0145 18.8241C20.7522 17.3355 22 15.333 22 13.5C22 11.667 20.7522 9.66444 19.0145 8.17591C18.6848 7.89346 18.331 7.62368 17.9559 7.37161L18.6253 6.43759C18.947 5.98869 18.844 5.36398 18.3951 5.04225C17.9462 4.72053 17.3214 4.82362 16.9997 5.27252L16.1918 6.39975C15.2102 5.96793 14.1376 5.66528 13.0044 5.55075V3.5ZM12 9.5C9.79086 9.5 8 11.2909 8 13.5C8 15.7091 9.79086 17.5 12 17.5C14.2091 17.5 16 15.7091 16 13.5C16 11.2909 14.2091 9.5 12 9.5Z"/>
                    </svg>

                    
                        <div className="sale-tile__stickers"> 
                        <div className="sale-stickers__text">
                            {item.isSale ?  <Sticker class={'sale__stickers-offer'} content={'Sale'}></Sticker> : ''}
                        </div>
                        <div className="sale-stickers__icons">
                                <svg className={`sale__stickers-like svg-icon`} width="24" height="24" viewBox="0 0 24 24" fill="#C9C9C9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 8.39995C1.99975 6.95029 2.58239 5.5614 3.61681 4.54578C4.65124 3.53016 6.05058 2.97311 7.5 2.99995C9.21732 2.99083 10.856 3.71913 12 4.99995C13.144 3.71913 14.7827 2.99083 16.5 2.99995C17.9494 2.97311 19.3488 3.53016 20.3832 4.54578C21.4176 5.5614 22.0002 6.95029 22 8.39995C22 13.756 15.621 17.8 12 21C8.387 17.773 2 13.76 2 8.39995Z" />
                                </svg>
                            </div>
                        </div>

                        <div className="sale-plate__icon">
                            <img src={`${item.img}`} srcSet={`${item.imgRetina} 2x`} alt="" className="sale__icon-picture" />
                        
                            <Dots class={'sale-icon__dots'}></Dots>
                        </div>
    
                        <Price actualPrice={item.actualPrice} isSale prevousPrice={65000} saleAmount={'-65%'}></Price>
                        <p className="sale-title">{item.title}</p>

                    </div>
                
                        )
                    })
                }
                </div>

                
            </section>
        </div>
    );
}

export default Sale;