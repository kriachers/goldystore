import React from "react";
function PromoItem(props) {

    return (
        <section className="promo section-horisontal">
        <div className="promo__wrapper">
            <h4 className="promo-wrapper__subtitle">{props.item.title}</h4>
            <h1 className="promo-wrapper__title">{props.item.descr}</h1>
        </div>
        <img src={props.item.img} srcSet={`${props.item.imgRetina} 2x`} alt="" className="promo__img" />


    </section>
    );
}

export default PromoItem;