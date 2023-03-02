
import './App.css';
import React from 'react';
import Header from './components/header/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  HashRouter,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import CategoryPage from './pages/CategoryPage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';
import ItemPage from './pages/itemPage/itemPage';

export const AppContext = React.createContext('')

function App() {

  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [selectedSaleCategory, setSelectedSaleCategory] = React.useState('ring')
  const [favorites, setFavorites] = React.useState([])
  const [cart, setCart] = React.useState([])
  const [clickedItem, setClickedItem] = React.useState(0)
  const [summaryCart, setSummaryCart] = React.useState(0);

  return ( 
    <div className="App">

    <AppContext.Provider 
    value={{selectedCategory, setSelectedCategory, 
    selectedSaleCategory, setSelectedSaleCategory,
    favorites, setFavorites,
    clickedItem, setClickedItem,
    summaryCart, setSummaryCart,
    cart, setCart}}>
        <HashRouter>
        <Header/>
          <Routes>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route exact path="/cart" element={<CartPage/>}></Route>
            <Route exact path="/category" element={<CategoryPage/>}></Route>
            <Route exact path="/favorites" element={<FavoritesPage/>}></Route>
            <Route exact path="/item" element={<ItemPage/>}></Route>

          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
