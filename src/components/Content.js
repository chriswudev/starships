import React, { useEffect, useState, useContext } from 'react';
import Pagination from './Pagination';
import ShipResult from './ShipResult';
import Loading from './loading/Loading';
import { CartContextProvider } from './context/CartContext';

const itemsPerPage = 12;

const Content = () => {
  const { loading, ships, total } = useContext(CartContextProvider);
  const [currentShips, setCurrentShips] = useState([]);

  const handlePageChange = (itemOffset, endOffset) => {
    setCurrentShips(ships.slice(itemOffset, endOffset));
  };

  useEffect(() => {
    if (ships.length) {
      setCurrentShips(ships.slice(0, itemsPerPage));
    }
  }, [ships]);

  return (
    <div className="container">
      <div className="center">
        {total && (
          <Pagination
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            total={total}
          />
        )}
      </div>
      {loading ? <Loading /> : <ShipResult ships={currentShips} />}
    </div>
  );
};

export default Content;
