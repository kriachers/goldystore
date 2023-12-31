
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import HeroItem from "./HeroItem";

function Hero() { 

    const heroData = [
        {
            title: 'Discount up to -60%',
            descr: 'On diamonds',
            img: './hero/ring.png',
            imgRetina: './hero/ring@2x.png',
            category: 'fingerRing'
        },
        {
            title: 'Discount up to -50%',
            descr: 'On watches',
            img: './hero/watch.png',
            imgRetina: './hero/watch.png',
            category: 'watch'
        },
        {
            title: 'Discount up to -30%',
            descr: 'On earrings',
            img: './hero/earring.png',
            imgRetina: './hero/earring.png',
            category: 'earring'
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
      className={'section'}
    >

        {
            heroData.map((item) => {
                return (
                    <SwiperSlide>
                        <HeroItem item={item}></HeroItem>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>
        </div>
    );
}

export default Hero;