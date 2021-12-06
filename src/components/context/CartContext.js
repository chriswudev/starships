import { createContext, useState, useEffect } from 'react';
import { fetchImperialStarShips } from '../../utils/api';

export const CartContextProvider = createContext();

const CartContext = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [ships, setShips] = useState([]);
  const [total, setTotal] = useState(null);

  const addToCart = (model) => {
    cartItems[model] = cartItems[model] || 0;
    const item = getItemByModel(model);
    if (cartItems[model] >= item.availableCount) {
      return;
    }
    cartItems[model]++;
    setCartItems({ ...cartItems });
  };

  const getItemByModel = (model) =>
    ships.filter((ship) => ship.model === model)[0];

  const removeFromCart = (model, removeAll) => {
    cartItems[model]--;
    if (removeAll || cartItems[model] < 1) {
      delete cartItems[model];
    }
    setCartItems({ ...cartItems });
  };

  const addAdditionalData = (data) => {
    const xWingPrice = data.filter((ship) => ship.name === 'X-wing')[0]
      .cost_in_credits;
    const newData = [];
    data.forEach((ship) => {
      if (ship.name.toLowerCase().includes('tie advanced')) {
        ship.cost_in_credits = ((xWingPrice * 2) / 3).toFixed(2);
      } else if (ship.cost_in_credits === 'unknown') {
        ship.cost_in_credits = 0;
      }
      if (ship.name === 'Death Star') {
        ship.availableCount = 2;
      } else {
        ship.availableCount = 100000;
      }
      newData.push({ ...ship });
    });
    return newData;
  };

  const handleFetchStarShips = async () => {
    try {
      setLoading(true);
      const data = await fetchImperialStarShips();
      setLoading(false);
      setShips(addAdditionalData(data));
      setTotal(data.length);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchStarShips();
    // eslint-disable-next-line
  }, []);

  const exports = {
    loading,
    ships,
    total,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <CartContextProvider.Provider value={exports}>
      {props.children}
    </CartContextProvider.Provider>
  );
};

export default CartContext;
