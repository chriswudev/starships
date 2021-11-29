import React, { useEffect, useState } from 'react';
import { fetchStarShips } from '../../utils/api';
// import NavigationBar from '../navigationBar/NavigationBar';
import ShipResult from '../shipResult/ShipResult';
import './content.css';

const Content = () => {
  const [ships, setShips] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    (async () => {
      const data = await fetchStarShips();
      const { count, next, previous, results } = data;
      setShips(results);
      setTotal(count)
    })();
  }, []);

  return (
    <div className="content">
      {/* <NavigationBar
        onChange={setSearchKey}
        itemsPerPage={10}
        total={total}
        items={ships}
        onSearch={handleSearch}
      /> */}
      <ShipResult ships={ships} />
    </div>
  );
};

export default Content;
