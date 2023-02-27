
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import HeroItem from "./HeroItem";

function Hero() { 

    const heroData = [
        {
            title: 'Cуперскидка до -60%',
            descr: 'На бриллианты',
            img: './hero/ring.png',
            imgRetina: './hero/ring@2x.png'
        },
        {
            title: 'Cуперскидка до -50%',
            descr: 'На часы',
            img: './hero/ring.png',
            imgRetina: './hero/ring@2x.png'
        },
        {
            title: 'Cуперскидка до -30%',
            descr: 'На серьги',
            img: './hero/ring.png',
            imgRetina: './hero/ring@2x.png'
        }

    ]

    return (
        <div className="container">
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

        {
            heroData.map((item) => {
                return (
                    <SwiperSlide>
                        <HeroItem title={item.title} descr={item.descr}></HeroItem>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
        </div>
    );
}

export default Hero;