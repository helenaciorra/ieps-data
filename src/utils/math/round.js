import isNullOrNaN from './isNullOrNaN';

const setRoundBase = (decimalsPlaces) =>
  isNullOrNaN(decimalsPlaces) ? 0 : decimalsPlaces;

const isZeroNullOrNaN = (value) => !value || isNullOrNaN(value);

export const round = (value, decimalsPlaces) => {
  if (isZeroNullOrNaN(value)) {
    return 0;
  }

  const base = setRoundBase(decimalsPlaces);

  const roundBase = Math.pow(10, base);

  return Math.round(value * roundBase) / roundBase;
};

export default round;
