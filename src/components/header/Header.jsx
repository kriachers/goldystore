import { useState } from "react";
import Dropdown from '../dropdown/Dropdown'

function Header() {

    const [openMenu, setOpenMenu] = useState(false)
    const [open, setOpen] = useState(false)

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
                    <img src="./icons/tooltip.svg" alt="" className="header-city__img" />
                    <p className="header-text header-city__text">Санкт-Петербург</p>
                    <img src="./icons/small-arrow.svg" alt="" className="header-city__subarrow" />
                </div>
                <div className="header-contact__phone">
                    <img src="./icons/phone.svg" alt="" className="header-phone__img" />
                    <a href="tel:+78007852535" className="header-text header-phone__text">8 800 785-25-35</a>
                </div>
            </div>
            <img src="./logo.svg" alt="" className="header__logo" />
            <div className="header__personal">
                <div className="header-presonal__login">
                    <p className="header-login__descr">Вход</p>
                    <span className="header-login__line"></span>
                    <p className="header-login__descr">Регистрация</p>
                </div>

                <div className="header-personal__icons">
                    <div className="header__icons-favorites">
                        <img src="./icons/heart.svg" alt="" className="header-icons__pic" />
                        <div className="header-favorites-sticker__wrapper">
                            <div className="header-favorites__sticker">
                                <p className="header-favorites-sticker__number">23</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./icons/chart.svg" alt="" className="header-icons__pic" />
                    </div>
                    <div>
                        <img src="./icons/bag.svg" alt="" className="header-icons__pic" />
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