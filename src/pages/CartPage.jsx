
import { useContext } from "react";
import { AppContext } from "../App";
import React from "react";

function CartPage () {
    const {cart, setCart} = useContext(AppContext)
    const [summaryCart, setSummaryCart] = React.useState(0);

   

    // React.useEffect(() => {
    //     let permittedValues = 0;
    //     permittedValues = cart.map((value) => {return (value.actualPrice)})
    //     permittedValues = permittedValues.Object.values;
    //     permittedValues = permittedValues.reduce(
    //         (previousScore, currentScore) => {
    //         return (previousScore + currentScore), 0
    //     })
    //     setSummaryCart(permittedValues)
    // },[summaryCart])

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
                            <p className="cartPage-tile__amount"></p>
                            <p className="cartPage-tile__price">{item.actualPrice} ₽</p>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#C9C9C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                        </div>
                    
                    )
                })
            }
            </div>
            <div className="cartPage__Sum">
                <p className="cartPage-sum__info">
                    {
                        summaryCart
                    }
                </p>
            </div>
            
        </div>
        </div>
    );
}

export default CartPage ;