import Button from "../ux/button/Button";

function HeroItem(props) {
    return (
        <section className="hero section-horisontal">
        <div className="hero__wrapper">
            <h4 className="hero-wrapper__subtitle">{props.title}</h4>
            <h1 className="hero-wrapper__title">{props.descr}</h1>
            <Button text={'Подробнее'} class={'solid-button'}> </Button>
        </div>
        <div> 
        <img src="./hero/ring.png" srcSet="./hero/ring@2x.png 2x" alt="" className="hero__img" />
        </div>
    </section>
    );
}

export default HeroItem;