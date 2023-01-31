import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Popular from './components/popular/Popular';
import Propmotions from './components/promotions/Promotions';
import Sale from './components/sale/Sale';
import DailyProduct from './components/DailyProduct/DailyProduct';
import Hero from './components/hero/Hero';
import Articles from './components/articles/Articles';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Popular></Popular>
      <Sale></Sale>
      <Propmotions></Propmotions>
      <DailyProduct></DailyProduct>
      <Articles></Articles>
    </div>
  );
}

export default App;
