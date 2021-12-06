const getImagePath = (modelName) => {
  const fileName = modelName
    .toLowerCase()
    .split(' ')
    .join('_')
    .split('/')
    .join('_');
  return `/assets/img/starships/${fileName}.png`;
};

export { getImagePath };
