import Header from '../components/header/Header';
import Popular from '../components/popular/Popular';
import Propmotions from '../components/promotions/Promotions';
import Sale from '../components/sale/Sale';
import DailyProduct from '../components/DailyProduct/DailyProduct';
import Hero from '../components/hero/Hero';
import Articles from '../components/articles/Articles';

function MainPage () {
    return (
        <>
         <Hero></Hero>
        <Popular></Popular>
        <Sale></Sale>
        <Propmotions></Propmotions>
        <DailyProduct></DailyProduct>
        <Articles></Articles>
        </>
    );
}

export default MainPage ;