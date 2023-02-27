
import './App.css';
import React from 'react';
import Header from './components/header/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import CategoryPage from './pages/CategoryPage';
import FavoritesPage from './pages/favoritesPage/FavoritesPage';

export const AppContext = React.createContext('')

function App() {

  const [selectedCategory, setSelectedCategory] = React.useState('')
  const [selectedSaleCategory, setSelectedSaleCategory] = React.useState('ring')
  const [favorites, setFavorites] = React.useState([])

  return ( 
    <div className="App">

    <AppContext.Provider 
    value={{selectedCategory, setSelectedCategory, 
    selectedSaleCategory, setSelectedSaleCategory,
    favorites, setFavorites}}>
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path="/" element={<MainPage/>}></Route>
            <Route exact path="/cart" element={<CartPage/>}></Route>
            <Route exact path="/category" element={<CategoryPage/>}></Route>
            <Route exact path="/favorites" element={<FavoritesPage/>}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
