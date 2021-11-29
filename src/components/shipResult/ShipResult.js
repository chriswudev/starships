import React from 'react';
import Ship from '../ship/Ship';
import './shipResult.css';

const ShipResult = ({ ships }) => {
  return (
    <div className="search-result">
      {ships.map((ship) => (
        <Ship ship={ship} key={ship.id} />
      ))}
    </div>
  );
};

export default ShipResult;
