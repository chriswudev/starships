import Ship from './Ship';

const ShipResult = ({ ships }) => {
  return (
    <div className="box">
      {ships.map((ship) => (
        <Ship ship={ship} key={ship.url} />
      ))}
    </div>
  );
};

export default ShipResult;
