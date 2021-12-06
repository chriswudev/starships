const SW_API_BASE_URL = 'https://swapi.dev/api/';

const NON_IMPERIAL_STARSHIP_CLASS = 'star destroyer';

const fetchStarShips = async (page = 1) => {
  let result = {};
  try {
    const res = await fetch(`${SW_API_BASE_URL}starships/?page=${page}`);
    result = await res.json();
  } catch (error) {}
  return result;
};

const fetchAllStarShips = async () => {
  const { count, results } = await fetchStarShips();
  const pageCount = Math.ceil(count / 10);
  const apiPromises = [];
  for (let i = 2; i <= pageCount; i++) {
    apiPromises.push(fetchStarShips(i));
  }
  const restShipGroups = await Promise.all(apiPromises);
  let allShips = [...results];
  restShipGroups.forEach((res) => {
    if (res && res.results) {
      allShips = [...allShips, ...res.results];
    }
  });
  return allShips;
};

const fetchImperialStarShips = async () => {
  const allShips = await fetchAllStarShips();
  const imperialShips = allShips.filter(
    (ship) => ship.starship_class.toLowerCase() !== NON_IMPERIAL_STARSHIP_CLASS
  );
  return imperialShips;
};

export { fetchStarShips, fetchAllStarShips, fetchImperialStarShips };
