import React from 'react';
import './ship.css';

const Ship = ({ ship }) => {
  const getImagePath = (modelName) => {
    const fileName = modelName
      .toLowerCase()
      .split(' ')
      .join('_')
      .split('/')
      .join('_');
    return `/assets/img/starships/${fileName}.png`;
  };
  return (
    <div className="ship">
      <p className="ship-title">{ship.name}</p>
      <div className="ship-content">
        <div className="ship-image">
          <img src={getImagePath(ship.model)}></img>
        </div>
        <div className="ship-description">
          <div className="ship-description-item">
            <a href={ship.url} target="_blank">{ship.model}</a>
          </div>
          <div className="ship-description-item">
            <span>{ship.cost_in_credits || 0} credits</span>
          </div>
          <div className="ship-description-item">
            <span>{ship.manufacturer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ship;
