import moment from './moment';

export default (format) => {
  const date = moment().subtract(1, 'month');
  if (format) {
    return date.format(format);
  }

  return date;
};
