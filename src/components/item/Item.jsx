import Button from "../ux/button/Button";
import Tooltip from "../ux/tooltip/Tooltip";
import Sticker from "../ux/Sticker";
import Stars from "../ux/stars/Stars";
import Price from "../ux/price/Price";
import React from "react";
import { AppContext } from "../../App";


function FullItem(props) {
    const [openTooltip, isOpenTooltip] = React.useState(false);
    const [itemColor, setItemColor] = React.useState(0)
    const [itemSize, setItemSize] = React.useState(0) 
    const {setCart, cart} = React.useContext(AppContext)

    const addToCart = (item) => {

        if (cart.find((elem) => item.id === elem.id)) {
            setCart (
             cart.map((elem) => {
                if (item.id === elem.id) {
                    return { ...elem, count: elem.count + 1 }
                } else return elem                
             })
            )
            
        } else {
            setCart (
             cart.map((elem) => {
            if (item.id === elem.id) {
                return  { ...elem, count: 1 }
            } else {
                return elem
            }
              
        })
          );
        }

console.log(cart)
    }



    return (
        <div className="dailyProduct__item">
                <div className="dailyProduct-item__icon">
                    <div className="dailyProduct-icon-img__wrapper">
                        <img src={props.item.img} alt="" className="dailyProduct-icon__img" />
                        <div className="dilyProduct-icon__nav">
                            <svg className="dailyProduct-nav__arrow dailyProduct-icon__nav--left dailyProduct-icon__arrow--disabled" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-svg" d="M1.07102 0.999977L8.14209 8.07104L1.07102 15.1421" stroke="#303030" stroke-width="2"/>
                            </svg>
                            
                            <svg className="dailyProduct-nav__arrow dailyProduct-icon__nav--right" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="arrow-svg" d="M1.07102 0.999977L8.14209 8.07104L1.07102 15.1421" stroke="#303030" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    <div className="dailyProduct-icon__plate">
                        <Sticker content={'new'} class={'dailyProduct-plate__sticker sticker-new'}></Sticker>
                        <Sticker content={'Хит'} class={'dailyProduct-plate__sticker sticker-hit'}></Sticker>
                        <Sticker content={'Sale'} class={'dailyProduct-plate__sticker sticker-sale'}></Sticker>
                    </div>  
                         
                </div>
 
                <div className="dailyProduct__wrapper">
                        <Stars rating={4.2} class={'dailyProduct-item__stars'}></Stars>
                        <h3 className="dailyProduct-item__title">{props.item.title}</h3>
                        <p className="dailyProduct-item__vendorcode">{`Артикул: ${props.item.articule}`}</p>
                        <div className="dailyProduct-item__numbers"> 
                        <Price class={'dailyProduct-item-numbers__price'} 
                            actualPrice={props.item.actualPrice} 
                            currentPrice={props.item.currentPrice}>
                        </Price>
                            <div className="dailyProduct-item__timer">

                            </div>
                        </div>

                        <form action="" className="dailyProduct__form">
                        <p className="dailyProduct__title dailyProduct-color__title">Цвет</p>
                        <ul className="dailyProduct__color"> 
                         { props.item.color &&
                            props.item.color.map((item, index) => {
                                return (
                                    <div onClick={() => setItemColor(index)}
                                    className={`dailyProduct-color__item-wrapper
                                            ${ itemColor === index ? 'active' : ''}`}>
                                        <li 
                                        className={`dailyProduct-color__item 
                                                    ${item}`}>
                                        </li>  
                                    </div>
                                )
                            })
                        }
                        </ul> 

                        <div className="dailyProduct__size">
                            <div className="dailyProduct-size__wrapper">
                                <p className="dailyProduct__title">Размер</p>
                                <div className="dailyProduct-size__info">
                                <svg className="dailyProduct-size-info__icon" onMouseEnter={() => isOpenTooltip(true)} onMouseLeave={() => isOpenTooltip(false)} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="9" cy="9" r="9" fill="#F0F0F0"/>
                                    <path d="M8.25 10.4901H9.46875V10.4091C9.4858 9.42898 9.76705 8.99006 10.4915 8.54261C11.2543 8.08239 11.723 7.43466 11.723 6.47585C11.723 5.09091 10.6747 4.15341 9.1108 4.15341C7.67472 4.15341 6.52415 4.9929 6.46875 6.52699H7.7642C7.81534 5.62358 8.45881 5.22727 9.1108 5.22727C9.83523 5.22727 10.4233 5.70881 10.4233 6.46307C10.4233 7.09801 10.027 7.54545 9.51989 7.8608C8.72727 8.34659 8.25852 8.82812 8.25 10.4091V10.4901ZM8.89347 13.081C9.35795 13.081 9.74574 12.7017 9.74574 12.2287C9.74574 11.7642 9.35795 11.3807 8.89347 11.3807C8.42472 11.3807 8.04119 11.7642 8.04119 12.2287C8.04119 12.7017 8.42472 13.081 8.89347 13.081Z" fill="#303030"/>
                                </svg>

                                    <Tooltip class={`'dailyProduct-info__tooltip' ${openTooltip ? 'open' : '' }`} text={'Также как существующая теория напрямую зависит от экономической целесообразности принимаемых решений.'}></Tooltip>
                                </div>
                            </div>
                           <ul className="dailyProduct-sizes">
                           {props.item.size &&
                            props.item.size.map((item, index) => {
                                return (
                                    
                                    <li 
                                        onClick={() => setItemSize(index)}
                                        class={`dailyProduct-sizes__item 
                                        ${ itemSize === index ? 'active' : ''}`}>
                                        {item}
                                    </li>  
                                   
                                )
                            })
                        }
                            </ul>
                            
                        </div>
                        </form>
                        <div className="dailyProduct__info">
                                <div className="dailyProduct-info__buttons">
                                    <button 
                                    className="solid-button dailyProduct__button"
                                    onClick={() => addToCart(props.item)}>В корзину</button>
                                    <Button 
                                
                                    text={'в корзину'} 
                                    class={'solid-button dailyProduct__button'}></Button>
                                    <Button text={'купить в 1 клик'} 
                                    class={'outline-button dailyProduct__button'}></Button>
                                </div>
                                <div className="dailyProduct-info__plate">
                                    <div className="dailyProduct-plate__tile">
                                        <svg className="dailyProduct-tile__icon" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.99998 15.5C8.46248 15.0233 7.85498 14.5275 7.21248 14H7.20415C4.94165 12.15 2.37748 10.0566 1.24498 7.54829C0.87291 6.74973 0.675732 5.8809 0.666635 4.99996C0.664151 3.7912 1.14895 2.63245 2.01149 1.7856C2.87402 0.938751 4.04147 0.475289 5.24998 0.49996C6.23384 0.501514 7.19651 0.785861 8.02331 1.31913C8.38662 1.55493 8.71533 1.84017 8.99998 2.16663C9.28622 1.84145 9.61502 1.55638 9.97748 1.31913C10.8039 0.785756 11.7664 0.501392 12.75 0.49996C13.9585 0.475289 15.1259 0.938751 15.9885 1.7856C16.851 2.63245 17.3358 3.7912 17.3333 4.99996C17.3248 5.88231 17.1276 6.75262 16.755 7.55246C15.6225 10.0608 13.0591 12.1533 10.7966 14L10.7883 14.0066C10.145 14.5308 9.53831 15.0266 9.00081 15.5066L8.99998 15.5ZM5.24998 2.16663C4.47374 2.15691 3.72504 2.454 3.16665 2.99329C2.62863 3.52176 2.32794 4.24583 2.33324 4.99996C2.34275 5.64204 2.48817 6.27484 2.75998 6.85663C3.29457 7.93888 4.0159 8.91834 4.89081 9.74996C5.71665 10.5833 6.66665 11.39 7.48831 12.0683C7.71581 12.2558 7.94748 12.445 8.17915 12.6341L8.32498 12.7533C8.54748 12.935 8.77748 13.1233 8.99998 13.3083L9.01081 13.2983L9.01581 13.2941H9.02081L9.02831 13.2883H9.03248H9.03664L9.05165 13.2758L9.08581 13.2483L9.09165 13.2433L9.10081 13.2366H9.10581L9.11331 13.23L9.66665 12.7758L9.81165 12.6566C10.0458 12.4658 10.2775 12.2766 10.505 12.0891C11.3266 11.4108 12.2775 10.605 13.1033 9.76746C13.9783 8.93626 14.6997 7.95705 15.2341 6.87496C15.5109 6.28813 15.6584 5.64871 15.6667 4.99996C15.6701 4.24816 15.3696 3.52687 14.8333 2.99996C14.276 2.45823 13.5272 2.1587 12.75 2.16663C11.8016 2.15857 10.8949 2.5561 10.2583 3.25913L8.99998 4.70913L7.74165 3.25913C7.10503 2.5561 6.19838 2.15857 5.24998 2.16663Z" fill="#C9C9C9"/>
                                        </svg>
                                        <p className="dailyProduct-tile__title">Сохранить</p>
                                    </div>
                                    <div className="dailyProduct-plate__tile">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line x1="5.1" y1="10" x2="5.1" y2="17" stroke="#C9C9C9" stroke-width="2.2"/>
                                            <line x1="10.1" y1="2" x2="10.1" y2="17" stroke="#C9C9C9" stroke-width="2.2"/>
                                            <line x1="15.1" y1="5" x2="15.1" y2="17" stroke="#C9C9C9" stroke-width="2.2"/>
                                        </svg>
                                        <p className="dailyProduct-tile__title">Сравнить</p>
                                    </div>
                                    <div className="dailyProduct-plate__tile">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 4.58329C11.6667 2.97246 12.9725 1.66663 14.5833 1.66663C16.1942 1.66663 17.5 2.97246 17.5 4.58329C17.5 6.19411 16.1942 7.49996 14.5833 7.49996C13.769 7.49996 13.0327 7.16626 12.5036 6.62816L8.22756 9.21884C8.29649 9.46745 8.33333 9.7294 8.33333 9.99996C8.33333 10.243 8.3036 10.4791 8.24758 10.7049L12.6009 13.2773C13.1212 12.7949 13.8178 12.5 14.5833 12.5C16.1942 12.5 17.5 13.8058 17.5 15.4166C17.5 17.0274 16.1942 18.3333 14.5833 18.3333C12.9725 18.3333 11.6667 17.0274 11.6667 15.4166C11.6667 15.1736 11.6964 14.9375 11.7524 14.7118L7.39908 12.1394C6.87875 12.6217 6.18214 12.9166 5.41667 12.9166C3.80585 12.9166 2.5 11.6108 2.5 9.99996C2.5 8.38914 3.80585 7.08329 5.41667 7.08329C6.15373 7.08329 6.82695 7.3567 7.34042 7.80763L11.7222 5.15284C11.6858 4.96864 11.6667 4.7782 11.6667 4.58329ZM14.5833 3.33329C13.893 3.33329 13.3333 3.89294 13.3333 4.58329C13.3333 5.27364 13.893 5.83329 14.5833 5.83329C15.2737 5.83329 15.8333 5.27364 15.8333 4.58329C15.8333 3.89294 15.2737 3.33329 14.5833 3.33329ZM5.41667 8.74996C4.72632 8.74996 4.16667 9.30961 4.16667 9.99996C4.16667 10.6903 4.72632 11.25 5.41667 11.25C6.10701 11.25 6.66667 10.6903 6.66667 9.99996C6.66667 9.30961 6.10701 8.74996 5.41667 8.74996ZM14.5833 14.1666C13.893 14.1666 13.3333 14.7263 13.3333 15.4166C13.3333 16.107 13.893 16.6666 14.5833 16.6666C15.2737 16.6666 15.8333 16.107 15.8333 15.4166C15.8333 14.7263 15.2737 14.1666 14.5833 14.1666Z" fill="#C9C9C9"/>
                                    </svg>

                                        <p className="dailyProduct-tile__title">Поделиться</p>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
    );
}

export default FullItem;