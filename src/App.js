import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/Content';
import Cart from './components/Cart';
import CartContext from './components/context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext>
          <Header />
          <Routes>
            <Route exact path="/" element={<Content />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext>
      </BrowserRouter>
      <div className="js-woorank-lead-widget woorank-lead-widget"></div>
    </div>
  );
}

export default App;
