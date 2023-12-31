import Button from "../ux/button/Button";
import { AppContext } from "../../App";
import React from "react";
import { Link } from "react-router-dom";



function HeroItem(props) {
    const {setBannerInfo} = React.useContext(AppContext)
    return (
        <section className="hero section-horisontal">
        <div className="hero__wrapper">
            <h4 className="hero-wrapper__subtitle">{props.item.title}</h4>
            <h1 className="hero-wrapper__title">{props.item.descr}</h1>
            <Link to="/promo">
            <button 
            className="solid-button"
            onClick={() => setBannerInfo(props.item)}>More details</button>
            </Link>
            {/* <Button text={'Подробнее'} class={'solid-button'}> </Button> */}
        </div>
        <div className="hero__picture-wrapper"> 
        <img src={props.item.img} srcSet={`${props.item.imgRetina} 2x`} alt="" className="hero__img" />
        </div>
    </section>
    );
}

export default HeroItem;