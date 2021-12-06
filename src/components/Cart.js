import { useContext } from 'react';
import { CartContextProvider } from './context/CartContext';
import Checkout from './Checkout';
import { getImagePath } from '../utils';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, ships } =
    useContext(CartContextProvider);
  const getTotalPrice = () => {
    let total = 0;
    Object.keys(cartItems).forEach((model) => {
      const item = ships.filter((item) => item.model === model)[0];
      total += item.cost_in_credits * cartItems[model];
    });
    return total;
  };
  return (
    <div className="container">
      <div className="cart">
        <h5>You have ordered:</h5>

        <ul className="collection">
          {Object.values(cartItems).length > 0 ? (
            Object.keys(cartItems).map((model) => {
              const item = ships.filter((ship) => ship.model === model)[0];
              return (
                <li className="collection-item avatar" key={item.model}>
                  <div className="item-img">
                    <img src={getImagePath(item.model)} alt={item.model} />
                  </div>

                  <div className="item-desc">
                    <span className="title">{item.name}</span>
                    <p>{item.manufacturer}</p>
                    <p>
                      <b>Price: {item.cost_in_credits}</b>
                    </p>
                    <p>
                      <b>Quantity: {cartItems[model]}</b>
                    </p>
                    <p>
                      <b>Total: {item.cost_in_credits * cartItems[model]}</b>
                    </p>
                    <div className="add-remove">
                      <span>
                        <i
                          className="material-icons"
                          onClick={addToCart.bind(null, item.model)}
                        >
                          add
                        </i>
                      </span>
                      <span>
                        <i
                          className="material-icons"
                          onClick={removeFromCart.bind(null, item.model, false)}
                        >
                          remove
                        </i>
                      </span>
                    </div>
                    <button
                      className="waves-effect waves-light btn pink remove"
                      onClick={removeFromCart.bind(null, item.model, true)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })
          ) : (
            <p>Nothing.</p>
          )}
        </ul>
      </div>

      <Checkout total={getTotalPrice()} />
    </div>
  );
};

export default Cart;
