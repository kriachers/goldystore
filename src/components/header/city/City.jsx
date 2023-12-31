
import React from "react"
function City () {
    const [openCity, setOpenCity] = React.useState(false)
    const [selectedCity, setSelectedCity] = React.useState(0)
    const cities = ["Vienna", "Graz", "Linz"]
    const cityModalRef = React.useRef()
    const cityModalOpenerRef = React.useRef()

    const onClickListTtem = (index) => {
        setSelectedCity(index);
        setOpenCity(false)
        localStorage.setItem('city', JSON.stringify(index))
    }

    React.useEffect(() => {
    const clickHandleCitySide = (event) => {
        let pathModal = event.composedPath().includes(cityModalRef.current);
        let pathModalOpener = event.composedPath().includes(cityModalOpenerRef.current);
        if (!pathModal && !pathModalOpener) {
                setOpenCity(false);
        }
     } 

     const items = JSON.parse(localStorage.getItem('city'));
     if (items) {
     setSelectedCity(items);
    } 

    document.body.addEventListener('click', clickHandleCitySide)
    return () => {
        document.body.removeEventListener('click', clickHandleCitySide)
    }    

    }, [])

    React.useEffect(() => {
        localStorage.setItem('city', JSON.stringify(selectedCity))
    }, [selectedCity])

    return (
                 <div className="header-contact__city">
                    <div  ref={cityModalOpenerRef} className="header-contact-city__wrapper" onClick={() => {setOpenCity(!openCity)}}>
                        <img src="./icons/tooltip.svg" alt="" className="header-city__img" />
                        <p className="header-text header-city__text">{cities[selectedCity]}</p>
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
    );
}

export default City ;