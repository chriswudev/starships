const SW_API_BASE_URL = 'https://swapi.dev/api/';

const fetchStarShips = async () => {
  let result = {};
  try {
    const res = await fetch(`${SW_API_BASE_URL}starships`);
    result = await res.json();
  } catch (error) {}
  return result;
};

export { fetchStarShips };
