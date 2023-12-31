function Dropdown(props) {
    return (
        <div className={`dropdown ${props.openMenu ? 'open' : ''}`}>
            <div className="dropdown-burger__wrapper">
                <div className={`header__burger-button ${props.openMenu ? 'open' : ''}`} onClick={() => props.setOpenMenu(!props.openMenu)}>
                    <span className="header-burger-button__line"></span>
                    <span className="header-burger-button__line"></span>
                    <span className="header-burger-button__line"></span>
                </div>
            </div>
        

        <div className="dropdown__nav">
            <ul className="dropdown-nav__menu">
                <li className="dropdown-nav__item"><a href="#" className="dropdown-nav__link active">Product Catalog</a></li>
                <li className="dropdown-nav__item"><a href="#" className="dropdown-nav__link">Discounts</a></li>
                <li className="dropdown-nav__item"><a href="#" className="dropdown-nav__link">Brands</a></li>
                <li className="dropdown-nav__item"><a href="#" className="dropdown-nav__link">Stores</a></li>
                <li className="dropdown-nav__item"><a href="#" className="dropdown-nav__link">About us</a></li>
                <li className="dropdown-nav__item"><a href="#" className="dropdown-nav__link">Shipping and payment</a></li>
                <li className="dropdown-nav__item"><a href="#" className="dropdown-nav__link">Articles</a></li>
            </ul>
        </div>

        <div className="dropdown__contact">
                <div className="dropdown-contact__city">
                    <img src="./icons/tooltip.svg" alt="" className="dropdown-city__img" />
                    <p className="dropdown-text dropdown-city__text">Санкт-Петербург</p>
                    <img src="./icons/small-arrow.svg" alt="" className="dropdown-city__subarrow" />
                </div>
                <div className="dropdown-contact__phone">
                    <img src="./icons/phone.svg" alt="" className="dropdown-phone__img" />
                    <p className="dropdown-text dropdown-phone__text">8 800 785-25-35</p>
                </div>
            </div>

        <form action="" className={'dropdown-nav__search'} >
                <input type="search" className="dropdown-search__input" placeholder="Поиск по сайту" />
                <img src="./icons/search.svg" alt="" className="dropdown-search__icon" />
            </form>
        

</div>
     );
}
export default Dropdown;