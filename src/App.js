import logo from './logo.svg';
import './common.scss';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Visual from './components/Visual';
import './main.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuCoffee from './components/coffee/MenuCoffee';
import MenuMenu from './components/menu/MenuMenu';
import MenuNews from './components/news/MenuNews';
import MenuRespon from './components/respon/MenuRespon';
import MenuReward from './components/reward/MenuReward';
import MenuStore from './components/store/MenuStore';
import CoffeeProduct from './components/coffee/CoffeeProduct';
import ProductView from './components/coffee/ProductView';
import useWindowWidth from './hooks/useWindowWidth';
import useWindowHeight from './hooks/useWundowHeight';
import StarbucksReserve from './components/coffee/StarbucksReserve';

function App() {
  const width = useWindowWidth();
  //const height = useWindowHeight();

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Visual />} />
          <Route path="/coffee" element={<MenuCoffee />} />
          <Route path="/coffee/product" element={<CoffeeProduct />} />
          <Route
            path="/coffee/product/product_view"
            element={<ProductView />}
          />
          <Route
            path="/coffee/reserve/product_view"
            element={<ProductView />}
          />
          <Route path="/coffee/reserve" element={<StarbucksReserve />} />
          <Route path="/menu" element={<MenuMenu />} />
          <Route path="/whats_news" element={<MenuNews />} />
          <Route path="/responsibility" element={<MenuRespon />} />
          <Route path="/reward" element={<MenuReward />} />
          <Route path="/store" element={<MenuStore />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {width}
    </>
  );
}

export default App;
