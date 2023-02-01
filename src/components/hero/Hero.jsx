import Button from "../ux/button/Button";
import Arrow from "../ux/arrow/Arrow";
import Dots from "../ux/dots/Dots";

function Hero() { 
    return (
        <div className="container">
        <section className="hero section container-bottom">
            <div className="hero__wrapper">
                <h4 className="hero-wrapper__subtitle">Суперскидка до 60%</h4>
                <h1 className="hero-wrapper__title">НА БРИЛЛИАНТЫ</h1>
                <Button text={'Подробнее'} class={'solid-button'}> </Button>
            </div>
            <div> 
            <img src={process.env.PUBLIC_URL + "./hero/ring.png"} srcSet={process.env.PUBLIC_URL + "./hero/ring@2x.png 2x"} alt="" className="hero__img" />
            </div>
            <div className="hero__nav">
                <Arrow class={'arrow-left'}></Arrow>
                <Arrow class={'arrow-right'}></Arrow>
            </div>
            <Dots class={'hero__dots'}></Dots>
            
        </section>
        </div>
    );
}

export default Hero;