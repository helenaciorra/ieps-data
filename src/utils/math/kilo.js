import isNullOrNaN from './isNullOrNaN';
import round from './round';

export const kilo = (value, decimalRoundPlaces = 5) => {
  if (!value || isNullOrNaN(value)) {
    return 0;
  }
  return round(value / 1000, decimalRoundPlaces);
};

export default kilo;
