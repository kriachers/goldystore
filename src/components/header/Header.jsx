import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from '../dropdown/Dropdown';
import React from "react";
import { AppContext } from "../../App";

function Header() {
    const {favorites, setFavorites} = React.useContext(AppContext)
    const [openMenu, setOpenMenu] = useState(false)
    const [open, setOpen] = useState(false)

    const [openCity, setOpenCity] = useState(false)
    const [selectedCity, setSelectedCity] = useState(0)
    const cities = ["Санкт-Петербург", "Москва", "Екатеринбург"]
    const selectedCityName = cities[selectedCity]
    const cityModalRef = React.useRef()
    const cityModalOpenerRef = React.useRef()

    const onClickListTtem = (index) => {
        setSelectedCity(index);
        setOpenCity(false)
    }

    React.useEffect(() => {
        const clickHandleCitySide = (event) => {
            let pathModal = event.composedPath().includes(cityModalRef.current);
            let pathModalOpener = event.composedPath().includes(cityModalOpenerRef.current);
            if (!pathModal && !pathModalOpener) {
                setOpenCity(false);
        }
    }
    document.body.addEventListener('click', clickHandleCitySide)
    return () => {
        document.body.removeEventListener('click', clickHandleCitySide)
    }
        
    }, [])

    





    

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
                <div className="header-contact__city">
                    <div  ref={cityModalOpenerRef} className="header-contact-city__wrapper" onClick={() => {setOpenCity(!openCity)}}>
                        <img src="./icons/tooltip.svg" alt="" className="header-city__img" />
                        <p className="header-text header-city__text">{selectedCityName}</p>
                        <img src="./icons/small-arrow.svg" alt="" className="header-city__subarrow" />
                    </div>
                    <div ref={cityModalRef} className={`header-city__modal ${openCity ? 'open' : ''}`}>
                        <ul className="header-city-modal__list">
                            {cities.map((item, index) => {
                                return (
                                    <li 
                                    onClick={() => onClickListTtem(index)}
                                    className={`header-modal-list__item ${selectedCity === index ? 'active' : ""}`}>
                                    {item}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
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
                    <p className="header-login__descr">Вход</p>
                    <span className="header-login__line"></span>
                    <p className="header-login__descr">Регистрация</p>
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
                            <img src="./icons/bag.svg" alt="" className="header-icons__pic" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>


        <nav className="header__nav">
            <ul className="header-nav__menu">
                <li className="header-nav__item"><a href="#" className="header-nav__link active">Каталог</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Акции</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Бренды</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Магазины</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">О нас</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Доставка и оплата</a></li>
                <li className="header-nav__item"><a href="#" className="header-nav__link">Статьи</a></li>
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