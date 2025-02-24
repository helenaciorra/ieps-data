import isNullOrNaN from './isNullOrNaN';

export const randomRange = (minParam, maxParam) => {
  if (isNullOrNaN(minParam) || isNullOrNaN(maxParam)) {
    return 0;
  }

  if (minParam > maxParam) {
    return minParam;
  }

  const min = Math.ceil(minParam);
  const max = Math.floor(maxParam);
  const random = Math.random();
  const index = Math.floor(random * (max - min)) + min;

  return index;
};

export default randomRange;
