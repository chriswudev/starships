import { useContext } from 'react';
import { CartContextProvider } from './context/CartContext';
import { getImagePath } from '../utils';

const Ship = ({ ship }) => {
  const cartContext = useContext(CartContextProvider);
  const handleAddToCart = () => {
    cartContext.addToCart(ship.model);
  };
  return (
    <div className="card" key={ship.model}>
      <div className="card-title">{ship.name}</div>
      <div className="card-image">
        <img src={getImagePath(ship.model)} alt={ship.model} />

        <span
          to="/"
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={handleAddToCart}
        >
          <i className="material-icons">add</i>
        </span>
      </div>

      <div className="card-content">
        <p>
          <a href={ship.url} target="_blank" rel="noreferrer">
            {ship.model}
          </a>
        </p>
        <p>{ship.manufacturer}</p>

        <p>
          <b>Price: {ship.cost_in_credits || 0}</b>
        </p>
      </div>
    </div>
  );
};

export default Ship;
