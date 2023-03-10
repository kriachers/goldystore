
import { useContext } from "react";
import { AppContext } from "../App";
import React from "react";

function CartPage () {
    const {cart, setCart} = useContext(AppContext)
    const [summaryCart, setSummaryCart] = React.useState(0);

    const addToCart = (item) => {
        if (cart.find(e => e.id === item.id)) {
            setCart((prev) => {
                return [...prev].map(elem => {
                  if(elem.id === item.id) {
                    return {
                      ...elem,
                      count: elem.count + 1,
                      totalPrice: elem.totalPrice + elem.actualPrice,
                    }
                  }
                  return elem;
                }
                )})
        } else {
            setCart([...cart, {...item, count: 1, totalPrice: item.actualPrice} ])
        }
        console.log(cart)
    }

    const removeFromCart = (item) => {
        if (cart.find(e => e.id === item.id)) {
            setCart((prev) => {
                return [...prev].map(elem => {
                  if(elem.id === item.id) {
                    return {
                      ...elem,
                      count: elem.count - 1,
                      totalPrice: elem.totalPrice - elem.actualPrice,
                    }
                  }
                  return elem;
                }
                )})
        } 
        console.log(cart)
    }

    const deleteFromCart = (item) => {
            setCart(cart.filter(elem => elem.id !== item.id));
        console.log(cart)
    }

    

    return (
        <div className="container">
        <div className="cartPage section">
            <h2 className="cartPage__title">Корзина</h2>
            <div className="cartPage__plate">
            {
                cart.map((item) => {
                    return (
                        <div className="cartPage-plate__tile">
                            <div className="cartPage-tile__info">
                                <img src={item.img} alt="" className="cartPage-tile__icon" />
                                <p className="cartPage-tile__title">{item.title}</p>
                            </div>
                            <div className="cartPage-tile__amount">

                                <svg 
                                    onClick={() => removeFromCart(item)}
                                    className="cartPage-tile-amount__button"
                                    fill="#C9C9C9"  width="25px" height="25px"  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 330 330" >
                                    <g>
                                    <path d="M281.633,48.328C250.469,17.163,209.034,0,164.961,0C120.888,0,79.453,17.163,48.289,48.328
                                        c-64.333,64.334-64.333,169.011,0,233.345C79.453,312.837,120.888,330,164.962,330c44.073,0,85.507-17.163,116.671-48.328
                                        c31.165-31.164,48.328-72.599,48.328-116.672S312.798,79.492,281.633,48.328z M260.42,260.46
                                        C234.922,285.957,201.021,300,164.962,300c-36.06,0-69.961-14.043-95.46-39.54c-52.636-52.637-52.636-138.282,0-190.919
                                        C95,44.042,128.901,30,164.961,30s69.961,14.042,95.459,39.54c25.498,25.499,39.541,59.4,39.541,95.46
                                        S285.918,234.961,260.42,260.46z"/>
                                    <path d="M254.961,150H74.962c-8.284,0-15,6.716-15,15s6.716,15,15,15h179.999c8.284,0,15-6.716,15-15S263.245,150,254.961,150z"/>
                                </g>
                                </svg>
                                
                                <p className="cartPage-tile-amount__count">{item.count}</p>
                                <svg 
                                className="cartPage-tile-amount__button cartPage-tile-amount__button--add"
                                onClick={() => addToCart(item)}
                                width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#C9C9C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                

                               
                                </div>
                            <p className="cartPage-tile__price">{item.totalPrice} ₽</p>
                            {/* <svg onClick={() => deleteFromCart(item)}
                             width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#C9C9C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg> */}
                            
                            
                        </div>
                    
                    )
                })
            }
            </div>
            <div className="cartPage__Sum">
                <p className="cartPage-sum__info">
                </p>
            </div>

            {
                !cart.length ? 
                    <h4 className="cartPage__text">Сейчас корзина пуста</h4>
                : ''
            }
            
        </div>
        </div>
    );
}

export default CartPage ;