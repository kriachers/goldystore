import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from '../dropdown/Dropdown';
import React from "react";
import { AppContext } from "../../App";
import City from "./city/City";

function Header() {
    const {favorites, setFavorites, cart} = React.useContext(AppContext)
    const [openMenu, setOpenMenu] = useState(false)
    const [open, setOpen] = useState(false)

    const [cartCounter, setCartCounter] = useState(0)

    React.useEffect(() => {
        setCartCounter(() => {
            if (cart.length) {
                let acc = 0;
                for (let i = 0; i < cart.length; i++) {
                    acc = acc + cart[i].count
                }
                return acc
             } else return 0
             
            })   
      }, [cart]);


    return (
        <div className="container">
        <header className="header section">
            <Dropdown setOpenMenu={setOpenMenu} openMenu={openMenu}></Dropdown>
 
        <div className="header-top">
            <div className={`header__burger-button ${openMenu ? 'open' : ''}`} onClick={() => setOpenMenu(!openMenu)}>
                    <span className="header-burger-button__line"></span>
                    <span className="header-burger-button__line"></span>
                    <span className="header-burger-button__line"></span>
            </div>

            <div className="header__contact">
                <City></City>
                <div className="header-contact__phone">
                    <img src="./icons/phone.svg" alt="" className="header-phone__img" />
                    <a href="tel:+78007852535" className="header-text header-phone__text">8 800 785-25-35</a>
                </div>
            </div>
            <Link to="/">
                 <img src="./logo.svg" alt="" className="header__logo" />
            </Link>
            <div className="header__personal">
                <div className="header-presonal__login">
                    <p className="header-login__descr">Login</p>
                    <span className="header-login__line"></span>
                    <p className="header-login__descr">Registration</p>
                </div>

                <div className="header-personal__icons">
                    <Link to={'/favorites'}>
                        <div className="header__icons-favorites">
                            <img src="./icons/heart.svg" alt="" className="header-icons__pic" />
                            <div className="header-favorites-sticker__wrapper">
                                <div className="header-favorites__sticker">
                                    <p className="header-favorites-sticker__number">{favorites.length}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <img src="./icons/chart.svg" alt="" className="header-icons__pic" />
                    </div>
                    <div>
                        <Link to="/cart">
                            <div className="header__icons-favorites header__icons-favorites--cart">
                            <img src="./icons/bag.svg" alt="" className="header-icons__pic" />
                            <div className="header-favorites-sticker__wrapper">
                                <div className="header-favorites__sticker">
                                    <p className="header-favorites-sticker__number">{cartCounter}</p>
                                </div>
                            </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


        <nav className="header__nav">
            <ul className="header-nav__menu">
                <li className="header-nav__item"><a href="#" className="header-nav__link active">Product Catalog</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Discounts</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Brands</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Stores</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">About us</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Shipping and payment</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Articles</a></li>
            </ul>
            <img onClick={() => setOpen(!open)} src="./icons/search.svg" alt="" className="header-hidden-search" />
            <form action="" className={`header-nav__search ${open ? 'open' : ''}`} >
                <input type="search" className="header-search__input" placeholder="Поиск по сайту" />
                <img src="./icons/search.svg" alt="" className="header-search__icon" />
            </form>
        </nav>
        </header>
        </div>

        

    );
}

export default Header;