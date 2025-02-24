export const decimalString = (value) => {
  if (!value) {
    return '00';
  }
  return value < 10 ? `0${value}` : `${value}`;
};

export default decimalString;
