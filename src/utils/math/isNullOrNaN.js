export default (value) =>
  isNaN(+value) || value === null || value === undefined || value === '';
