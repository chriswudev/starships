import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';

const Header = () => {
  const {cartItems} = useContext(CartContextProvider)
  const totalItemCount = () => {
    const count = Object.values(cartItems).reduce((total, itemCount) => total + itemCount, 0)
    return count
  }
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          Watto's Imperial Surplus Barn
        </Link>

        <ul className="right">
          <li>
            <Link to="/">Ships</Link>
          </li>
          <li>
            <Link to="/cart">My cart ({totalItemCount()})</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
